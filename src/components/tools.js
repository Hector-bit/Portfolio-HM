import React from 'react';
//png icons
import javascript from '../images/javascript.webp';
import node from '../images/node.webp';
import python from '../images/python.webp';
import react from '../images/react.webp';
import redux from '../images/redux.webp';
import scss from '../images/scss.webp';
import sql from '../images/sql.webp';
import wordpress from '../images/wordpress.webp';
import arduino from '../images/arduino.webp';

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
                <div className='tool'>
                    <img className='tool_image' src={wordpress} alt='wordpress'/>
                    <h3>Wordpress</h3>
                </div>
                <div className='tool'>
                    <img className='tool_image' src={arduino} alt='arduino'/>
                    <h3>Arduino</h3>
                </div>
            </div>  
        </section> 
    )
}

export default Tools;