import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import androidGamePicture from '../../images/androidGame.webp';
import AndroidGameModal from './AndroidGameModal';

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

export default function BorderTownResCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a href="https://bordertownmexicangrill.com/">
          <CardMedia
          className={classes.media}
          image={androidGamePicture}
          title="Contemplative Reptile"/>
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Android Game
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Mobile 2D platformed developed with Unity.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AndroidGameModal/>
      </CardActions>
    </Card>
  );
}