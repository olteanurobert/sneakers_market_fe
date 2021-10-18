import React from "react";
import { Grid } from "@material-ui/core";
import "./PlataLivrare.css";
import { useHistory } from "react-router";

const PlataLivrare = () => {
  const history = useHistory();

  const handleContinueContact = () => {
    history.push("/contact");
  };

  const handleContinueReturnare = () => {
    history.push("/returnare");
  };

  const handleContinueGarantie = () => {
    history.push("/garantie");
  };

  return (
    <Grid container>
      <Grid xs={12} className="plataLivrareContainer">
        <Grid xs={2} className="plataLivrareLeftContainer">
          <div className="PlataLivrareContact" onClick={handleContinueContact}>
            Contact
          </div>
          <div className="PlataLivrarePlataLivrare">Plata și livrarea</div>
          <div
            className="PlataLivrareReturnare"
            onClick={handleContinueReturnare}
          >
            Returnare
          </div>
          <div
            className="PlataLivrareGarantie"
            onClick={handleContinueGarantie}
          >
            Garanție
          </div>
        </Grid>
        <Grid xs={10} className="plataLivrareRightContainer">
          <div>
            <h1 className="pTitle">
              <span>Plata și livrarea</span>
            </h1>
          </div>
          <div className="plataLivrarePretul">
            <h2>Prețul</h2>
            <p>
              Prețul produselor afișat pe site este în lei (TVA inclus) și nu
              include taxa de transport, pe care cumpărătorul trebuie să o
              suporte (în cazul unei comenzi cu valoare mai mică de 500 lei și
              care este gratuită în cazul unei comenzi cu valoare egală sau mai
              mare de 500 lei) și pe care o poate alege în momentul finalizării
              comenzii.
            </p>
          </div>
          <div className="plataLivrareTransport">
            <h2>Transportul</h2>
            <p>
              Transportul se face prin Fan Courier. Contravaloarea coletului
              (incluzând și taxa de transport) se va achita la agentul Fan
              Courier. În cazul plății cu cardul de credit, contravaloarea
              transportului se va adăuga la prețul produsului și se vor debita
              împreună de pe cardul cu care se face plata.
            </p>
          </div>
          <div className="plataLivrareConfirmare">
            <h2>Confirmare & livrare</h2>
            <p>
              După efectuarea comenzii vei fi contactat telefonic sau prin
              E-Mail la numărul de telefon completat de tine atunci când ai
              făcut comanda pe site. Adresa la care se va face livrarea este cea
              completată pe comandă sau la cea confirmată telefonic. Dacă
              dorești altă adresă de livrare decât cea din buletin, completează
              o altă adresă de livrare sau anunță-ne telefonic (la numărul de
              telefon 0356-005873) / pe e-mail (la adresa shop@u-man.ro).
            </p>
          </div>
          <div className="plataLivrareAnulare">
            <h2>Anularea comenzii</h2>
            <p>
              Comanda NU va fi livrată decât după contactarea telefonică. În
              cazul în care numărul de telefon introdus de tine la finalizarea
              comenzii pe site nu este corect / telefonul e închis ori ocupat,
              vei fi contactat prin e-mail. În cazul în care nu răspunzi nici la
              telefon și nici la e-mail în termen de 3 zile, comanda va fi
              anulată.
            </p>
          </div>
          <div className="plataLivrareTermenLivrare">
            <h2>Termenul de livrare</h2>
            <p>
              Termenul de livrare obișnuit al produselor cumpărate de la U Man
              se încadrează între 24 de ore și 3 zile din momentul confirmării
              telefonice și înregistrării comenzii prin serviciul de curierat
              FanCourier.
            </p>
          </div>
          <div className="plataLivrareUrmarireColet">
            <h2>Urmărirea coletului</h2>
            <p>
              În cazul în care comanda ți-a fost trimisă prin Fan Courier vei
              putea vedea codul AWB al coletului din pagina contului tău pe
              site-ul www.u-man.ro și apăsând pe Istoricul comenzilor. În cazul
              în care nu ești utilizator înregistrat, în momentul în care
              coletul pleacă din sediul U Man, vei primi un e-mail cu codul AWB
              al pachetului tău. Cu acest cod vei putea vedea exact unde este
              pachetul tău pe www.fancourier.ro sau la numărul lor de telefon –
              pe care îl găsești, pentru fiecare regiune în parte, tot pe
              www.fancourier.ro.
            </p>
          </div>
          <div className="plataLivrareExceptii">
            <h2>Excepții</h2>
            <p>
              În condiții speciale (sărbători, perioade de reduceri sau
              promoții) ne asumăm dreptul de a mări timpul de livrare, dar te
              vom anunța și pe tine din timp. Nu putem garanta că toate
              produsele afișate pe site se află și pe stocuri, pentru că pot fi
              comandate de 2 persoane în același timp. Din acest motiv e posibil
              ca unele comenzi să nu fie trimise dacă au fost comandate de 2
              persoane concomitent, dacă prezintă defecte de fabricație
              detectate la verificare sau dacă furnizorii nu le mai produc. Dar
              cu siguranță te vom anunța telefonic sau prin e-mail, dacă este
              cazul.
            </p>
          </div>
          <br />
          <br />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlataLivrare;
