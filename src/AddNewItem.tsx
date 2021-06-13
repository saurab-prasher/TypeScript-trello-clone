import React from "react";
import { AddItemButton } from "./styles";
import { NewItemForm } from "./NewItemForm";

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem = ({
  onAdd,
  toggleButtonText,
  dark,
}: AddNewItemProps) => {
  const [showForm, setShowForm] = React.useState(false);

  if (showForm) {
    // Item creation form rendered
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
