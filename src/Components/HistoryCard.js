import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function HistoryCard({ history }) {
  console.log("history ", history);
  const { requestInfo, status } = history;
  console.log("requestInfo ", requestInfo);
  console.log("status ", status);
  return (
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col xs={8}>all histories</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default HistoryCard;
