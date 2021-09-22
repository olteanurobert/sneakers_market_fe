import React from "react";

function OneCard({ cardData = null }) {
  console.log(cardData);

  return (
    <div className="bigDiv">
      <div className="imageDiv">
        <img src={cardData.imageUrl} alt="sneaker" className="sneakerImage" />
      </div>
      <div className="priceAndInfoDiv">
        <div className="infoAndName">
          <h3>{cardData.title}</h3>
        </div>
        <div className="priceOfSneaker">
          <span>{cardData.price}</span>
          <sup>LEI</sup>
        </div>
        <div className="adaugaInCos">
          <h2>Adauga in cos</h2>
        </div>
      </div>
    </div>
  );
}

export default OneCard;
