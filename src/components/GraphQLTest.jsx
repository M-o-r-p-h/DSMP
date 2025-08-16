// src/components/GraphQLExplorer.js
import { useQuery, gql } from '@apollo/client';

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
