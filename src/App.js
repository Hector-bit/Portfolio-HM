import React from 'react';
import northwestpic from './northwestforest.png';
import './App.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MediaCard from './components/projectCards';

function App() {
  let sectionStyle = {
    width: "100%",
    height: "400px",
    border: 'solid red 3px',
    backgroundColor: 'black',
    backgroundImage: northwestpic
  };

  return (
    <div className="App">
      <section className='header'>
        <div>Hector Martinez</div>
        <a className='git' href='https://github.com/Hector-bit/'><GitHubIcon></GitHubIcon></a>
        <a className='link' href='https://www.linkedin.com/in/hector-martinez-8a2640193/'><LinkedInIcon/></a>
      </section>
      <section className='top-section' styles={sectionStyle}>
        <div>Projects</div>
        <MediaCard></MediaCard>
      </section>
    </div>
  );
}

export default App;
