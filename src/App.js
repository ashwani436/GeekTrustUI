import './App.css';
import PlanetSearch from './components/PlanetSearch';
import Vehiclesearch from './components/Vehiclesearch';

function App() {
  return (
    <>
    <h1>Finding Falcon</h1>
    <br/>
    <br/>
    <h3>Select Planet You want to Search in!</h3>
    <PlanetSearch/>
    <Vehiclesearch/>
    </>

  );
}

export default App;
