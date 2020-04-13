import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Tools(){
    return(
        <section>
            <h2>Tools:</h2>
            <div className='tools'>
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