import React from 'react';
import northwestpic from './northwestforest.png';
import './App.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import HackathonCard from './components/HackathonCard';
import MacroCard from './components/MacroCard';
import { makeStyles } from '@material-ui/core/styles';
import { LARGE } from 'material-ui/utils/withWidth';
// import classes from '*.module.css';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    // justifyContent: 'flex-start',
    border: '2px solid red',
    alignItems: 'center',
    padding: '0 2%',
    height: '60px',
    color: 'white',
    fontSize: '20px',
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
    padding: '0 2%',
    border: '2px solid blue',
    color: 'white'
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <section className={classes.header}>
        <div className={classes.icons}>Hector Martinez</div>
        <a className={classes.icons} href='https://github.com/Hector-bit/'><GitHubIcon></GitHubIcon></a>
        <a className={classes.icons} href='https://www.linkedin.com/in/hector-martinez-8a2640193/'><LinkedInIcon/></a>
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
