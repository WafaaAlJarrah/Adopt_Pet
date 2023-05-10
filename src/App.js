import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Login from "./Components/Login/Login.js";
import Signup from "./Components/SignUp/Signup.js";
import { useState } from "react";

function App() {
  // const [IsSigup, setIsSigup] = useState(false);
  return (
    
      <div className="App">
        <Routes>
          {/* <Route path="/" element={!IsSigup ? <Signup /> : <Login />}></Route> */}
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<Signup />}></Route>
        </Routes>
      </div>
    
  );
}

export default App;
