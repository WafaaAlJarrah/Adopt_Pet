import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login/Login.js";
import Signup from "./Components/SignUp/Signup.js";
import { useState } from "react";
import NewSpec from "./Components/NewSpec";
import NewAnimal from "./Components/NewAnimal.js";
import AllAnimals from "./Components/AllAnimals";
// import AllSpecifications from "./Components/AllSpecifications";

function App() {
  // const user = useSelector((state) => state.authReducer.authData);
  // const [IsSigup, setIsSigup] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/allAnimal/:specificationId"
          element={<AllAnimals />}
        ></Route>
        <Route path="/newSpecification" element={<NewSpec />} />
        <Route path="/newAnimal" element={<NewAnimal />} />
        {/* <Route path="/" element={!IsSigup ? <Signup /> : <Login />}></Route> */}
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
