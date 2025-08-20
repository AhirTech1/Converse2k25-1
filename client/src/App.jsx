import React, {useEffect, Suspense} from 'react'
import { Routes,Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import { useDispatch } from "react-redux";
import { fetchUser } from './auth/auth.js';

const GraphicsTeam = React.lazy(() => import('./pages/TeamDetails/GraphicsTeam.jsx'));
const WebTeam = React.lazy(() => import('./pages/TeamDetails/WebTeam.jsx'));
const CoreTeam = React.lazy(() => import('./pages/TeamDetails/CoreTeam.jsx'));
const Profile = React.lazy(() => import('./pages/Profile.jsx'));
const Signin = React.lazy(() => import('./pages/Signin.jsx'));
const Teams = React.lazy(() => import('./pages/Teams.jsx'));
const Events = React.lazy(() => import('./pages/Events.jsx'));
const Schedule = React.lazy(() => import('./pages/Schedule.jsx'));
const AboutPage = React.lazy(() => import('./pages/AboutPage.jsx'));
const AIQuiz = React.lazy(() => import('./pages/EventDeatils/AIQuiz.jsx'));
const PYIT = React.lazy(() => import('./pages/EventDeatils/PYIT.jsx'));
const AIMemes = React.lazy(() => import('./pages/EventDeatils/AIMemes.jsx'));
const WebWaves = React.lazy(() => import('./pages/EventDeatils/WebWaves.jsx'));
const TechTussal = React.lazy(() => import('./pages/EventDeatils/TechTussal.jsx'));
const Codathon = React.lazy(() => import('./pages/EventDeatils/Codathon.jsx'));
const BugBuzz = React.lazy(() => import('./pages/EventDeatils/BugBuzz.jsx'));
const ITQuiz = React.lazy(() => import('./pages/EventDeatils/ITQuiz.jsx'));
const Cybersiege = React.lazy(() => import('./pages/EventDeatils/Cybersiege.jsx'));
const LogoHunt = React.lazy(() => import('./pages/EventDeatils/LogoHunt.jsx'));
const HomePage = React.lazy(() => import('./pages/HomePage.jsx'));

import AppBar from './components/App/AppBar.jsx'
import AppFottor from './components/App/AppFottor.jsx'



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
            <ScrollToTop />
            <Suspense fallback={<div className='p-8 text-center text-gray-300'>Loading…</div>}><Routes>
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

                {/* Teams Page */}
                <Route path='/teams/core-team' element={<CoreTeam />}/>
                <Route path='/teams/web-team' element={<WebTeam />}/>
                <Route path='/teams/graphics-team' element={<GraphicsTeam />}/>

            </Routes></Suspense>
            <AppFottor/>
        </>
    )
}

export default App
