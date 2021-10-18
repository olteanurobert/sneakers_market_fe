import React, { useEffect, useState } from "react";
import MediaCardShoes from "../MediaCardShoes/MediaCardShoes";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { shoes } from "../../constants/constants";
import "./ProductsShoes.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
  },
});

function ProductsShoes({ setSelectedCardData }) {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    gen: null,
    type: null,
  });

  const getItems = async () => {
    setData(shoes);

    // REQUEST DATA FROM BACKEND / API
    // await fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then(async (response) => {
    //     const receivedData = await response.json();
    //     for (let index = 0; index < 10; index++) {
    //       setData((prevData) => [...prevData, receivedData[index]]);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("error: ", e);
    //   });
  };

  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (type, gen) => {
    if (type) {
      setFilters({ ...filters, type: type });
    } else if (gen) {
      setFilters({ ...filters, gen: gen });
    }
  };

  useEffect(() => {
    let newProducts;
    switch (filters.gen) {
      case "barbati":
        newProducts = shoes.filter((item) => {
          if (item.gen === "barbati") {
            return item;
          } else {
            return null;
          }
        });
        setData(newProducts);
        break;
      case "femei":
        newProducts = shoes.filter((item) => {
          if (item.gen === "femei") {
            return item;
          } else {
            return null;
          }
        });
        setData(newProducts);
        break;
      case "copii":
        newProducts = shoes.filter((item) => {
          if (item.gen === "copii") {
            return item;
          } else {
            return null;
          }
        });
        setData(newProducts);
        break;
      default:
        break;
    }
  }, [filters]);

  return (
    <div>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justifyContent="center"
      >
        <Grid item xs={2} className="filters-container">
          <div className="filters-title">Filtre:</div>
          <div className="filters-type">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Gen:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div
                    className={`filter-entry ${
                      filters.gen === "barbati" && `selected`
                    }`}
                    onClick={() => handleChange(null, "barbati")}
                  >
                    Barbati
                  </div>
                  <div
                    className={`filter-entry ${
                      filters.gen === "femei" && `selected`
                    }`}
                    onClick={() => handleChange(null, "femei")}
                  >
                    Femei
                  </div>
                  <div
                    className={`filter-entry ${
                      filters.gen === "copii" && `selected`
                    }`}
                    onClick={() => handleChange(null, "copii")}
                  >
                    Copii
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="filters-type">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Shoes:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div
                    className={`filter-entry ${
                      filters.type === "tenisi" && `selected`
                    }`}
                    onClick={() => handleChange("tenisi")}
                  >
                    Tenisi
                  </div>
                  <div
                    className={`filter-entry ${
                      filters.type === "ghete" && `selected`
                    }`}
                    onClick={() => handleChange("ghete")}
                  >
                    Ghete
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid item xs={10} className="products-container">
          {data.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                key={`product--${index}`}
              >
                <MediaCardShoes
                  cardData={item}
                  setSelectedCardData={setSelectedCardData}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductsShoes;
