import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { shoes } from "../constants/constants";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

function Products({ setSelectedCardData }) {
  const classes = useStyles();

  const [data, setData] = useState([]);

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

  return (
    <div>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justifyContent="center"
      >
        {data.map((item, index) => {
          return (
            <Grid item xs={6} sm={4} md={3}>
              <MediaCard
                cardData={item}
                setSelectedCardData={setSelectedCardData}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Products;
