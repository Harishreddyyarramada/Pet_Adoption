import { Routes, Route } from "react-router-dom";
import RegisterPet from "../pages/User/RegisterPet.jsx";
import Login from "../pages/User/Login.jsx";
import Register from "../pages/User/Register.jsx";
import Dashboard from "../pages/User/Dashboard.jsx";
import PetFinder from "../pages/User/PetFinder.jsx";
import Home from "../pages/User/Home.jsx";
import ViewPets from "../pages/User/ViewPets.jsx";
import ProtectedUserRoute from "./ProtectedUserRoute.jsx";
import About from "../pages/User/About.jsx";
export default function UserRoutes() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/pet-finder" element={<PetFinder/>} />
          <Route path="/pet/register" element={<RegisterPet />} />
          <Route path="/user/pets" element={<ViewPets />} />    
    </Routes>
  );
}
