import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    contact_section: {
        margin: '5% 0'
    }
})

function ContactInfo () {
    const classes = useStyles()
    return (
        <section className={classes.contact_section}>
            <h2>Contact Info:</h2>
            <h3>Email: hectormartinez.2978@gmail.com</h3>
        </section>
    )
}

export default ContactInfo;