import React, { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    Background,
    Controls,
    MiniMap,
} from 'reactflow';
import dagre from 'dagre';
import { debounce } from 'lodash';
import CustomNode from '../CustomNode/CustomNode.jsx';
import './MindMap.css';
import 'reactflow/dist/style.css';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction, nodesep: 70, ranksep: 70 });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const layoutedNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        const newNode = {
            ...node,
            targetPosition: isHorizontal ? 'left' : 'top',
            sourcePosition: isHorizontal ? 'right' : 'bottom',
            position: {
                x: nodeWithPosition.x - nodeWidth / 2,
                y: nodeWithPosition.y - nodeHeight / 2,
            },
        };
        return newNode;
    });

    return { nodes: layoutedNodes, edges };
};

const nodeTypes = { CustomNode };

const MindMap = ({ initialNodes, initialEdges, onNodeClick, searchTerm }) => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(
        () => getLayoutedElements(initialNodes, initialEdges),
        [initialNodes, initialEdges],
    );

    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

    const onConnect = useCallback(
        (params) =>
            setEdges((eds) =>
                addEdge(
                    {
                        ...params,
                        type: 'smoothstep',
                        markerEnd: { type: 'arrowclosed' },
                    },
                    eds,
                ),
            ),
        [setEdges],
    );

    const debouncedSetNodes = useMemo(
        () => debounce((newNodes) => setNodes(newNodes), 100),
        [setNodes],
    );

    const graphBounds = useMemo(() => {
        if (nodes.length === 0)
            return [
                [0, 0],
                [0, 0],
            ];
        let minX = Infinity,
            minY = Infinity,
            maxX = -Infinity,
            maxY = -Infinity;
        nodes.forEach((node) => {
            minX = Math.min(minX, node.position.x);
            minY = Math.min(minY, node.position.y);
            maxX = Math.max(maxX, node.position.x + (node.width || nodeWidth));
            maxY = Math.max(
                maxY,
                node.position.y + (node.height || nodeHeight),
            );
        });
        return [
            [minX - 50, minY - 50],
            [maxX + 50, maxY + 50],
        ];
    }, [nodes]);

    useEffect(() => {
        const updateNodes = () => {
            debouncedSetNodes((nds) =>
                nds.map((node) => ({
                    ...node,
                    style: {
                        ...node.style,
                        opacity: searchTerm
                            ? node.data.label
                                  .toLowerCase()
                                  .includes(searchTerm.toLowerCase())
                                ? 1
                                : 0.3
                            : 1,
                    },
                })),
            );
        };
        const rafId = window.requestAnimationFrame(updateNodes);
        return () => window.cancelAnimationFrame(rafId);
    }, [searchTerm, debouncedSetNodes]);

    return (
        <div className="mind-map">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                fitView
                fitViewOptions={{ padding: 0.2, minZoom: 0.5, maxZoom: 2 }}
                nodeTypes={nodeTypes}
                panOnDrag={true}
                translateExtent={graphBounds}
                defaultEdgeOptions={{
                    type: 'smoothstep',
                    markerEnd: { type: 'arrowclosed' },
                }}
            >
                <Background color="#333333" variant="dots" />
                <Controls />
                <MiniMap
                    pannable={true}
                    zoomable={true}
                    nodeStrokeWidth={3}
                    nodeColor={(node) =>
                        node.data.branch
                            ? getBranchColor(node.data.branch)
                            : '#333333'
                    }
                    style={{ background: '#f0f0f0', width: 200, height: 150 }}
                    maskColor="rgba(0, 0, 0, 0.3)"
                />
            </ReactFlow>
        </div>
    );
};

const getBranchColor = (branch) => {
    const colors = {
        occult: '#4b0082',
        military: '#2f4f4f',
        financial: '#006400',
        political: '#8b0000',
        extraterrestrial: '#483d8b',
        media: '#8a2be2',
        religious: '#8b4513',
        trump: '#ff4500',
    };
    return colors[branch] || '#333333';
};

MindMap.propTypes = {
    initialNodes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired,
            }).isRequired,
            data: PropTypes.shape({
                label: PropTypes.string.isRequired,
                info: PropTypes.string.isRequired,
                branch: PropTypes.string,
                icon: PropTypes.string,
            }).isRequired,
        }),
    ).isRequired,
    initialEdges: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            target: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            markerEnd: PropTypes.shape({
                type: PropTypes.string.isRequired,
            }).isRequired,
        }),
    ).isRequired,
    onNodeClick: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
};

export default MindMap;
