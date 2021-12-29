import React from "react";

const Card = ({ characters }) => {
  return (
    <li className="card">
      <img src={characters.image} alt="characters" />
      <div className="card_container">
        <ul>
          <li>{characters.name}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
