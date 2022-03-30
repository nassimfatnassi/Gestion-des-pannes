import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
     </Router>
    </div>
  );
}

export default App;
