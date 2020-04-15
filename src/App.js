import React from 'react';
import './App.css';
import Title from './components/title';
import Header from './components/header';
import Aboutpage from './components/aboutpage';
import Tools from './components/tools';
import ProjectsSection from './components/projectsSection';
import ContactInfo from './components/contactInfo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainpage: {
    margin: 'auto',
    maxWidth: '1200px',
  },
  tools_and_about: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
})


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header/>
      {/* <Title/> */}
      <section className={classes.mainpage}>
        <section className={classes.tools_and_about}>
          <Aboutpage/>
          <Tools/>
        </section>
        <ProjectsSection/>
        <ContactInfo/>
      </section>
    </div>
  );
}

export default App;
