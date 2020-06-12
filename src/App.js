import React from 'react';
import './scss/index.css';
// import Title from './components/title';
import Header from './components/header';
import Aboutpage from './components/aboutpage';
import Tools from './components/tools';
import ProjectsSection from './components/projectsSection';
import ContactInfo from './components/contactInfo';
import Footer from './components/footer';
//Pictures
import mainphoto from './images/MainPicture.jpg';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   mainpage: {
//     margin: 'auto',
//     maxWidth: '1200px',
//   },
// })

function App() {
  // const classes = useStyles();

  return (
    <div className="App">
      <Header/>
      {/* <div id='mainphoto'> */}
      {/* <img src={mainphoto} alt='City Night'/> */}
      {/* </div> */}
      <section className='midsection'>
        <Aboutpage/>
        <ProjectsSection/>
        <Tools/>
        <ContactInfo/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
