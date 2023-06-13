import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { archiveAnimal, deleteAnimal } from "../../Redux/actions/AnimalAction";

function DeleteButton({ animalId }) {
  const dispatch = useDispatch();
  const deleteButton = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this animal?"
    );

    if (confirmDelete) {
      dispatch(archiveAnimal(animalId))
        .then(() => {
          window.location.reload(); // Reload the page after archiving
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return <Button variant="outline-primary" onClick={deleteButton}>Delete</Button>;
}

export default DeleteButton;
