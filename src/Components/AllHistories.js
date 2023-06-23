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

  // Sort histories by date from newer to older
  const sortedHistories = histories.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <div>
      {loading ? (
        <Col>Fetching histories...</Col>
      ) : sortedHistories ? (
        sortedHistories.map((history) => (
          <HistoryCard key={history._id} history={history} />
        ))
      ) : (
        <Col>No histories yet...</Col>
      )}
    </div>
  );
}

export default AllHistories;
