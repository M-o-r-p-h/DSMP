import React, { useState, useCallback } from 'react';
import ReactModal from 'react-modal';
import MindMap from './components/MindMap/MindMap.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { initialNodes } from './constants/nodes';
import { initialEdges } from './constants/edges';
import './App.css';

ReactModal.setAppElement('#root');

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
        <div className="app">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <MindMap
                initialNodes={initialNodes}
                initialEdges={initialEdges}
                onNodeClick={handleNodeClick}
                searchTerm={searchTerm}
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
    );
}

export default App;
