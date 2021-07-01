import React, { useRef } from "react";
import { useAppState } from "./AppStateContext";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnTitle, ColumnContainer } from "./styles";
import { useItemDrag } from "./useItemDrag";
import { DragItem } from "./DragItem";
import { useDrop } from "react-dnd";
import { isHidden } from "./utils/isHidden";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column = ({ text, index, id }: ColumnProps) => {
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
    },
  });

  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });
  drag(ref);
  drag(drop(ref));
  return (
    <ColumnContainer
      isHidden={isHidden(state.draggedItem, "COLUMN", id)}
      ref={ref}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, listId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};
