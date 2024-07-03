import './App.css';
import Navbar1 from './Components/Navbar1';
import Main from './Components/Main';
import Exposure from './Components/Exposure';
import Transition from './Components/Transition';
import Success from './Components/Success';
import AcademicExcellence from './Components/AcademicExcellence';
import Victory from './Components/Victory';
import AboutHarvod from './Components/AboutHarvod';
import JoinUs from './Components/JoinUs';
import Form from './Components/Form';


function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Main/>
      <Exposure/>
      <Transition/>
      <Success/>
      <AcademicExcellence/>
      <Victory/>
      <AboutHarvod/>
      <JoinUs/>
      <Form/>
    </div>
  );
}

export default App;
