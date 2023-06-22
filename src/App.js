import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login/Login.js";
import Signup from "./Components/SignUp/Signup.js";
import NewSpec from "./Components/NewSpec";
import NewAnimal from "./Components/newAnimal";
import AllAnimals from "./Components/AllAnimals";
import UpdateAnimal from "./Components/UpdateAnimal";
import AllRequests from "./Components/AllRequests";
import AnimalDetails from "./Components/AnimalDetails";
import AllHistories from "./Components/AllHistories";
import Profile from './Components/Profile';
// import AllSpecifications from "./Components/AllSpecifications";

function App() {
  const location = useLocation();
  const isSignPage = location.pathname === "/SignUp" || "/Login";

  // const user = useSelector((state) => state.authReducer.authData);
  // const [IsSigup, setIsSigup] = useState(false);
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/allAnimals/:specificationId"
          element={<AllAnimals />}
        ></Route>
        <Route
          path="/updateAnimal/:animalId"
          element={<UpdateAnimal />}
        ></Route>
        <Route
          path="/animalDetails/:animalId"
          element={<AnimalDetails />}
        ></Route>
        <Route path="/allRequests" element={<AllRequests />}></Route>
        <Route path="/allHistories" element={<AllHistories />}></Route>
        <Route path="/newSpecification" element={<NewSpec />} />
        <Route path="/newAnimal" element={<NewAnimal />} />
        {/* <Route path="/" element={!IsSigup ? <Signup /> : <Login />}></Route> */}
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
