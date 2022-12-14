import logo from './assets/img/logo-spacex.png'
import {Image} from '@chakra-ui/react'
import { LaunchItem } from "./components/LaunchItem"
import './App.css';
import { Routes, Route } from "react-router-dom"
import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetails";
import { RocketDetails } from "./components/RocketDetails";

export function App() {
  
  return (
    <>
    <Image src={logo} alt="logo spacex" width={300} m={4} /> 
    <Routes>
      <Route path="/SpaceX-API-with-REACT" element={<LaunchList />} />
      <Route path="launch/:launchId" element={<LaunchDetails />} />
      <Route path="rockets/:rocketId" element={<RocketDetails />} />
    </Routes>

    </>
  );
}


