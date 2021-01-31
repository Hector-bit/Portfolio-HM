import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MacroCardImage from '../../images/MacroCalc.webp';
import MacroCardModal from './MarcoCardModal';

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
        <a href="https://infallible-albattani-8d730d.netlify.com/">        
          <CardMedia
          className={classes.media}
          image={MacroCardImage}
          title="Contemplative Reptile"/>
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Macro Calculator
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Macro Calculator is a simple way for you to develop a health guide according to your weight loss or weight gain plan.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <MacroCardModal/>
      </CardActions>
    </Card>
  );
}