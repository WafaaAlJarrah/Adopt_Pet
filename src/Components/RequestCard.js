import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import AcceptRequestButton from "./Buttons/AcceptRequestButton";
import RejectRequestButtons from "./Buttons/RejectRequestButtons";
import Sidebar from "./Admin/Sidebar";

function RequestCard({ request }) {
  // console.log("request ", request);
  const { message, sender, animal } = request;
  const requestId = request._id;
  const animalId = request.animal._id;
  return (
    <div style={{display: "flex"}}>
      <Sidebar />
      
     <CardGroup>
    <Card style={{  textAlign: "left", margin: '20px' }}>
      <Row>
        <Col>
      <Card.Img variant="top" src={
        animal.image
          ? process.env.REACT_APP_PUBLIC_FOLDER + animal.image
          : ""
      } />
      <Card.Body>
        <Card.Title>Request Message: </Card.Title><p>{message}</p>
        <Card.Title> Name: </Card.Title><p>{sender.fullName}</p>
        <Card.Title> Email: </Card.Title> <p>{sender.email}</p>
        {sender.phoneNB ? <Card.Title>Phone Number: {sender.phoneNB}</Card.Title> : null}
      </Card.Body>
      </Col>
      <Col>
      <Card.Body>
        <Card.Title style={{ textAlign: "left" }}>Animal Details</Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>Name:</b> {animal.name}</ListGroup.Item>
        <ListGroup.Item><b>Description:</b> {animal.description}</ListGroup.Item>
        <ListGroup.Item><b>Budget:</b> {animal.budget}</ListGroup.Item>
        <ListGroup.Item><b>Type:</b> {animal.type}</ListGroup.Item>
        <ListGroup.Item><b>Specification:</b> {animal.specification.name}</ListGroup.Item>
      </ListGroup>
      <Card.Body style={{ textAlign: "left" }}>
        <AcceptRequestButton requestId={requestId} animalId={animalId} />
        <RejectRequestButtons requestId={requestId} animalId={animalId} />
      </Card.Body>
      </Col>
    </Row>
    </Card>
    <Card style={{  textAlign: "left", margin: '20px' }}>
      <Row>
        <Col>
      <Card.Img variant="top" src={
        animal.image
          ? process.env.REACT_APP_PUBLIC_FOLDER + animal.image
          : ""
      } />
      <Card.Body>
        <Card.Title>Request Message: </Card.Title><p>{message}</p>
        <Card.Title> Name: </Card.Title><p>{sender.fullName}</p>
        <Card.Title> Email: </Card.Title> <p>{sender.email}</p>
        {sender.phoneNB ? <Card.Title>Phone Number: {sender.phoneNB}</Card.Title> : null}
      </Card.Body>
      </Col>
      <Col>
      <Card.Body>
        <Card.Title style={{ textAlign: "left" }}>Animal Details</Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush">
      <ListGroup.Item><b>Name:</b> {animal.name}</ListGroup.Item>
        <ListGroup.Item><b>Description:</b> {animal.description}</ListGroup.Item>
        <ListGroup.Item><b>Budget:</b> {animal.budget}</ListGroup.Item>
        <ListGroup.Item><b>Type:</b> {animal.type}</ListGroup.Item>
        <ListGroup.Item><b>Specification:</b> {animal.specification.name}</ListGroup.Item>
      </ListGroup>
      <Card.Body style={{ textAlign: "left" }}>
        <AcceptRequestButton requestId={requestId} animalId={animalId} />
        <RejectRequestButtons requestId={requestId} animalId={animalId} />
      </Card.Body>
      </Col>
    </Row>
    </Card>
    </CardGroup>
    </div>
  );
}

export default RequestCard;

