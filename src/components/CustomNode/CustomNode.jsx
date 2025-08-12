import React from 'react';
import PropTypes from 'prop-types';
import { Handle } from 'reactflow';
import './CustomNode.css';

const CustomNode = ({ data }) => {
  return (
    <>
      <Handle type="target" position="top" style={{ opacity: 0 }} />
      <div className={`custom-node ${data.branch || ''}`}>
        {data.icon && (
          <img
            src={data.icon}
            alt={`${data.label} icon`}
            className="node-icon"
          />
        )}
        {data.label}
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
  }).isRequired,
};

export default CustomNode;
