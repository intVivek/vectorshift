// toolbar.js

import { DraggableNode } from "./draggableNode";

const blocks = [
  {
    type: "input",
    value: "123",
  },
  {
    type: "select",
    options: [
      { text: "item1", value: "item1" },
      { text: "item2", value: "item2" },
      { text: "item3", value: "item3" },
    ],
  },
];

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="CustomNode" label="Text" blocks={blocks} />
      </div>
    </div>
  );
};
