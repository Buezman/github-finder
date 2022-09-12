import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/user/:login' element={<User />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
