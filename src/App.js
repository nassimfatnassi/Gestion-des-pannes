import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Acceuil from './Components/Acceuil/Acceuil';
import Sinscrire from './Components/Sinscrire/Sinscrire';
import Materiaux from './Components/Materiaux/Materiaux';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
       <Routes>
         <Route exact path="/" element={<Acceuil  />} />
         <Route exact path="/Sinscrire" element={<Sinscrire  />} />
         <Route exact path="/Materiaux" element={<Materiaux  />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
