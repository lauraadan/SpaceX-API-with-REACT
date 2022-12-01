import logo from './assets/logo-spacex.png'
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
      <Route path="/" element={<LaunchList />} />
      {/* el :id lo va a recibir LaunchesList por props */}
      <Route path="launch/:launchId" element={<LaunchDetails />} />
      <Route path="rockets/:rocketId" element={<RocketDetails />} />
    </Routes>

    
    </>
  );
}


