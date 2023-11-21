import './App.css';
import Routess from './allRoutes/Routes';
import { Navbar } from './components';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
      <Navbar />

      <Routess/>
      

      <Footer />
    </>
  );
}

export default App;
