// src/components/GraphQLExplorer.js
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from '@apollo/client';
import { useState } from 'react';

const client = new ApolloClient({
    uri: 'https://graphql.datocms.com/',
    headers: {
        Authorization: `Bearer de8fdc240d7f3e1b94936a2bb43fb6`,
    },
    cache: new InMemoryCache(),
});

const TOPICS_QUERY = gql`
    query {
        allTopLevelTopics {
            id
            topLevelTopic
        }
    }
`;

function GraphQLTest() {
    const { loading, error, data } = useQuery(TOPICS_QUERY);

    return (
        <div>
            <h2>DatoCMS Top Level Topics</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <ul>
                    {data.allTopLevelTopics.map((topic) => (
                        <li key={topic.id}>{topic.topLevelTopic}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default GraphQLTest;
