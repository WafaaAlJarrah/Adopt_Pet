import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequests } from "../Redux/actions/RequestAction";
import RequestCard from "./RequestCard";
import { Col } from "react-bootstrap";

function AllRequests() {
  const dispatch = useDispatch();
  const { requests, loading } = useSelector((state) => state.RequestReducer);
  console.log("all requests ", requests);
  useEffect(() => {
    dispatch(getAllRequests());
  }, [dispatch]);

  const nonArchivedRequests = requests?.filter((request) => !request.archived);
  console.log("all requests non archived ", nonArchivedRequests);

  if (nonArchivedRequests.length === 0) {
    return <div>No Requests!!</div>;
  }

  return (
    <div>
      {loading ? (
        <Col>Fetching requests...</Col>
      ) : nonArchivedRequests ? (
        nonArchivedRequests.map((request) => (
          <RequestCard key={request._id} request={request} />
        ))
      ) : (
        <Col>No requests yet...</Col>
      )}
    </div>
  );
}

export default AllRequests;
