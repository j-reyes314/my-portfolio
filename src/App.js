import logo from './logo.svg';
import './App.css';
import Contact from './components/contact/Contact';
import ProjectCard from './components/projectCard/ProjectCard';
import { useRef } from 'react';

function App() {
  const contactRef = useRef();

  function scrollContact() {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
}
  

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        
      </header>
      <div className ="ribbon">
        <div className ="blue"></div>
        <div className = "green"></div>
        <div className ="yellow"></div>
        <div className ="orange"></div>
        <div className = "red"></div>
      </div>
      <div className="body">
        <div style={{ display: 'relative', textAlign: "left"  }}>
            <p style ={{ marginLeft: '5em', fontSize: '3em', marginBottom: '0'}}>
              Hello I'm
            </p>
          </div>
          
          <p 
            style={{ color: "blue",transform: "matrix(1, -0.20, 0, 1, 0, 0)",
                    msTransform: "matrix(1, -0.20, 0, 1, 0, 0)",
                    WebkitTransform: "matrix(1, -0.20, 0, 1, 0, 0)",
                    textShadow: "4px 5px #e6e6d8, 6px 7px #c6a39a",
                    fontSize: '5em',
                    marginTop: '0'
                  }}
          >
            Joshua Reyes
          </p>
          
          <div className='about'>
            <h3 style ={{color: "black"}}>A little bit about me...</h3>
            <p>
              I am a current graduating senior at Lehman College. I formerly worked as a freelance technician in various theatres
              throughout New York City. I will soon be earning a BS in Computer Science. I have a passion for Frontend development and
              creating great user experiences. I am new to this profession and am always excited to learn new software and skills. 
            </p>
          </div>

          <p onClick={scrollContact} className="contact">Contact me here!</p>

          
          <h3 style ={{color: "black"}}>My Portfolio</h3>
          <div style={{width: "100%", display:  'grid', gridTemplateColumns: "repeat(3,1fr)", gap: '15px'}}>
            
            <ProjectCard message ="Check out the Weather!" link ="https://j-reyes314.github.io/my-weather-app/"/>
            <ProjectCard message ="Figure out the fruit!" link ="https://github.com/j-reyes314/Project_Examples/blob/main/Fruits_Logistic_Regression.ipynb"/>
            <ProjectCard message ="Check out this website!" link ="https://github.com/ChrisEspinal/my-group-project2"/>
          </div>
          <div>
          <div ref ={contactRef}>
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
