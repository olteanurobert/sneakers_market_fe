import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import "./CartPage.css";

const CartPage = () => {
  const history = useHistory();

  const handleContinueShopping = () => {
    history.push("/mainPage");
  };

  const handleContinueToOrderDetails = () => {
    history.push("/orderdetails");
  };

  const handleContinueContact = () => {
    history.push("/contact");
  };

  const handleContinuePlataLivrare = () => {
    history.push("/platalivrare");
  };

  const handleContinueReturnare = () => {
    history.push("/returnare");
  };

  const handleContinueGarantie = () => {
    history.push("/garantie");
  };

  const [num, setNum] = useState(1);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    } else {
      setNum(1);
    }
  };

  return (
    <Grid container className="cartPageContainer">
      <Grid xs={12} className="bigContainer">
        <Grid xs={2} className="leftContentContainer">
          <div onClick={handleContinueContact}>Contact</div>
          <div onClick={handleContinuePlataLivrare}>Plata și livrarea</div>
          <div onClick={handleContinueReturnare}>Returnare</div>
          <div onClick={handleContinueGarantie}>Garanție</div>
        </Grid>
        <Grid xs={10} className="rightContentContainer">
          <Grid xs={12} className="topRight">
            <div className="cos">COȘ</div>
            <div className="stergeProduse">Șterge toate produsele</div>
          </Grid>
          <Grid xs={12} className="secondTopRight">
            <Grid xs={2} className="sneakerImageCartPage">
              <img
                src="https://www.u-man.ro/resources/aea26a1f70cae827199cd8a23b989f9a/IMG_7119_tn.jpg"
                alt="sneakerPicture"
              />
            </Grid>
            <Grid xs={10} className="sneakerNameAndDetails">
              <Grid xs={12} className="nameOfSneaker">
                <div>Adidas Matchbreak Super</div>
              </Grid>
              <Grid xs={12} className="detailsOfSneaker">
                <div className="divOfCuloare">
                  Culoare
                  <div className="boxOfCuloare"></div>
                </div>
                <div className="divOfMarime">
                  Mărime
                  <div className="boxOfMarime">42</div>
                </div>
                <div className="divOfPret">
                  Preț
                  <div className="boxOfPret">
                    349
                    <sup>LEI</sup>
                  </div>
                </div>
                <div className="divOfCantitate">
                  Cantitate
                  <div className="boxOfCantitate">
                    <div className="cntDown" onClick={decNum}>
                      -
                    </div>
                    <span>{num}</span>
                    <div className="cntUp" onClick={incNum}>
                      +
                    </div>
                  </div>
                </div>
                <div className="divOfTotal">
                  Total
                  <div className="boxOfTotal">
                    349
                    <sup>LEI</sup>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} className="thirdTopRight">
            <Grid xs={9} className="shippingDetails">
              <div className="metodaTransport">METODA DE TRANSPORT</div>
              <div className="curier">
                Fan Courier
                <span>20 LEI / 1-2 zile (indiferent de localitate)</span>
              </div>
            </Grid>
            <Grid xs={3} className="totalPriceAndProducts">
              <div className="numarProduse">
                <span>Produse</span>
                <em>1</em>
              </div>
              <div className="totalLei">
                <span>Total</span>
                <em>
                  349
                  <sup>LEI</sup>
                </em>
              </div>
            </Grid>
          </Grid>
          <Grid xs={12} className="fourthTopRight">
            <Grid xs={9} className="continueShopping">
              <div onClick={handleContinueShopping}>Continuă cumpărăturile</div>
            </Grid>
            <Grid xs={3} className="nextStep">
              <div onClick={handleContinueToOrderDetails}>Pasul următor</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartPage;
