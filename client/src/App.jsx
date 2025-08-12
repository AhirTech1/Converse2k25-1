import React, {useEffect} from 'react'
import { Routes,Route } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { fetchUser } from './auth/auth.js';

import AppBar from './components/App/AppBar.jsx'
import AppFottor from './components/App/AppFottor.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Schedule from './pages/Schedule.jsx'
import Events from './pages/Events.jsx'
import Teams from './pages/Teams.jsx'

import Signin from './pages/Signin.jsx'
import Profile from './pages/Profile.jsx'


import LogoHunt from './pages/EventDeatils/LogoHunt.jsx'
import Cybersiege from './pages/EventDeatils/Cybersiege.jsx'
import ITQuiz from './pages/EventDeatils/ITQuiz.jsx';
import BugBuzz from './pages/EventDeatils/BugBuzz.jsx';
import Codathon from './pages/EventDeatils/Codathon.jsx'
import TechTussal from './pages/EventDeatils/TechTussal.jsx'
import WebWaves from  './pages/EventDeatils/WebWaves.jsx'
import AIMemes from  './pages/EventDeatils/AIMemes.jsx'
import PYIT from './pages/EventDeatils/PYIT.jsx'
import AIQuiz from './pages/EventDeatils/AIQuiz.jsx'


function App() {
const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("profile");
    if (token) {
      dispatch(fetchUser());
    }
  }, [dispatch]);
  return (
    <>
      <AppBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/schedule' element={<Schedule/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/signin' element={<Signin/>} />
          <Route path='/profile' element={<Profile/>} />
        <Route path='/teams' element={<Teams/>} />

        {/* Event Page */}
        <Route path='/event/logohunt' element={<LogoHunt/>}/>
        <Route path= '/event/cybersiege' element={<Cybersiege/>}/>
        <Route path='/event/itquiz' element={<ITQuiz/>}/>
        <Route path='/event/bugbuzz' element={<BugBuzz/>}/>
        <Route path='/event/codathon' element={<Codathon/>}/>
        <Route path='/event/techtussle' element={<TechTussal/>}/>
        <Route path='/event/webwave' element={<WebWaves/>}/>
        <Route path='/event/aimemes' element={<AIMemes/>}/>
        <Route path='/event/pyit' element={<PYIT/>}/>  
        <Route path='/event/aiquiz' element={<AIQuiz/>}/>  


      </Routes>
      <AppFottor/>
    </>
  )
}

export default App
