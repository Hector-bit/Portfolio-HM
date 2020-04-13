import React from 'react';
import profile_picture from '../images/standin.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    body: {
      display: 'flex',
      flexDirection: 'row'
    }
  })

function Aboutpage(){
    const classes = useStyles();
    return(
        <section>
            <h2>About</h2>
            <div className={classes.body}>
                <img src={profile_picture} alt='profile picture'/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </section>
    )
}

export default Aboutpage;