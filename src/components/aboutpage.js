import React from 'react';
import profile_of_me from '../images/hectorMartinez.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    aboutSection: {
      display: 'flex',
      flexDirection: 'column',
      margin: '1%',
      padding: '1%',
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
  })

function Aboutpage(){
    const classes = useStyles();
    return(
        <section className='about_section'>
            <h2>About</h2>
            <div className='aboutDiv'>
                <img className={classes.aboutPicture} src={profile_of_me} alt='Hector Martinez'/>
                <p className={classes.aboutParagraph}>Hello my name is Hector, I am a highly capable, full stack developer with experience programming everything from Web API's to Front-end development. My diverse background across a wide range of problem domains allows me to approach issues in an all-encompassing way.</p>
            </div>
        </section>
    )
}

export default Aboutpage;