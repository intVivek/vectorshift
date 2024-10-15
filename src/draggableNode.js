// draggableNode.js

import BlocksIcons from "./Components/Icons";
import s from './draggableNode.module.scss'

export const DraggableNode = ({ type, label, blocks}) => {
    const onDragStart = (event, nodeType, b) => {
      const appData = { nodeType, blocks: b }
      console.log(appData)
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    const Icon = BlocksIcons[type] || (() => <></>);
  
    return (
      <div
        onDragStart={(event) => onDragStart(event, type, blocks)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        className={s.draggableNode}
        draggable
      >
        <Icon className={s.icon}/>
          <span className={s.text}>{label}</span>
      </div>
    );
  };
  