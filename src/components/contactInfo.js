import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     contact_section: {
//         margin: '7% 0'
//     }
// })

function ContactInfo () {
    // const classes = useStyles()
    return (
        <section className='contact'>
            <h2>Contact Info:</h2>
            <h3>Email: hectormartinez.2978@gmail.com</h3>
            <h3>Linkedin: <a href='https://www.linkedin.com/in/m-hector/'>Hector martinez</a></h3>
            <h3>GitHub: <a href='https://github.com/Hector-bit/'>Hector-bit</a></h3>
        </section>
    )
}

export default ContactInfo;