import React from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function Header() {
  return (
    <div id="headerId" className="headerClass">
      <div id="secondHeaderId" className="secondHeader">
        <div id="secondHeaderRightId" className="secondHeaderRight">
          <div
            id="SecondHeaderRightContentId"
            className="secondHeaderRightContent"
          >
            {/* <ShoppingCartRoundedIcon /> */}
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
}

export default Header;
