import { useState } from "react";
import { Handle, Position } from "reactflow";
import Text from "./Blocks/Text/Text";
import Input from "./Blocks/Input/Input";
import Select from "./Blocks/Select/Select";
import s from "./NodeBuilder.module.scss";
import BlocksIcons from "./Icons";

const Blocks = {
  text: Text,
  input: Input,
  select: Select,
};

export const NodeBuilder = ({ id, data }) => {

  const type = data?.nodeType;
  const blocks = data?.blocks || [];

  const Icon = BlocksIcons[type] || (() => <></>);

  return (
    <div className={s.nodeBuilder}>
      <div className={s.heading}><Icon className={s.icon}/><span className={s.label}>{type}</span></div>
      <div className={s.container}>
        {blocks.map((item, index) => {
          const Block = Blocks[item.type];
          if (!Block) {
            return null;
          }
          return <Block key={index} {...item} />;
        })}
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </div>
  );
};

export default NodeBuilder;
