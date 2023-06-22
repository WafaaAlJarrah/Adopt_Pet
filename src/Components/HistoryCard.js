import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function HistoryCard({ history }) {
  console.log("history ", history);
  const { requestInfo, status } = history;
  console.log("requestInfo ", requestInfo);
  return (
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col xs={8}>
            <h5>History status:</h5>
            <p>{status}</p>
          </Col>
          <Col xs={8}>
            <h5>Request info:</h5>
            <p> Sender name: {requestInfo.sender.fullName}</p>
            <p> Animal name: {requestInfo.animal.name}</p>
            <p> Animal specification: {requestInfo.animal.specification.name}</p>
            <p>Request message: {requestInfo.message}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default HistoryCard;
