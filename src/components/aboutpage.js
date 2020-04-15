import React from 'react';
import profile_picture from '../images/standin.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    aboutSection: {
      display: 'flex',
      flexDirection: 'column',
      margin: '1%',
      padding: '1%',
      width: '50%'
    },
    aboutParagraph: {
        display: 'flex',
        maxWidth: '90%',
        margin: '1%',
    },
    aboutPicture: {
        display: 'flex',
        width: '200px',
        heigth: '200px'
    },
    aboutDiv: {
        display: 'flex',
        flexDirection: 'row',
    }
  })

function Aboutpage(){
    const classes = useStyles();
    return(
        <section className={classes.aboutSection}>
            <h2>About</h2>
            <div className={classes.aboutDiv}>
                <img className={classes.aboutPicture} src={profile_picture} alt='Hector Martinez'/>
                <p className={classes.aboutParagraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </section>
    )
}

export default Aboutpage;