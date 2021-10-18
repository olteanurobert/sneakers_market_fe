import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./OneCard.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function OneCard({ cardData = null }) {
  const [current, setCurrent] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  console.log("___________________________________");

  const nextSlide = () => {
    if (selectedImageIndex < cardData.imagesUrls.length - 1) {
      setSelectedImageIndex((prevState) => prevState + 1);
    } else {
      setSelectedImageIndex(0);
    }
  };

  const prevSlide = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex((prevState) => prevState - 1);
    } else {
      setSelectedImageIndex(cardData.imagesUrls.length - 1);
    }
  };

  const handleSelectSize = (sizeObj) => {
    setSelectedSize(sizeObj);
  };

  return (
    <Grid container>
      <Grid item xs={8} className="imageContainer">
        {cardData?.imagesUrls.length > 0 && (
          <div className="slider-2">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight
              className="right-arrow"
              onClick={nextSlide}
            />
            <div
              className="slide-2"
              key={`product-image--${selectedImageIndex}`}
            >
              <img
                src={cardData?.imagesUrls[selectedImageIndex]}
                alt="shoe"
                className="imageShoeOneCard"
              />
            </div>
          </div>
        )}
        <div className="smallSlider">
          {/* SLIDER CU MAP CARE E FOARTE SIMPLU DAR NU MA DUCE CAPU' CEL PUTIN MOMENTAN */}
        </div>
      </Grid>
      <Grid item xs={4} className="detailsContainer">
        <div className="infoAndName">
          <h3>{cardData.title}</h3>
        </div>
        <div className="sizeOfSneaker">
          <strong>Alege mărimea</strong>
          <ul className="numberOfSizes">
            {cardData?.sizes?.map((sizeObject, index) => (
              <li
                key={`size--${index}`}
                className={`${
                  selectedSize?.id === sizeObject.id
                    ? `numberOfSizesActive`
                    : `numberOfSizes`
                }`}
                onClick={() => handleSelectSize(sizeObject)}
              >
                {sizeObject.size}
              </li>
            ))}
          </ul>
        </div>
        <div className="priceOfSneaker">
          <span>{cardData.price}</span>
          <sup>LEI</sup>
        </div>
        <div className="adaugaInCos">
          <h2>Adauga in cos</h2>
        </div>
      </Grid>
    </Grid>
  );
}

export default OneCard;
