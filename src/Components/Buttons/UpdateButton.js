import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UpdateButton({ animalId }) {
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate(`/updateAnimal/${animalId}`);
  };

  return <Button variant="outline-primary" className="Button" onClick={handleUpdate}>Update</Button>;
}

export default UpdateButton;
