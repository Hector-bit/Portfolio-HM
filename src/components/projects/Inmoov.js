import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import inmoovpicture from '../../images/inmoov.png';
import InmoovModal from './InmoovModal';

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
        {/* <a href="#"> */}
          <CardMedia
          className={classes.media}
          image={inmoovpicture}
          title="Inmoov Robot"/>
        {/* </a> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Inmoov Robot
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Robot project to learn about applied computer science and engineering.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <InmoovModal/>
      </CardActions>
    </Card>
  );
}