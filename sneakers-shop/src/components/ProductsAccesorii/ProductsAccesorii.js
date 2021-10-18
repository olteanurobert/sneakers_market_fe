import React, { useEffect, useState } from "react";
import MediaCardAccesorii from "../MediaCardAccesorii/MediaCardAccesorii";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { accesorii } from "../../constants/constants";
import "./ProductsAccesorii.css";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
  },
});

function ProductsAccesorii({ setSelectedCardData }) {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    gen: null,
    type: null,
  });

  const getItems = async () => {
    setData(accesorii);
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
        newProducts = accesorii.filter((item) => {
          if (item.gen === "barbati") {
            return item;
          } else {
            return null;
          }
        });
        setData(newProducts);
        break;
      case "femei":
        newProducts = accesorii.filter((item) => {
          if (item.gen === "femei") {
            return item;
          } else {
            return null;
          }
        });
        setData(newProducts);
        break;
      case "copii":
        newProducts = accesorii.filter((item) => {
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
        <Grid item xs={2} className="filters-containerAccesorii">
          <div className="filters-titleAccesorii">Filtre:</div>
          <div className="filters-typeAccesorii">Gen:</div>
          <div
            className={`filter-entryAccesorii ${
              filters.gen === "barbati" && `selectedAccesorii`
            }`}
            onClick={() => handleChange(null, "barbati")}
          >
            Barbati
          </div>
          <div
            className={`filter-entryAccesorii ${
              filters.gen === "femei" && `selectedAccesorii`
            }`}
            onClick={() => handleChange(null, "femei")}
          >
            Femei
          </div>
          <div
            className={`filter-entryAccesorii ${
              filters.gen === "copii" && `selectedAccesorii`
            }`}
            onClick={() => handleChange(null, "copii")}
          >
            Copii
          </div>
          <div className="filters-typeAccesorii">Accesorii:</div>
          <div
            className={`filter-entryAccesorii ${
              filters.type === "sepci" && `selectedAccesorii`
            }`}
            onClick={() => handleChange("sepci")}
          >
            Sepci
          </div>
          <div
            className={`filter-entryAccesorii ${
              filters.type === "rucsacuri" && `selectedAccesorii`
            }`}
            onClick={() => handleChange("rucsacuri")}
          >
            Rucsacuri
          </div>
          <div
            className={`filter-entryAccesorii ${
              filters.type === "sosete" && `selectedAccesorii`
            }`}
            onClick={() => handleChange("sosete")}
          >
            Sosete
          </div>
        </Grid>
        <Grid item xs={10} className="products-containerAccesorii">
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
                <MediaCardAccesorii
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

export default ProductsAccesorii;
