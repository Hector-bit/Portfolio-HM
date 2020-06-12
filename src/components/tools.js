import React from 'react';
//png icons
import javascript from '../images/javascript.png';
import node from '../images/node.png';
import python from '../images/python.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import scss from '../images/scss.png';
import sql from '../images/sql.png';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     tools_about: {
//         margin: '1%',
//         padding: '1%',
//     },
//     tools: {
//         display: 'flex',
//         justifyContent: 'center',
//         margin: '1%',
//         padding: '1%'
//     }
// })

function Tools(){
    // const classes = useStyles();
    return(
        <section className='tools_tool'>
            <h2>Tools</h2>
            <div className='tools'>
                <img className='tool' src={javascript} alt='Javascript'/>
                <img className='tool' src={react} alt='Javascript'/>
                <img className='tool' src={redux} alt='Javascript'/>
                <img className='tool' src={node} alt='Javascript'/>
                <img className='tool' src={python} alt='Javascript'/>
                <img className='tool' src={sql} alt='Javascript'/>
                <img className='tool' src={scss} alt='Javascript'/>
            </div>  
        </section> 
    )
}

export default Tools;