import React from 'react';
import Modal from 'react-modal';
import s from './ShowDAGModal.module.scss';

const ShowDAGModal = ({ isOpen, onClose, data }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modalContent}
      overlayClassName={s.modalOverlay}
    >
      <h2>Pipeline Submission Details</h2>
      <p>Number of Nodes: {data.num_nodes}</p>
      <p>Number of Edges: {data.num_edges}</p>
      <p>Directed acyclic graph (DAG): {data.is_dag ? "Yes" : "No"}</p>
      <button className={s.closeButton} onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ShowDAGModal;