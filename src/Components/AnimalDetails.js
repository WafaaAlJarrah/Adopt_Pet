import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnimal } from "../Redux/actions/AnimalAction";
import { useDispatch, useSelector } from "react-redux";
import UpdateButton from "./Buttons/UpdateButton";
import DeleteButton from "./Buttons/DeleteButton";
import AdoptButton from "./Buttons/AdoptButton";

function AnimalDetails() {
  const dispatch = useDispatch();
  const param = useParams();
  const animalId = param.animalId;
  console.log(animalId);
  const { animal } = useSelector((state) => state.AnimalReducer);
  console.log("animal before dispatch", animal);

  useEffect(() => {
    dispatch(getAnimal(animalId));
  }, [dispatch, animalId]);

  return !animal ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h2>{animal.name}</h2>
      <img src={
            animal.image
              ? process.env.REACT_APP_PUBLIC_FOLDER + animal.image
              : ""
          } alt={animal.name} />

      <div>
        <h3>Type: {animal.type}</h3>
        <p>Specification: {animal.specification.name}</p>
        <p>Age: {animal.age}</p>
        <p>Gender: {animal.gender}</p>
        <p>Color: {animal.color}</p>
        <p>Location: {animal.location}</p>
        <p>Description: {animal.description}</p>
        <p>Budget: {animal.budget} %</p>
        <p>Likes: {animal.likes.length}</p>
      </div>
      <div>
        <AdoptButton animalId={animal._id} adopted={animal.adopted}/>
        <UpdateButton animalId={animal._id}/>
        <DeleteButton animalId={animal._id}/>
      </div>
    </div>
  );
}

export default AnimalDetails;
