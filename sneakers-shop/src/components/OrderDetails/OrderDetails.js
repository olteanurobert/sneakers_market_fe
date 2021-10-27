import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import "./OrderDetails.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    width: 330,
  },
});

const OrderDetails = () => {
  const classes = useStyles();

  const [mailCont, setMailCont] = useState("");
  const [parolaCont, setParolaCont] = useState("");

  const [mailContError, setMailContError] = useState(false);
  const [parolaContError, setParolaContError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMailContError(false);
    setParolaContError(false);

    if (mailCont === "") {
      setMailContError(true);
    }

    if (parolaCont === "") {
      setParolaContError(true);
    }

    if (mailCont && parolaCont) {
      console.log(mailCont, parolaCont);
    }
  };

  const [orderDetails, setOrderDetails] = useState({
    fullName: null,
    phoneNumber: null,
    email: null,
    receiver: null,
    county: null,
    city: null,
    address: null,
    phoneNumberAddress: null,
    others: null,
    billingFullName: null,
    billingCounty: null,
    billingCity: null,
    billingAddress: null,
  });

  const handleChange = (event) => {
    console.log(event.target.name, ":", event.target.value);
    setOrderDetails({
      ...orderDetails,
      [event.target.name]: event.target.value,
    });
  };

  const history = useHistory();

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

  const handleContinue = () => {
    console.log("I'LL CONTINUE WITH ORDER DETAILS:");
    console.log(orderDetails);
  };

  return (
    <Grid container>
      <Grid xs={12} item className="orderDetailsContainer">
        <Grid xs={2} className="orderLeftContainer">
          <div onClick={handleContinueContact}>Contact</div>
          <div onClick={handleContinuePlataLivrare}>Plata și livrarea</div>
          <div onClick={handleContinueReturnare}>Returnare</div>
          <div onClick={handleContinueGarantie}>Garanție</div>
        </Grid>
        <Grid xs={10} className="orderRightContainer">
          <Grid className="contTitleSpan">
            <div>
              <span>Ai deja cont? Loghează-te aici</span>
            </div>
          </Grid>
          <Grid className="mailPass">
            <div className="mailCont">
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  onChange={(e) => setMailCont(e.target.value)}
                  className={classes.field}
                  type="email"
                  label="E-mail"
                  variant="outlined"
                  color="secondary"
                  multiline
                  required
                  size="small"
                  error={mailContError}
                  fullWidth
                />
                <TextField
                  onChange={(e) => setParolaCont(e.target.value)}
                  className={classes.field}
                  type="password"
                  label="Parola"
                  variant="outlined"
                  color="secondary"
                  multiline
                  required
                  size="small"
                  error={parolaContError}
                  fullWidth
                />
                <Button type="submit" variant="contained">
                  Log in
                </Button>
              </form>
            </div>
          </Grid>
          <Grid className="persContact">
            <div>Persoana de contact</div>
            <span>La cine ajunge email-ul de confirmare</span>
          </Grid>
          <Grid className="numeTel">
            <form noValidate autoComplete="off">
              <TextField
                className={classes.field}
                type="text"
                label="Nume și prenume"
                name="fullName"
                variant="outlined"
                color="secondary"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                type="number"
                label="Telefon"
                variant="outlined"
                color="secondary"
                name="phoneNumber"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                type="email"
                label="Adresa de E-mail"
                variant="outlined"
                color="secondary"
                name="email"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
            </form>
          </Grid>
          <Grid className="adresaLivrareContainer">
            <strong className="adresaLivrare">
              Adresa de livrare <br />
              <em>Locul unde vrei sa ajungă pachetul</em>
            </strong>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.field}
                type="text"
                label="Destinatarul"
                variant="outlined"
                color="secondary"
                name="receiver"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                type="text"
                label="Judetul"
                name="county"
                variant="outlined"
                color="secondary"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                type="text"
                label="Orasul"
                variant="outlined"
                color="secondary"
                name="city"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                type="text"
                name="address"
                label="Adresa"
                variant="outlined"
                color="secondary"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                type="number"
                name="phoneNumberAddress"
                label="Telefonul"
                variant="outlined"
                color="secondary"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                name="others"
                type="text"
                label="Mentiuni livrare"
                variant="outlined"
                color="secondary"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
            </form>
          </Grid>
          <Grid className="detaliiFactura">
            <strong>Detalii Factură</strong>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.field}
                name="billingFullName"
                type="text"
                label="Nume / Prenume ( din buletin )"
                variant="outlined"
                color="secondary"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                name="billingCounty"
                type="text"
                label="Judetul"
                variant="outlined"
                color="secondary"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                name="billingCity"
                type="text"
                label="Orasul"
                variant="outlined"
                color="secondary"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                name="billingAddress"
                type="text"
                label="Adresa (ex: Strada, nr. , bl. , sc. , et. , ap.)"
                variant="outlined"
                color="secondary"
                multiline
                required
                size="small"
                fullWidth
                onChange={handleChange}
              />
            </form>
          </Grid>
          <Grid xs={12} className="continuaContainer">
            <Button
              variant="contained"
              color="red"
              size="large"
              onClick={handleContinue}
            >
              Continuă
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderDetails;
