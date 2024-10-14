import { useState } from "react";
import { Handle, Position } from "reactflow";
import Text from "./Blocks/Text/Text";
import Input from "./Blocks/Input/Input";
import Select from "./Blocks/Select/Select";

const Blocks = {
  text: Text,
  input: Input,
  select: Select,
};

export const NodeBuilder = ({ id, data }) => {
  const blocks = data?.blocks || [];
  console.log(blocks)

  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      {blocks.map((item, index) => {
        const Block = Blocks[item.type];
        if (!Block) {
          console.warn(`Block type "${item.name}" not found.`);
          return null;
        }
        return <Block key={index} {...item} />;
      })}
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </div>
  );
};

export default NodeBuilder;
