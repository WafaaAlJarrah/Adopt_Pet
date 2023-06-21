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
import { Row, Col, CardGroup } from "react-bootstrap";

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
      <CardGroup>
      <Card style={{ width: '30rem', padding: '30px' }}>

        <Card.Img variant="top" src={
          animal.image ? process.env.REACT_APP_PUBLIC_FOLDER + animal.image : ""
        }
          alt={animal.name} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bolder" }}>{animal.name}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            <h3 style={{ fontWeight: "bolder" , color: "#333"}}>TYPE: {animal.type}</h3><br></br>
            <Row>
              <Col>
                <ul>

                  <li> <h5>Specification: {animal.specification.name}</h5></li>
                  <li> <h5>Age: {animal.age}</h5></li>
                  <li> <h5>Gender: {animal.gender}</h5></li>
                  <li> <h5>Color: {animal.color}</h5></li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li> <h5>Location: {animal.location}</h5></li>
                  <li> <h5>Budget: {animal.budget} $</h5></li>
                  <li> <h5>Likes: {animal.likes.length}</h5></li><br></br>
                  <li> <h5>Description: {animal.description}</h5></li>
                </ul>
              </Col>
            </Row>
          </Card.Text>
          <AdoptButton animalId={animal._id} adopted={animal.adopted} />
          <UpdateButton animalId={animal._id} />
          <DeleteButton animalId={animal._id} />
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' , padding: '30px'}}>

        <Card.Img variant="top" src={
          animal.image ? process.env.REACT_APP_PUBLIC_FOLDER + animal.image : ""
        }
          alt={animal.name} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bolder" }}>{animal.name}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            <h3 style={{ fontWeight: "bolder" , color: "#333"}}>TYPE: {animal.type}</h3><br></br>
            <Row>
              <Col>
                <ul>

                  <li> <h5>Specification: {animal.specification.name}</h5></li>
                  <li> <h5>Age: {animal.age}</h5></li>
                  <li> <h5>Gender: {animal.gender}</h5></li>
                  <li> <h5>Color: {animal.color}</h5></li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li> <h5>Location: {animal.location}</h5></li>
                  <li> <h5>Budget: {animal.budget} $</h5></li>
                  <li> <h5>Likes: {animal.likes.length}</h5></li><br></br>
                  <li> <h5>Description: {animal.description}</h5></li>
                </ul>
              </Col>
            </Row>
          </Card.Text>
          <AdoptButton animalId={animal._id} adopted={animal.adopted} />
          <UpdateButton animalId={animal._id} />
          <DeleteButton animalId={animal._id} />
        </Card.Body>
      </Card>
      </CardGroup>
    </div>




  );
}

export default AnimalDetails;
