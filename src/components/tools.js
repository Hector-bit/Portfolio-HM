import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    tools_about: {
        margin: '1%',
        padding: '1%',
        width: '50%',
        border: '3px solid red'
    },
    tools: {
        margin: '1%',
        // width: '50%',
        border: '2px solid red'
    }
})

function Tools(){
    const classes = useStyles();
    return(
        <section className={classes.tools_about}>
            <h2>Tools</h2>
            <div className={classes.tools}>
                <ul className='tool'>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node</li>
                </ul>
                <ul className='tool'>
                    <li>Pyhton</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>  
        </section> 
    )
}

export default Tools;