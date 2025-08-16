import React, { useState, useCallback } from 'react';
import ReactModal from 'react-modal';
import MindMap from './components/MindMap/MindMap.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import './App.css';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from '@apollo/client';

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

ReactModal.setAppElement('#root');

import PropTypes from 'prop-types';

function DatoNodesMap({ searchTerm, onNodeClick }) {
    const { loading, error, data } = useQuery(TOPICS_QUERY);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Map Dato nodes to React Flow node structure
    const datoNodes = data.allTopLevelTopics.map((topic, idx) => ({
        id: topic.id,
        type: 'CustomNode',
        position: { x: idx * 200, y: 100 }, // simple horizontal layout
        data: {
            label: topic.topLevelTopic,
            info: '', // Add more fields if available
            icon: '', // Add icon if available
            shape: 'box',
            size: 'medium',
            border: true,
            background: true,
        },
    }));

    return (
        <MindMap
            initialNodes={datoNodes}
            initialEdges={[]}
            onNodeClick={onNodeClick}
            searchTerm={searchTerm}
        />
    );
}
DatoNodesMap.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onNodeClick: PropTypes.func.isRequired,
};

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedNode, setSelectedNode] = useState(null);

    const handleNodeClick = useCallback((event, node) => {
        setSelectedNode(node);
        setModalIsOpen(true);
    }, []);

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedNode(null);
    };

    return (
        <ApolloProvider client={client}>
            <div className="app">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <DatoNodesMap
                    searchTerm={searchTerm}
                    onNodeClick={handleNodeClick}
                />
                <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Node Details"
                    className="modal"
                    overlayClassName="overlay"
                >
                    {selectedNode && (
                        <div>
                            <h2>{selectedNode.data.label}</h2>
                            <p>{selectedNode.data.info}</p>
                            <button onClick={closeModal}>Close</button>
                        </div>
                    )}
                </ReactModal>
                <h1>Deep State Mapping Project</h1>
            </div>
        </ApolloProvider>
    );
}

export default App;
