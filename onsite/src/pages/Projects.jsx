import { Routes, Route } from "react-router-dom";
import Material from "./Material";
import Payment from "./Payment";
import Photos from "./Photos";
import Team from "./Team";
import Task from "./Task";
import Navbar from "../components/Navbar";
import Home from "./Home";

function Projects() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/photo" element={<Photos />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/task" element={<Task />}></Route>
        <Route path="/material" element={<Material />}></Route>
      </Routes>
    </>
  );
}

export default Projects;
