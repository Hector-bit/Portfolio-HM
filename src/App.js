import React from 'react';
import './App.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import HackathonCard from './components/HackathonCard';
import MacroCard from './components/MacroCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 2%',
    height: '60px',
    color: 'white',
    fontSize: '22px',
    backgroundColor: 'black',
  },
  mainpage: {
    margin: 'auto',
    maxWidth: '1200px'
  },
  projects: {
    display: 'flex',
    justifyContent: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 2%',
    color: 'white'
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <section className={classes.header}>
        <div className={classes.icons}>Hector Martinez</div>
        <a className={classes.icons} href='https://github.com/Hector-bit/'><GitHubIcon/></a>
        <a className={classes.icons} href='https://www.linkedin.com/in/hector-martinez-8a2640193/'><LinkedInIcon/></a>
      </section>
      <section className={classes.mainpage}>
        <h2>Projects</h2>
        <div className={classes.projects}>
          <HackathonCard/>
          <MacroCard/>
        </div>
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
    </div>
  );
}

export default App;
