import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAnimals } from "../Redux/actions/AnimalAction";
import Filter from "./Filter";
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

  if (nonArchivedAnimals.length === 0) {
    return <div>No Animals!!</div>;
  }
  return (
    <div style={{display:"flex"}}>
      <div>
        <Filter />
      </div>
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
        {loading ? (
          <Col>Fetching animals...</Col>
        ) : (
          nonArchivedAnimals.map((animal, id) => (
            <Col md={4} key={animal._id} className="mb-4">
              <AnimalCard animal={animal} key={id} />
            </Col>
          ))
        )}
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
    </div>
  );
}

export default AllAnimals;
