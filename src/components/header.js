import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 2%',
      height: '60px',
      color: 'white',
      fontSize: '22px',
      backgroundColor: 'black',
      // boxShadow: '0px 4px grey',
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
      padding: '0 2%',
      color: 'white'
    }
  })

function Header(){
    const classes = useStyles();
    return(
        <section className={classes.header}>
            <div className={classes.icons}>Hector Martinez</div>
            <a className={classes.icons} href='https://github.com/Hector-bit/'><GitHubIcon/></a>
            <a className={classes.icons} href='https://www.linkedin.com/in/hector-martinez-8a2640193/'><LinkedInIcon/></a>
        </section>
    )
}

export default Header;