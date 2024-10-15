// draggableNode.js

import BlocksIcons from "../Components/Icons";
import s from './draggableNode.module.scss'

export const DraggableNode = (data) => {
    const onDragStart = (event, data) => {
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
      event.dataTransfer.effectAllowed = 'move';
    };

    const Icon = BlocksIcons[data?.type] || (() => <></>);
  
    return (
      <div
        onDragStart={(event) => onDragStart(event, data)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        className={s.draggableNode}
        draggable
      >
        <Icon className={s.icon}/>
          <span className={s.text}>{data?.label}</span>
      </div>
    );
  };
  