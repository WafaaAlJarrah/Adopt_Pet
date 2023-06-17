import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HistoryCard from "./HistoryCard";
import { getAllHistories } from "../Redux/actions/HistoryAction";

function AllHistories() {
  const dispatch = useDispatch();
  const { histories, loading } = useSelector((state) => state.HistoryReducer);
  console.log("all histories ", histories);
  useEffect(() => {
    dispatch(getAllHistories());
  }, [dispatch]);

  if (histories.length === 0) {
    return <div>No histories!!</div>;
  }
  return (
    <div>
      {loading ? (
        <Col>Fetching histories...</Col>
      ) : histories ? (
        histories.map((history) => (
          <HistoryCard key={history._id} history={history} />
        ))
      ) : (
        <Col>No histories yet...</Col>
      )}
    </div>
  );
}

export default AllHistories;
