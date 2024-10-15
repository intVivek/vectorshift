// toolbar.js

import s from "./toolbar.module.scss";
import { DraggableNode } from "../DraggableNode/draggableNode";
import SubmitButton from "../SubmitButton/SubmitButton";

const nodes = [
  {
    id: "node-0",
    type: "input",
    label: "Input",
    blocks: [
      {
        id: "input-0-block-0",
        type: "input",
        label: "Input",
        value: "Input",
      },
      {
        id: "input-0-block-1",
        type: "select",
        label: "Select",
        options: [
          { text: "item1", value: "item1" },
          { text: "item2", value: "item2" },
          { text: "item3", value: "item3" },
        ],
      },
    ],
  },
  {
    id: "node-1",
    type: "llm",
    label: "LLM",
    blocks: [
      {
        id: "llm-1-block-0",
        type: "text",
        value: "LLM",
      },
    ],
  },
  {
    id: "node-2",
    type: "output",
    label: "Output",
    blocks: [
      {
        id: "output-2-block-0",
        type: "input",
        label: "Output",
        value: "output",
      },
      {
        id: "output-2-block-1",
        type: "select",
        label: "Select",
        options: [
          { text: "item1", value: "item1" },
          { text: "item2", value: "item2" },
          { text: "item3", value: "item3" },
        ],
      },
    ],
  },
  {
    id: "node-3",
    type: "text",
    label: "Text",
    blocks: [
      {
        id: "text-3-block-0",
        type: "input",
        label: "Text",
        value: "output",
      },
    ],
  },
  {
    id: "node-4",
    type: "CustomNode",
    label: "CustomNode",
    blocks: [
      {
        id: "customnode-4-block-0",
        type: "input",
        label: "Input",
        value: "Input",
      },
      {
        id: "customnode-4-block-1",
        type: "select",
        label: "Select",
        options: [
          { text: "item1", value: "item1" },
          { text: "item2", value: "item2" },
          { text: "item3", value: "item3" },
        ],
      },
      {
        id: "customnode-4-block-2",
        type: "input",
        label: "Input",
        value: "Input",
      },
      {
        id: "customnode-4-block-3",
        type: "select",
        label: "Select",
        options: [
          { text: "item1", value: "item1" },
          { text: "item2", value: "item2" },
          { text: "item3", value: "item3" },
        ],
      },
    ],
  },
];


export const PipelineToolbar = () => {
  return (
    <div className={s.toolbarContainer}>
      <div className={s.toolbarItems}>
        {nodes &&
          nodes.map(({ id, type, label, blocks }) => (
            <DraggableNode key={id} id={id} type={type} label={label} blocks={blocks} />
          ))}
      </div>
      <SubmitButton className={s.submitButton} />
    </div>
  );
};
