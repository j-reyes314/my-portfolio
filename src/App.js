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

      
        <div className='intro'>
          <div style={{ display: 'relative', textAlign: "left"  }}>
            <p style ={{
              position: 'absolute', 
              fontSize: '6em', 
              margin:0,
              fontFamily: 'Brush Script MT', 
              left: '10px', 
              top: '100px'
              }}
            >
              Hello! I'm
            </p>
          </div>
            
          <p 
            style={{ 
              color: "black",
              transform: "matrix(1, -0.20, 0, 1, 0, 0)",
              msTransform: "matrix(1, -0.20, 0, 1, 0, 0)",
              WebkitTransform: "matrix(1, -0.20, 0, 1, 0, 0)",
              textShadow: "4px 5px #e6e6d8, 6px 7px #c6a39a",
              fontSize: '8em',
              marginTop: '2em',
              fontFamily: 'Lucida Console'
            }}
          >
            Joshua Reyes
          </p>
        </div>
          
        <div className='about'>

          <h1 style ={{color: "black"}}>A little bit about me...</h1>
          <p style={{fontSize: '2em'}}>
            I am a current graduating senior at Lehman College. I formerly worked as a freelance technician in various theatres
            throughout New York City. I will soon be earning a BS in Computer Science. I have a passion for Frontend development and
            creating great user experiences. I am new to this profession and am always excited to learn new software and skills. 
          </p>
           {/* <p onClick={scrollContact} className="contact">Contact me here!</p> */}

        </div>
          

         

        <div className="portfolio">

          <h1 style ={{color: "black"}}>My Portfolio</h1>
          <div style={{width: "99%", display: 'grid', gridTemplateColumns: "repeat(3,1fr)", gap: '18px'}}>
            
            <ProjectCard message ="Check out the Weather!" clr ={0} link ="https://j-reyes314.github.io/my-weather-app/"/>
            <ProjectCard message ="Figure out the fruit with Machine Learning!" clr ={1} link ="https://github.com/j-reyes314/Project_Examples/blob/main/Fruits_Logistic_Regression.ipynb"/>
            <ProjectCard message ="Check out this code!" clr={2} link ="https://github.com/ChrisEspinal/my-group-project2"/>
          
          </div>

        </div>


        
        <div ref ={contactRef}>
          <Contact/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
