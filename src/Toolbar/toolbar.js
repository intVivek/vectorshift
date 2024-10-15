// toolbar.js

import s from './toolbar.module.scss';
import { DraggableNode } from "../DraggableNode/draggableNode";
import SubmitButton from '../Components/SubmitButton/SubmitButton';

const blocks = [
  {
    type: "input",
    value: "Input",
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
    <div className={s.toolbarContainer}>
      <div className={s.toolbarItems}>
        <DraggableNode type="input" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="output" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="CustomNode" label="Text" blocks={blocks} />
      </div>
      <SubmitButton className={s.submitButton} />
    </div>
  );
};
