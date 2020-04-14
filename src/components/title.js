import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import backgroundPhoto from '../images/background.jpg';

const useStyles = makeStyles({
    titleSection: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'royalblue',
      backgroundImage: "url('../images/background')",
      border: '2px solid red'
      }
  })

function Title(){
    const classes = useStyles();
    return(
        <section className='titleSection'>
            <h1>Hector Martinez</h1>
            <h2>Full Stack Web Developer</h2>
            {/* <img src={backgroundPhoto}/> */}
        </section>
    )
}

export default Title;