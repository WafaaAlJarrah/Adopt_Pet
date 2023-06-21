import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnimal } from "../Redux/actions/AnimalAction";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateButton from "./Buttons/UpdateButton";
import DeleteButton from "./Buttons/DeleteButton";
import AdoptButton from "./Buttons/AdoptButton";
import Filter from './Filter';

function AnimalDetails() {
  const dispatch = useDispatch();
  const param = useParams();
  const animalId = param.animalId;
  console.log(animalId);
  const { animal } = useSelector((state) => state.AnimalReducer);
  console.log("animal details", animal);

  useEffect(() => {
    dispatch(getAnimal(animalId));
  }, [dispatch, animalId]);


  return !animal ? (

    <div>Loading...</div>
  ) : (
    <div style={{ display: "flex" }}>
      <div>
        <Filter />
      </div>
      <Card >
        <Card.Title>{animal.name}</Card.Title>
        <Card.Img variant="top" src={
          animal.image ? process.env.REACT_APP_PUBLIC_FOLDER + animal.image : ""
        }
          alt={animal.name} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <h3>Type: {animal.type}</h3>
            <h5>Specification: {animal.specification.name}</h5>
            <h5>Age: {animal.age}</h5>
            <h5>Gender: {animal.gender}</h5>
            <h5>Color: {animal.color}</h5>
            <h5>Location: {animal.location}</h5>
            <h5>Description: {animal.description}</h5>
            <h5>Budget: {animal.budget} %</h5>
            <h5>Likes: {animal.likes.length}</h5>
          </Card.Text>
          <AdoptButton animalId={animal._id} adopted={animal.adopted} />
          <UpdateButton animalId={animal._id} />
          <DeleteButton animalId={animal._id} />
        </Card.Body>
      </Card>
    </div>




  );
}

export default AnimalDetails;
