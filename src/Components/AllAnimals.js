import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAnimals } from "../Redux/actions/AnimalAction";
import AnimalCard from "./AnimalCard";
function AllAnimals() {
  const { specificationId } = useParams();
  //   console.log("specificationId: ", specificationId);
  const dispatch = useDispatch();
  const { animals, loading } = useSelector((state) => state.AnimalReducer);
  useEffect(() => {
    dispatch(getAnimals(specificationId));
  }, [dispatch, specificationId]);

  const nonArchivedAnimals = animals.filter((animal) => !animal.archived);

  console.log("all animals", nonArchivedAnimals);
  return (
    <Row>
      {loading ? (
        <Col>Fetching animals...</Col>
      ) : (
        nonArchivedAnimals.map((animal, id) => (
          <Col md={4} key={animal._id} className="mb-4">
            <AnimalCard animal={animal} key={id} />
          </Col>
        ))
      )}
    </Row>
  );
}

export default AllAnimals;
