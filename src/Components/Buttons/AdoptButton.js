import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sendRequest } from "../../Redux/actions/RequestAction";

function AdoptButton({ animalId, adopted }) {
  const dispatch = useDispatch();
  //   const { user } = useSelector((state) => state.AuthReduder.authData);
  const adoptButton = () => {
    const userId = "643123d0b258b76b34e0cee0";
    const animalID = animalId;
    const msg = prompt(
      "Please enter your message then press 'OK' to send your request:"
    );
    const newRequest = {
      message: msg,
      sender: userId, //user._id,
      animal: animalID,
    };
    if (msg) {
      dispatch(sendRequest(newRequest));
      alert("Your request has been sent successfully ❤️");
    }
  };
  return <Button disabled={adopted} onClick={adoptButton}>Adopt</Button>;
}

export default AdoptButton;
