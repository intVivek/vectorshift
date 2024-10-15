import React, { useState } from "react";
import s from "./SubmitButton.module.scss";
import { FaPlay } from "react-icons/fa";
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";
import usePipelineSubmission from "../../hooks/usePipelineSubmission";
import ShowDAGModal from "../ShowDAGModal/ShowDAGModal";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const mutation = usePipelineSubmission();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = () => {
    const pipelineData = {
      nodes: nodes.map((node) => ({ id: node.id })),
      edges: edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
      })),
    };

    mutation.mutate(pipelineData, {
      onSuccess: () => {
        setModalIsOpen(true);
      },
    });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button className={s.SubmitButton} onClick={handleSubmit}>
        {mutation.isPending ? (
          <div className={s.spinner}></div>
        ) : (
          <>
            <FaPlay className={s.icon} />
            {"Submit"}
          </>
        )}
      </button>
      <ShowDAGModal 
        isOpen={modalIsOpen} 
        onClose={closeModal} 
        data={mutation.data || { num_nodes: 0, num_edges: 0, is_dag: false }} 
      />
    </>
  );
};

export default SubmitButton;
