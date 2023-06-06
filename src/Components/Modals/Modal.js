import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecifications } from "../../Redux/actions/SpecificationAction";
import { Link } from "react-router-dom";

function GridExample(param) {
  //   console.log(param.type);
  const dispatch = useDispatch();
  const { specifications, loading } = useSelector(
    (state) => state.SpecificationReducer
  );
  useEffect(() => {
    dispatch(getSpecifications(param.type));
  }, [dispatch, param.type]);

  console.log(specifications);
  // console.log(specifications[0].image);
  // console.log(process.env.REACT_APP_PUBLIC_FOLDER);
  return (
    <>
      <Row>
        {loading ? (
          <Col>Fetching Types...</Col>
        ) : (
          specifications.map((item) => (
            <Col md={4} key={item._id} className="mb-4">
              <Link to={`/allAnimals/${item._id}`} className="card-link">
                <Card>
                  <Card.Img
                    variant="top"
                    src={
                      item.image
                        ? process.env.REACT_APP_PUBLIC_FOLDER + item.image
                        : ""
                    }
                  />
                  <Card.Body>
                    <Card.Title className="TitleCard">
                      <span href="#">{item.name}</span>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </>
  );
}

export default GridExample;
