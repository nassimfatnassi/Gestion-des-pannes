import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Components/Sidebar/Navbar';
import Acceuil from './Components/Acceuil/Acceuil';
import Sinscrire from './Components/Sinscrire/Sinscrire';
import Materiaux from './Components/Materiaux/Materiaux';
import Panne from './Components/Panne/Panne';
import Profil from './Components/Profil/Profil';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Acceuil  />} />
         <Route exact path="/Sinscrire" element={<Sinscrire  />} />
         <Route exact path="/Materiaux" element={<Materiaux  />} />
         <Route exact path="/Panne" element={<Panne  />} />
         <Route exact path="/Profil" element={<Profil  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
