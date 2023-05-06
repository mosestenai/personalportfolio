import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Route, useLocation, Routes, Navigate } from "react-router-dom";
import './app.css';

//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Project";
import AboutMe from "./components/About Me/AboutMe";

import { useSelector } from "react-redux";

const App = () => {
    const location = useLocation();
    const theme = useSelector(state => state.theme);
    return (
        <div className="App" style={theme}>
            <Navbar />
            <div className="app-content">
                <TransitionGroup>
                    <CSSTransition timeout={300} classNames='fade' key={location.key}>
                        <Routes>
                            <Route path="/" exact element={<Navigate replace to="/home" />} />
                            <Route path="/home" exact element={<Home  />} />
                            <Route path="/about-me" exact element={ <AboutMe />} />
                            <Route path="/education" exact element={ <Education />} />
                            <Route path="/certifications" exact element={ <Certifications />} />
                            <Route path="/projects" exact element={ <Projects />} />
                            <Route path="*" exact element={<Navigate replace to="/home" />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <Footer />
        </div>
    )
}

export default App;