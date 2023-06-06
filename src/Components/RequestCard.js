import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import AcceptRequestButton from "./Buttons/AcceptRequestButton";
import RejectRequestButtons from "./Buttons/RejectRequestButtons";

function RequestCard({ request }) {
  console.log("request ", request);
  const { message, sender, animal } = request;
  const requestId = request._id;
  const animalId = request.animal._id;
  return (
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col xs={8}>
            <h5>Request Message:</h5>
            <p>{message}</p>
            <h5>Sender Details:</h5>
            <p>Name: {sender.fullName}</p>
            <p>Email: {sender.email}</p>
            {sender.phoneNB ? <p>Phone Number: {sender.phoneNB}</p> : null}
            <h5>Animal Details:</h5>
            <p>Name: {animal.name}</p>
            <p>Description: {animal.description}</p>
            <p>Budget: {animal.budget}</p>
            <p>Type: {animal.type}</p>
            <p>Specification: {animal.specification.name}</p>
            <img
              src={
                animal.image
                  ? process.env.REACT_APP_PUBLIC_FOLDER + animal.image
                  : ""
              }
            />
          </Col>
          <Col xs={4}>
            <AcceptRequestButton requestId={requestId} animalId={animalId} />
            <RejectRequestButtons requestId={requestId} animalId={animalId} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default RequestCard;
