import React from "react";

// import { useHistory } from "react-router";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
    width: 240,
  },
});

const MediaCardAccesorii = ({ cardData = {}, setSelectedCardData }) => {
  const classes = useStyles();
  //   const history = useHistory();

  const handleOneCardAccesorii = () => {
    setSelectedCardData(cardData);
    // history.push(`/onecard/${cardData.id}`);
  };

  return (
    <Card className={classes.root} onClick={handleOneCardAccesorii}>
      <CardActionArea>
        <CardMedia className={classes.media} image={cardData.imagesUrls[0]} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardData.price} lei
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardData.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MediaCardAccesorii;
