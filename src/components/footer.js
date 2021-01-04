import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer_section:{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: '40px 0 20px 0'
    }
})

function Footer(){
    const classes = useStyles()
    return(
        <section className={classes.footer_section}>
            Copyright © martinezhector.com 2021
        </section>
    )
}

export default Footer;