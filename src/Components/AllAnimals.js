import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getAnimals } from "../Redux/actions/AnimalAction";
import AnimalCard from "./AnimalCard";
function AllAnimals() {
  const [refreshKey, setRefreshKey] = useState(0); // State to trigger refresh
  const location = useLocation();

  const refreshPage = () => {
    // Increment the refreshKey to trigger a refresh
    setRefreshKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    // Check if the refreshKey query parameter is present and refresh the page
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("refreshKey")) {
      refreshPage();
    }
  }, [location.search]);

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
