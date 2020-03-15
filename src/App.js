import React from 'react';
import northwestpic from './northwestforest.png';
import './App.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import HackathonCard from './components/HackathonCard';
import MacroCard from './components/MacroCard';
import { makeStyles } from '@material-ui/core/styles';
// import classes from '*.module.css';

const useStyles = makeStyles({
  mainpage: {
    border: '2px solid red',
    margin: 'auto',
    maxWidth: '1200px'
  },
  projects: {
    display: 'flex',
    justifyContent: 'center',
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <section className='header'>
        <div>Hector Martinez</div>
        <a className='git' href='https://github.com/Hector-bit/'><GitHubIcon></GitHubIcon></a>
        <a className='link' href='https://www.linkedin.com/in/hector-martinez-8a2640193/'><LinkedInIcon/></a>
      </section>
      <section className={classes.mainpage}>
        <h2>Projects</h2>
        <div className={classes.projects}>
          <HackathonCard/>
          <MacroCard/>
        </div>
      </section>
    </div>
  );
}

export default App;
