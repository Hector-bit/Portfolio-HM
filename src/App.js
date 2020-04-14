import React from 'react';
import './App.css';
import Title from './components/title';
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
  tools_and_about: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
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
      <Title/>
      <section className={classes.mainpage}>
        <div className={classes.tools_and_about}>
          <Aboutpage/>
          <Tools/>
        </div>
        <h2 className='projectsTitle'>Projects</h2>
        <div className={classes.projects}>
          <HackathonCard/>
          <MacroCard/>
          <PortfolioWebsite/>
        </div>
        <ContactInfo/>
      </section>
    </div>
  );
}

export default App;
