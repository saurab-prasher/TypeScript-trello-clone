import React from "react";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import { AppContainer } from "./styles";

function App() {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => console.log(text)}
      />
    </AppContainer>
  );
}

export default App;
