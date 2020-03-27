import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HackathonImage from '../images/HackathonPortal.png';

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
        <CardMedia
          className={classes.media}
          image={HackathonImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hackthon Portal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hackathon portal is a plave to host, sign up, and judge Hackathon projects.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}