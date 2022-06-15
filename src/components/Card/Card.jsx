import React, { useState } from "react";
import "./Card.css";
const Card = ({ item, activeCard, setActiveCard }) => {
  // console.log(item.id);
  const [like, setLike] = useState(false);
  return (
    <div
      style={{
        border: activeCard === item.id ? "2px solid grey" : "none",
        padding: "40px",
      }}
      onClick={() => setActiveCard(item.id)}>
      <h2>{item.model}</h2>
      <img className="car-image" src={item.image} alt="" />
      <div>
        {like ? (
          <img
            onClick={() => setLike(!like)}
            width="30px"
            src="https://cdn-icons-png.flaticon.com/512/1216/1216686.png"
            alt="like"
          />
        ) : (
          <img
            onClick={() => setLike(!like)}
            width="30px"
            src="https://cdn-icons-png.flaticon.com/512/2/2267.png"
            alt="like"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
