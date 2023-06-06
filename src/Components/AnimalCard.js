import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Heart from "../Images/like.png";
import NotLike from "../Images/notlike.png";
import { likeAnimal } from "../Redux/api/AnimalRequest";
import AdoptButton from "./Buttons/AdoptButton";
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";
function AnimalCard({ animal }) {
  //   const { user } = useSelector((state) => state.AuthReduder.authData);
  //   const [liked, setLiked] = useState(animal.likes.includes(user._id));
  const liked = false;
  const [likes, setLikes] = useState(animal.likes.length);
  const handleLike = () => {
    const userId = "643123d0b258b76b34e0cee0";
    // likeAnimal(animal._id, user._id);
    likeAnimal(animal._id, userId);
    // setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  return (
    <>
      {/* <Link to={`/animal/${animal._id}`} className="card-link"> */}
      <Card>
        <Card.Img
          variant="top"
          src={
            animal.image
              ? process.env.REACT_APP_PUBLIC_FOLDER + animal.image
              : ""
          }
        />
        <Card.Body>
          <img
            src={liked ? Heart : NotLike}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={handleLike}
          />
          <span style={{ color: "var(--gray)", fontSize: "12px" }}>
            {likes} likes
          </span>
          <Card.Title>{animal.name}</Card.Title>
          <AdoptButton animalId={animal._id} adopted={animal.adopted}/>
          <UpdateButton animalId={animal._id} />
          <DeleteButton animalId={animal._id} />
        </Card.Body>
      </Card>
      {/* </Link> */}
    </>
  );
}

export default AnimalCard;
