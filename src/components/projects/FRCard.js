import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import androidGamePicture from '../../images/fr.webp';
import AndroidGameModal from './FRModal';

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
        {/* <a href="https://bordertownmexicangrill.com/"> */}
          <CardMedia
          className={classes.media}
          image={androidGamePicture}
          title="Contemplative Reptile"/>
        {/* </a> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            FR landscaping and excavation LLC website
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Buisness website made with React
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AndroidGameModal/>
      </CardActions>
    </Card>
  );
}