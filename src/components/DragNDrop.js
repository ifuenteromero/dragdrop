/* eslint-disable prettier/prettier */ 
import { useState, useRef } from "react";

const DragNDrop = ({data}) => {
  const [list, setList] = useState(data);
  const [isDragging, setIsDragging] = useState(false);

  const draggedItem = useRef();

  const handleDragStart = (e, params) => {
    draggedItem.current = params;
    setTimeout(() => {
      setIsDragging(true);
    },0)
  }

  const handleDragEnd = () => {
    draggedItem.current = null;
    setIsDragging(false);
  }

  const getStyles = (params) => {
    const currentDraggedItem = draggedItem.current;
    if(currentDraggedItem.groupI === params.groupI && currentDraggedItem.itemI === params.itemI) return 'dragged dnd-item'
    return 'dnd-item'
  }

  return (
    <div className="drag-n-drop">
      {list.map((group, groupI) => (
        <div key={groupI} className="dnd-group">
          <div className="group-title">{group.title}</div>
          {group.items.map((item, itemI) => (
            <div 
              key={itemI} 
              className={isDragging ? getStyles({groupI,itemI}) : "dnd-item" }
              draggable 
              onDragStart={(e ) => handleDragStart(e,{groupI,itemI})}
              onDragEnd={handleDragEnd}
            >
              <div>
                <p>{`ITEM ${item}`}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DragNDrop;
