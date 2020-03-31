import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PortfolioImage from '../images/PortImage.png';
import PortfolioModal from './PortfolioModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '1%',
    padding: '1%'
  },
  media: {
    height: 140,
  },
});

export default function MacroCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a href="https://martinezhector.com/">
          <CardMedia
          className={classes.media}
          image={PortfolioImage}
          title="Contemplative Reptile"/>
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Portfolio Website
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Personal portfolio used to showcase what I can do.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <PortfolioModal/>
      </CardActions>
    </Card>
  );
}