import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CreateOrder from "../pages/CreateOrder";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/create-order" element={<CreateOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
