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
                <img className='tool' src={react} alt='React'/>
                <img className='tool' src={redux} alt='Redux'/>
                <img className='tool' src={node} alt='Node'/>
                <img className='tool' src={python} alt='Python'/>
                <img className='tool' src={sql} alt='SQL'/>
                <img className='tool' src={scss} alt='SCSS'/>
            </div>  
        </section> 
    )
}

export default Tools;