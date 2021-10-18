import React from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useHistory } from "react-router";
import "./Header.css";

const Header = () => {
  const history = useHistory();

  const handleClickOnCart = () => {
    history.push("/cartpage");
  };

  return (
    <div id="headerId" className="headerClass">
      <div id="secondHeaderId" className="secondHeader">
        <div id="secondHeaderRightId" className="secondHeaderRight">
          <div
            id="SecondHeaderRightContentId"
            className="secondHeaderRightContent"
          >
            <ShoppingCartRoundedIcon
              className="cartIcon"
              onClick={handleClickOnCart}
            />
            <div>
              <span className="itemCount">
                <em>0</em>
              </span>
              <strong className="itemValue">
                {" "}
                0<em>LEI</em>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
