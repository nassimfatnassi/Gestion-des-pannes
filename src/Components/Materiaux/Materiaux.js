import React from 'react';
import './Materiaux.css';
export default function Materiaux() {
  return (
    <div className='d_flex'>
       <p className="h2 mt-5 pb-3">Gérer Matériaux</p>
          <a className='img'>
            <img src="materiaux.jpg  "width="40%" />
          </a>
         <form>
             <label className="me-3 label-1">Nom : </label>
             <select>
             <option value="tunis"></option>
             <option value="Printer">Printer</option>
             <option value="PC">PC</option>
             <option value="KOMAX">KOMAX</option>
             <option value="Terminal">Terminal</option>
             </select>
             <br></br> <br></br>
             <label className="me-3 label-1">Classification : </label>
             <select>
             <option value="tunis"></option>
             <option value="printer">Printer</option>
             <option value="komax">Komax</option>
             <option value="datamax">Datamax</option>
             <option value="terminal">Terminal</option>
         </select>
         <br></br> <br></br>
         <button className='btn btn-primary'>Ajouter</button> <button className='btn btn-secondary'>Modifier</button>
         </form>
    </div>
  )
}
