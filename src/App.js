import logo from './logo.svg';
import './App.css';
import Contact from './components/contact/Contact';
import ProjectCard from './components/projectCard/ProjectCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p 
          style={{ color: "blue",transform: "matrix(1, -0.20, 0, 1, 0, 0)",
                  msTransform: "matrix(1, -0.20, 0, 1, 0, 0)",
                  WebkitTransform: "matrix(1, -0.20, 0, 1, 0, 0)",
                  textShadow: "4px 5px #e6e6d8, 6px 7px #c6a39a"
                }}
        >
          Joshua Reyes
        </p>
        <div className ="ribbon">
          <div className ="blue"></div>
          <div className = "green"></div>
          <div className ="yellow"></div>
          <div className ="orange"></div>
          <div className = "red"></div>
        </div>
        
        <h3 style ={{color: "black"}}>A little bit about me...</h3>
        <p>
          I am a current graduating senior at Lehman College. I formerly worked as a freelance technician in various theatres
          throughout New York City. I will soon be earning a BS in Computer Science. I have a passion for Frontend development and
          creating great user experiences. I am new to this profession and am always excited to learn new software and skills. 
        </p>

        <p>Contact me here!</p>

        
        <h3 style ={{color: "black"}}>My Portfolio</h3>
        <div>
          <ProjectCard/>
        </div>
        <div>
        
        <Contact/>
      </div>
      </header>

    </div>
  );
}

export default App;
