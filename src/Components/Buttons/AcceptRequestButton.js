import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { archiveRequest } from "../../Redux/actions/RequestAction";
import { uploadHistory } from "../../Redux/actions/UploadAction";
import { updateAnimal } from "../../Redux/actions/AnimalAction";

function AcceptRequestButton({ requestId, animalId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAccept = async () => {
    await dispatch(archiveRequest(requestId));
    await dispatch(uploadHistory(requestId,  "accepted" ));
    await dispatch(updateAnimal(animalId, { adopted: true }));
    navigate("/allRequests");
  };
  return (
    <Button variant="success" className="mr-2" onClick={handleAccept}>
      Accept
    </Button>
  );
}

export default AcceptRequestButton;
