import React from "react";
import { Grid } from "@material-ui/core";
import "./Contact.css";
import { useHistory } from "react-router";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ScheduleIcon from "@mui/icons-material/Schedule";

const Contact = () => {
  const history = useHistory();

  const handleContinuePlataLivrare = () => {
    history.push("/platalivrare");
  };

  const handleContinueReturnare = () => {
    history.push("/platalivrare");
  };

  const handleContinueGarantie = () => {
    history.push("/garantie");
  };

  return (
    <Grid container>
      <Grid xs={12} className="contactContainer">
        <Grid xs={2} className="contactLeftContainer">
          <div className="contactContact">Contact</div>
          <div
            className="contactPlataLivare"
            onClick={handleContinuePlataLivrare}
          >
            Plata și livrarea
          </div>
          <div className="contactReturnare" onClick={handleContinueReturnare}>
            Returnare
          </div>
          <div className="contactGarantie" onClick={handleContinueGarantie}>
            Garanție
          </div>
        </Grid>
        <Grid xs={10} className="contactRightContainer">
          <div className="bucurestiDiv">
            <div className="bucTitle">
              <h2>București</h2>
            </div>
            <div className="bucPlace">
              <div className="bucPlaceIcon">
                <LocationOnIcon />
              </div>
              <div>
                Str. Augustin Pacha nr. 2, <br /> București
              </div>
            </div>
            <div className="bucTel">
              <div className="bucTelIcon">
                <LocalPhoneIcon />
              </div>
              <div>
                Telefon: <br /> 0771 697 777
              </div>
            </div>
            <div className="bucMail">
              <div className="bucMailIcon">
                <EmailIcon />
              </div>
              <div>
                E-mail: <br /> Olteanurobert@gmail.com
              </div>
            </div>
            <div className="bucSchedule">
              <div className="bucScheduleIcon">
                <ScheduleIcon />
              </div>
              <div>
                Orar <br /> Luni-Vineri 11:00 - 19:00 <br /> Sâmbătă 11:00 -
                18:00 <br /> Duminică închis
              </div>
            </div>
          </div>
          <div className="timisoaraDiv">
            <div className="timTitle">
              <h2>Timișoara</h2>
            </div>
            <div className="timPlace">
              <div className="timPlaceIcon">
                <LocationOnIcon />
              </div>
              <div>
                Str. Aristide Demetriade, nr. 1, <br /> Etaj 1, Timișoara
              </div>
            </div>
            <div className="timTel">
              <div className="timTelIcon">
                <LocalPhoneIcon />
              </div>
              <div>
                Telefon: <br /> 0356 178 777
              </div>
            </div>
            <div className="timMail">
              <div className="timMailIcon">
                <EmailIcon />
              </div>
              <div>
                E-mail: <br /> Olteanurobert@gmail.com
              </div>
            </div>
            <div className="timSchedule">
              <div className="timScheduleIcon">
                <ScheduleIcon />
              </div>
              <div>
                Orar <br /> Luni-Vineri 11:00 - 19:00 <br /> Sâmbătă 11:00 -
                18:00 <br /> Duminică închis
              </div>
            </div>
          </div>
          <div className="clujNapocaDiv">
            <div className="clujTitle">
              <h2>ClujNapoca</h2>
            </div>
            <div className="clujPlace">
              <div className="clujPlaceIcon">
                <LocationOnIcon />
              </div>
              <div>
                Iulius Mall, Etaj 1, stand E18
                <br /> Cluj-Napoca, Cluj
              </div>
            </div>
            <div className="clujTel">
              <div className="clujTelIcon">
                <LocalPhoneIcon />
              </div>
              <div>
                Telefon: <br /> 0771 605 777
              </div>
            </div>
            <div className="clujMail">
              <div className="clujMailIcon">
                <EmailIcon />
              </div>
              <div>
                E-mail: <br /> Olteanurobert@gmail.com
              </div>
            </div>
            <div className="clujSchedule">
              <div className="clujScheduleIcon">
                <ScheduleIcon />
              </div>
              <div>
                Orar <br /> Luni-Vineri 11:00 - 19:00 <br /> Sâmbătă 11:00 -
                18:00 <br /> Duminică închis
              </div>
            </div>
          </div>
          <br />
          <br />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
