import React from 'react';
import './App.css';
import Title from './components/title';
import Header from './components/header';
import Aboutpage from './components/aboutpage';
import Tools from './components/tools';
import ProjectsSection from './components/projectsSection';
import ContactInfo from './components/contactInfo';
import Footer from './components/footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainpage: {
    margin: 'auto',
    maxWidth: '1200px',
  },
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header/>
      {/* <Title/> */}
      <section className={classes.mainpage}>
        <section className='about_and_tools'>
          <Aboutpage/>
          <Tools/>
        </section>
        <ProjectsSection/>
        <ContactInfo/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
