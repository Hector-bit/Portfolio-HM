import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import backgroundPhoto from '../images/background.jpg';

const useStyles = makeStyles({
    titleSection: {
      display: 'flex',
      flexDirection: 'column',
    //   backgroundImage: "url('../images/time.jpg')",
      },
    name: {
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        padding: '5%',
        margin: '0'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        padding: '5%',
        margin: '0'
    }
  })

function Title(){
    const classes = useStyles();
    return(
        <section>
            <div className='titleSection'>
                <h1 className={classes.name}>Hector Martinez</h1>
                <h2 className={classes.title}>Full Stack Web Developer</h2>
            </div>
        </section>
    )
}

export default Title;