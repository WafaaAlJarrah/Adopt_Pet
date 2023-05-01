import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login.js";
import Signup from "./Components/SignUp/Signup.js"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<Signup />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
