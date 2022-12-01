// peticion fetch a spacexdata.com a traves del fetch nativo de js

const API_URL = "https://api.spacexdata.com/v3";

// nos da la info de todos los lanzamiwentos de forma general
export async function getAllLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// nos da la info de cada uno de los lanzamientos de forma individual
export async function getLaunchByFlightNumber(flightNumber) {
  try {
    const response = await fetch(`${API_URL}/launches/${flightNumber}`); // lo mismo que anterior pero ahora devuelve el numero de vuelo
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
