import './App.css';
import HomePage from "./Home.js";
import Navbar from './navbar.js' 
import About from "./About.js";
import {BrowserRouter ,Route ,Routes ,Link} from "react-router-dom";
// import { Route } from 'react-router';

// const HomePage =()=>{<div>Home</div>}
// const About =()=>{<div>About</div>}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>

            <Navbar></Navbar>
          <Routes>
            <Route path='/' exact element={<HomePage/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/113312' element={<HomePage/>}/>
          </Routes>
          </div>
        </div>
        
    </BrowserRouter>
  );
}

export default App;
