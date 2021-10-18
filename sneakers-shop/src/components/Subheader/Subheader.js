import React from "react";
import "./Subheader.css";
import { useHistory } from "react-router";

const Subheader = () => {
  const history = useHistory();

  const handleContinueToShoes = () => {
    history.push("/shoes");
  };

  const handleContinueToHaine = () => {
    history.push("/haine");
  };

  const handleContinueToAccesorii = () => {
    history.push("/accesorii");
  };

  const handleContinueToHome = () => {
    history.push("/");
  };

  return (
    <div className="subHeaderDiv">
      <div className="subheaderLogo" onClick={handleContinueToHome}>
        <img src="https://www.u-man.ro/images/logo.svg" alt="logo" />
      </div>
      <div className="shoesDiv" onClick={handleContinueToShoes}>
        Shoes
      </div>
      <div className="haineDiv" onClick={handleContinueToHaine}>
        Haine
      </div>
      <div className="accesoriiDiv" onClick={handleContinueToAccesorii}>
        Accesorii
      </div>
    </div>
  );
};

export default Subheader;
