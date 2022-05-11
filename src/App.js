import './App.css';
import React, { createContext } from 'react';

import HomePage from "./Home.js";
import Navbar from './navbar.js' 
// import About from "./About.js";
import XO from "./XO/XO.js";
import FileUpload from "./fileUpload.js";
import Classcomponent from "./Classcomponent.js";
import New from "./New.js";
import Feature from "./Feature.js";
import UsersDetails from "./UsersDetails.js";
import Error from "./Error.js";
import Profile from "./Profile.js";
import {BrowserRouter ,Route ,Routes ,Link} from "react-router-dom";
const LazyAbout = React.lazy(()=>import('./About'))

export const context = createContext();
export const channelContext = createContext();

function App() {
  return (
      <div className="App">
        <div className='container'>

            <Navbar></Navbar>
          <context.Provider value={'dsdasasad'}>
            <channelContext.Provider value={'channelContext'}>
              <Routes>
                <Route path='/' exact element={<HomePage/>}></Route>
                {/* <Route path='/about' exact element={<About/>}></Route> */}
                <Route path='/about' element={
                  <React.Suspense fallback='loading...'>
                    <LazyAbout />
                  </React.Suspense>
                }/>
                <Route path='/113312' element={<HomePage/>}/>
                <Route path='/XO' element={<XO/>}/>
                <Route path='/fileUpload' element={<FileUpload/>}/>
                <Route path='/Profile' element={<Profile/>}/>
                <Route path='/UsersDetails/:id' element={<UsersDetails/>}/>
                <Route path='/Classcomponent' element={<Classcomponent/>}>
                  <Route index element ={<New/>}/>
                  <Route path="Feature" element={<Feature/>}/>
                  <Route path="New" element={<New/>}/>
                </Route>
                <Route path='*' element={<Error/>}/>
              </Routes>
            </channelContext.Provider>
          </context.Provider>
          </div>
        </div>
  );
}

export default App;
