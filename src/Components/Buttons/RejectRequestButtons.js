import React from "react";
import { Button } from "react-bootstrap";
import { archiveRequest } from "../../Redux/actions/RequestAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadHistory } from "../../Redux/actions/UploadAction";
import { updateAnimal } from "../../Redux/actions/AnimalAction";

function RejectRequestButtons({ requestId, animalId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReject = async () => {
    await dispatch(archiveRequest(requestId));
    await dispatch(uploadHistory(requestId, { status: "rejected" }));
    //await dispatch(updateAnimal(animalId, { adopted: false }));
    navigate("/allRequests");
  };
  return (
    <Button variant="danger" onClick={handleReject}>
      Reject
    </Button>
  );
}

export default RejectRequestButtons;
