import React from 'react';
//png icons
import javascript from '../images/javascript.png';
import node from '../images/node.png';
import python from '../images/python.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import scss from '../images/scss.png';
import sql from '../images/sql.png';

function Tools(){
    return(
        <section className='tools_tool'>
            <h2>Tools</h2>
            <div className='tools'>
                <div className='tool'>
                    <img className='tool_image' src={javascript} alt='Javascript'/>
                    <h3>Javascript</h3>
                </div>
                <div className='tool'>
                    <img className='tool_image' src={react} alt='react'/>
                    <h3>React</h3>
                </div>
                <div className='tool'>
                    <img className='tool_image' src={redux} alt='redux'/>
                    <h3>Redux</h3>
                </div>
                <div className='tool'>
                    <img className='tool_image' src={node} alt='node'/>
                    <h3>Node</h3>
                </div>
                <div className='tool'>
                    <img className='tool_image' src={python} alt='python'/>
                    <h3>Python</h3>
                </div>
                <div className='tool'>
                    <img className='tool_image' src={sql} alt='SQL'/>
                    <h3>SQL</h3>
                </div>
                <div className='tool'>
                    <img className='tool_image' src={scss} alt='sass'/>
                    <h3>SASS</h3>
                </div>
            </div>  
        </section> 
    )
}

export default Tools;