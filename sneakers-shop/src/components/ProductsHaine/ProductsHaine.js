import React, { useEffect, useState } from "react";
import MediaCardHaine from "../MediaCardHaine/MediaCardHaine";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { haine } from "../../constants/constants";
import "./ProductsHaine.css";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
  },
});

function ProductsHaine({ setSelectedCardData }) {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    gen: null,
    type: null,
  });

  const getItems = async () => {
    setData(haine);
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
        newProducts = haine.filter((item) => {
          if (item.gen === "barbati") {
            return item;
          } else {
            return null;
          }
        });
        setData(newProducts);
        break;
      case "femei":
        newProducts = haine.filter((item) => {
          if (item.gen === "femei") {
            return item;
          } else {
            return null;
          }
        });
        setData(newProducts);
        break;
      case "copii":
        newProducts = haine.filter((item) => {
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
        <Grid item xs={2} className="filters-containerHaine">
          <div className="filters-titleHaine">Filtre:</div>
          <div className="filters-typeHaine">Gen:</div>
          <div
            className={`filter-entryHaine ${
              filters.gen === "barbati" && `selectedHaine`
            }`}
            onClick={() => handleChange(null, "barbati")}
          >
            Barbati
          </div>
          <div
            className={`filter-entryHaine ${
              filters.gen === "femei" && `selectedHaine`
            }`}
            onClick={() => handleChange(null, "femei")}
          >
            Femei
          </div>
          <div
            className={`filter-entryHaine ${
              filters.gen === "copii" && `selectedHaine`
            }`}
            onClick={() => handleChange(null, "copii")}
          >
            Copii
          </div>
          <div className="filters-typeHaine">Haine:</div>
          <div
            className={`filter-entryHaine ${
              filters.type === "tricouri" && `selectedHaine`
            }`}
            onClick={() => handleChange("tricouri")}
          >
            Tricouri
          </div>
          <div
            className={`filter-entryHaine ${
              filters.type === "hanorace" && `selectedHaine`
            }`}
            onClick={() => handleChange("hanorace")}
          >
            Hanorace
          </div>
          <div
            className={`filter-entryHaine ${
              filters.type === "pantaloni" && `selectedHaine`
            }`}
            onClick={() => handleChange("pantaloni")}
          >
            Pantaloni
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
                <MediaCardHaine
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

export default ProductsHaine;
