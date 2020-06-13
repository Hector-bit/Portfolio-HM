import React from 'react';
import './scss/index.css';
// import Title from './components/title';
import Header from './components/header';
import Aboutpage from './components/aboutpage';
import Tools from './components/tools';
import ProjectsSection from './components/projectsSection';
import ContactInfo from './components/contactInfo';
import Footer from './components/footer';

function App() {

  return (
    <div className="App">
      <Header/>
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
