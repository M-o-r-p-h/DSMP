import React from 'react';
import PropTypes from 'prop-types';
import { Handle } from 'reactflow';
import './CustomNode.css';

const CustomNode = ({ data }) => {
    const shapeClass = data.shape ? `shape-${data.shape}` : 'shape-box';
    const sizeClass = data.size ? `size-${data.size}` : 'size-medium';
    const borderClass =
        data.border === false || data.shape === 'none' ? 'no-border' : '';
    const backgroundClass = data.background === false ? 'no-background' : '';

    return (
        <>
            <Handle type="target" position="top" style={{ opacity: 0 }} />
            <div
                className={`custom-node ${shapeClass} ${sizeClass} ${borderClass} ${backgroundClass} ${
                    data.branch || ''
                }`}
                style={{
                    color: data.background === false ? '#000' : '#fff', // black if false, white if true
                }}
            >
                {data.icon && (
                    <img
                        src={data.icon}
                        alt={`${data.label} icon`}
                        className="node-icon"
                    />
                )}
                <span>{data.label}</span>
            </div>
            <Handle type="source" position="bottom" style={{ opacity: 0 }} />
        </>
    );
};

CustomNode.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        branch: PropTypes.string,
        icon: PropTypes.string,
        shape: PropTypes.oneOf(['box', 'circle', 'ellipse', 'diamond', 'none']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        border: PropTypes.bool,
        background: PropTypes.bool,
    }).isRequired,
};

export default CustomNode;
