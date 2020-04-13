import React from 'react';
import './App.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './components/header';
import HackathonCard from './components/HackathonCard';
import Aboutpage from './components/aboutpage';
import MacroCard from './components/MacroCard';
import PortfolioWebsite from './components/Portfolio';
import Tools from './components/tools';
import ContactInfo from './components/contactInfo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainpage: {
    margin: 'auto',
    maxWidth: '1200px'
  },
  projects: {
    display: 'flex',
    justifyContent: 'center',
    border: '2px solid red'
  },
})


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header/>
      <section className={classes.mainpage}>
        <Aboutpage/>
        <h2 className='projectsTitle'>Projects</h2>
        <div className={classes.projects}>
          <HackathonCard/>
          <MacroCard/>
          <PortfolioWebsite/>
        </div>
        <Tools/>
        <ContactInfo/>
      </section>
    </div>
  );
}

export default App;
