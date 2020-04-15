import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HackathonImage from '../../images/HackathonPortal.png';
import HackathonCardModal from './HackathonCardModal';

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

export default function HackathonCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a href="https://hackathon-portal-19-fe.now.sh">
          <CardMedia
          className={classes.media}
          image={HackathonImage}
          title="Contemplative Reptile"/>
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hackathon Portal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hackathon portal is a place to host, sign up, and judge Hackathon projects.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <HackathonCardModal/>
      </CardActions>
    </Card>
  );
}