import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react'
import * as API from "../services/launches"
import { LaunchItem } from "./LaunchItem"

export function LaunchList(){

    const [launches, setLaunches] = useState([])
    // esto lo que hará es arrancará la aplicacion, llamará a la api y seteará el estado y cuando el estado se cambie, o sea, cuando launches tenga algo, 
    // va a renderizar el pintado desde donde se esté usando. 
    useEffect(() =>{
      API.getAllLaunches().then(data => setLaunches(data)); // info extraida de launches.js. data => vamos a recibir unos datos y se los pasamos a setLaunches
    }, []);

    return (
    <>
        <Heading as="h1" size="lg" m={4} color="whiteAlpha.500">SpaceX Launches</Heading>
        <section>
        {/* recorre la array y devuelve la array y por cada uno de estos nos devuelve algo. */}
            {launches.map(launch =>  (
            <LaunchItem key={launch.flight_number} {...launch}/> // ...launch es un prop
            ))}
        </section>
    </>
    )
}

