import React from "react";
import { useAppState } from "./AppStateContext";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnTitle, ColumnContainer } from "./styles";

interface ColumnProps {
  text: string;
  index: number;
}

export const Column = ({ text, index }: ColumnProps) => {
  const { state } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => console.log(text)}
        dark
      />
    </ColumnContainer>
  );
};
