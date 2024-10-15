// toolbar.js

import s from "./toolbar.module.scss";
import { DraggableNode } from "../DraggableNode/draggableNode";
import SubmitButton from "../Components/SubmitButton/SubmitButton";

const nodes = [
  {
    type: "input",
    label: "Input",
    blocks: [
      {
        type: "input",
        label: "Input",
        value: "Input",
      },
      {
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
    type: "llm",
    label: "LLM",
    blocks: [
      {
        type: "text",
        value: "LLM",
      },
    ],
  },
  {
    type: "output",
    label: "Output",
    blocks: [
      {
        type: "input",
        label: "Output",
        value: "output",
      },
      {
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
    type: "text",
    label: "Text",
    blocks: [
      {
        type: "input",
        label: "Text",
        value: "output",
      },
    ],
  },
  {
    type: "CustomNode",
    label: "CustomNode",
    blocks: [
      {
        type: "input",
        label: "Input",
        value: "Input",
      },
      {
        type: "select",
        label: "Select",
        options: [
          { text: "item1", value: "item1" },
          { text: "item2", value: "item2" },
          { text: "item3", value: "item3" },
        ],
      },
      {
        type: "input",
        label: "Input",
        value: "Input",
      },
      {
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
          nodes.map(({ type, label, blocks }) => (
            <DraggableNode type={type} label={label} blocks={blocks} />
          ))}
      </div>
      <SubmitButton className={s.submitButton} />
    </div>
  );
};
