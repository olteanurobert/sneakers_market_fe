import React from "react";
import { Grid } from "@material-ui/core";
import "./Returnare.css";
import { useHistory } from "react-router";

const Returnare = () => {
  const history = useHistory();

  const handleContinueContact = () => {
    history.push("/contact");
  };

  const handleContinuePlataLivrare = () => {
    history.push("/platalivrare");
  };

  const handleContinueGarantie = () => {
    history.push("/garantie");
  };

  return (
    <Grid container>
      <Grid xs={12} className="returnareContainer">
        <Grid xs={2} className="returnareLeftContainer">
          <div className="returnareContact" onClick={handleContinueContact}>
            Contact
          </div>
          <div
            className="returnarePlataLivare"
            onClick={handleContinuePlataLivrare}
          >
            Plata și livrarea
          </div>
          <div className="returnareReturnare">Returnare</div>
          <div className="returnareGarantie" onClick={handleContinueGarantie}>
            Garanție
          </div>
        </Grid>
        <Grid xs={10} className="returnareRightContainer">
          <div>
            <h1 className="returnareTitle">
              <span>Returnare</span>
            </h1>
          </div>
          <div className="returnareConditii">
            <h2>Condiții de returnare</h2>
            <p>
              Produsele comandate de pe site-ul www.u-man.ro pot fi returnate
              fie pentru că marimea nu se potrivește, fie pentru că dorești alt
              produs în schimb, fie pentru că prezintă defecte de fabricație
              nedetectate la controlul dinaintea livrării, fie fără a invoca
              vreun motiv anume. Termenul în care produsele comandate de pe
              site-ul www.u-man.ro pot fi returnate este de 14 zile de la data
              recepției lor.
            </p>
          </div>
          <div className="returnareCe">
            <h2>Ce trebuie să faci pentru a returna un produs?</h2>
            <p>
              În primul rând ne anunți pe noi printr-un e-mail la adresa
              shop@u-man.ro sau cu un apel la numărul de telefon 0356-005873. Nu
              uita să menționezi cel puțin un element de identificare: numele de
              pe care s-a făcut comanda sau numărul comenzii.
            </p>
            <p>
              Orice comanzi de pe site poate fi schimbat în termen de 14 zile de
              la primirea coletului cu 2 condiții:
            </p>
            <p>
              1. Produsul trebuie să fie în starea în care l-ai primit, cu
              etichetele atașate și cu cutia originală (în cazul shoesilor), să
              nu prezinte semne de uzură, pete sau defecte apărute în urma
              purtării.
            </p>
            <p>
              2. Să plătesti taxa de transport până la noi. Taxa de transport
              pentru produsul cu care vei face schimbul va fi suportată de către
              U Man.
            </p>
            <p>
              Orice schimb trebuie confirmat dinainte de noi! Nu acceptăm nici
              un colet dacă nu ne-ai anunțat înainte că ai trimis un schimb
              către noi. În plus, trebuie să îți comunicăm adresa la care să îl
              trimiți.
            </p>
            <p>
              NU acceptăm colete cu ramburs CASH, cu ramburs COLET sau care sunt
              ambalate necorespunzător.
            </p>
            <p>
              NU lipi adresa sau plicul cu AWB direct pe cutia de shoes,
              ambalează produsul într-o pungă de transport sau în hârtie pentru
              a evita deteriorarea.
            </p>
            <p>
              NU ne asumăm răspunderea pentru coletele care ajung la noi
              deteriorate.
            </p>
            <p>
              În cazul în care nu dorești să schimbi produsul cu un altul, ci
              dorești să îți fie returnată contravaloarea produsului, aceasta se
              va face prin transfer bancar (în contul comunicat de tine prin
              e-mail) în termen de 14 zile de la data recepționării produsului
              în sediul U Man.
            </p>
          </div>
          <div className="returnareTine">
            <h2>Ține cont!</h2>
            <p>
              Dacă te gândești să returnezi un produs, nu îl folosi, nu îi
              deteriora cutia originală, nu îi rupe etichetele sau elementele de
              identificare și păstrează bonul fiscal/factura! Nu poți folosi
              produsele pe care le-ai primit, înainte de a lua o decizie cu
              privire la anularea contractului de vânzare-cumpărare. Dreptul de
              retragere există pentru a-ți permite să examinezi produsul așa cum
              ai face-o într-un magazin fizic, nu pentru a-ți oferi 14 zile de
              utilizare gratuită.
            </p>
          </div>
          <br />
          <br />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Returnare;
