/* eslint-disable prettier/prettier */ 
import { useState, useRef } from "react";

const DragNDrop = ({data}) => {
  const [list, setList] = useState(data);
  const [isDragging, setIsDragging] = useState(false);

  const draggedItem = useRef();
  const draggedNode = useRef();

  const handleDragStart = (e, params) => {
    draggedItem.current = params;
    draggedNode.current = e.target;
    draggedNode.current.addEventListener('dragend',handleDragEnd);
    setTimeout(() => {
      setIsDragging(true);
    },0);
  }

  const handleDragEnd = () => {
    setIsDragging(false);
    draggedItem.current = null;
    draggedNode.current.removeEventListener('dragend',handleDragEnd);
    draggedNode.current = null;
  }

  const getStyles = (params) => {
    const currentDraggedItem = draggedItem.current;
    if(currentDraggedItem.groupI === params.groupI && currentDraggedItem.itemI === params.itemI) return 'dragged dnd-item'
    return 'dnd-item'
  }

  const handleDragEnter = (e, params) => {
    const currentDraggedItem = draggedItem.current;
    if(e.target !== draggedNode.current){
      setList(oldList => {
        const newList = [...oldList];
        newList[params.groupI].items.splice(params.itemI, 0, newList[currentDraggedItem.groupI].items.splice(currentDraggedItem.itemI,1)[0])
        draggedItem.current = params;
        return newList;
      })
    }
  };

  return (
    <div className="drag-n-drop">
      {list.map((group, groupI) => (
        <div 
          key={groupI} 
          className="dnd-group"
          onDragEnter={!group.items.length ? (e) => handleDragEnter(e, {groupI,itemI: 0}) :null}
        >
          <div className="group-title">{group.title}</div>
          {group.items.map((item, itemI) => (
            <div 
              key={itemI} 
              className={isDragging ? getStyles({groupI,itemI}) : "dnd-item" }
              draggable 
              onDragStart={(e) => handleDragStart(e,{groupI,itemI})}
              onDragEnter={(e) => handleDragEnter(e,{groupI,itemI})}
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
