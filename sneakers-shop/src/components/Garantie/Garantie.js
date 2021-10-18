import React from "react";
import { Grid } from "@material-ui/core";
import "./Garantie.css";
import { useHistory } from "react-router";

const Garantie = () => {
  const history = useHistory();

  const handleContinueContact = () => {
    history.push("/contact");
  };

  const handleContinuePlataLivrare = () => {
    history.push("/platalivrare");
  };

  const handleReturnare = () => {
    history.push("/returnare");
  };

  return (
    <Grid container>
      <Grid xs={12} className="garantieContainer">
        <Grid xs={2} className="garantieLeftContainer">
          <div className="garantieContact" onClick={handleContinueContact}>
            Contact
          </div>
          <div
            className="garantiePlataLivrare"
            onClick={handleContinuePlataLivrare}
          >
            Plata și livrarea
          </div>
          <div className="garantieReturnare" onClick={handleReturnare}>
            Returnare
          </div>
          <div className="garantieGarantie">Garanție</div>
        </Grid>
        <Grid xs={10} className="garantieRightContainer">
          <div>
            <h1 className="garantieTitle">
              <span>Garanție</span>
            </h1>
          </div>
          <div className="garantiePara">
            <p>
              În cazul în care produsul comandat de la noi prezintă un defect de
              fabricație, ai timp 30 de zile calendaristice să îl schimbi.
            </p>
            <p>
              Dacă defectele au apărut în urma purtării adecvate (conform
              instrucțiunilor care au însoțit produsul) în termenul de 30 de
              zile de la recepționare, produsul va fi înlocuit ori reparat în
              termen de 14 zile de la recepționarea acestuia la sediul U Man. În
              cazul în care produsul nu mai poate fi reparat ori înlocuit, U Man
              își rezervă dreptul de a returna clientului contravaloarea
              acestuia (exceptând taxele de transport).
            </p>
            <p>
              Toate detaliile referitoare la termenii acordării garanției sunt
              menționate pentru fiecare categorie de produse în parte și se
              regăsesc pe fluturașul cu Instrucțiuni de utilizare și întreținere
              primit o dată cu produsul. Pentru aplicarea și soluționarea
              garanției ai nevoie de documentele care atestă achiziția din
              magazinul nostru în original sau copie.
            </p>
            <p>
              Dacă ai uzat produsul fără să ții cont de indicațiile de pe
              etichetă și de pe Instrucțiunile de utilizare (care însoțesc orice
              produs cumpărat de la U Man), termenii acordării garanției nu mai
              sunt valabili. Așa că ai grijă de hainele, accesoriile & tenișii
              tăi.
            </p>
            <p>
              Pentru acordarea garanției la produsele din categoria SHOES:
              citește cu atenție Instrucțiunile de utilizare și întreținere și
              ai grijă de încălțămintea ta în funcție de material, tipul de
              talpă etc. NU spăla sub nici o formă încălțămintea sub jet de apă
              sau la mașina de spălat rufe.
            </p>
            <p>
              Pentru acordarea garanției la produsele din categoria HAINE:
              citește cu atenție Instrucțiunile de utilizare și întreținere și
              spală hainele în funcție de specificațiile și temperaturile
              indicate pe etichetă.
            </p>
            <p>
              Pentru plăcile de SKATE / SNOW – complete-uri sau deck-uri,
              longboarduri, cruisere, plăci de snowboard – garanția acoperă doar
              defectele de fabricație detectate înainte de a folosi
              echipamentul. Dacă ai lăsat placa (de lemn) în spații umede, la
              soare puternic sau ai folosit-o agresiv, dacă ai lovit-o de
              suprafețe rigide, ai aterizat pe ea incorect – nu îți mai putem
              oferi garanție. De asemenea, ia în considerare că începătorii pot
              rupe plăcile mult mai ușor pentru că nu știu să le utilizeze
              corect.
            </p>
          </div>
          <br />
          <br />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Garantie;
