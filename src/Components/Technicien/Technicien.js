import React from 'react'
import'./Technicien.css';
export default function Technicien() {
  return (
  <div className='d_flex'>
       <p className="h2 mt-5 pb-3">Suivi Compte Technicien IT</p>
       <br></br> <br></br>

      <table class="table table-light table-striped">
           <thead class="table-light ">
           <tr class="table-light">
             <th scope="col">ID</th>
             <th scope="col">Nom</th>
             <th scope="col">Prénom</th>
             <th scope="col">Email</th>
             <th scope="col">Téléphone</th>
           </tr>
           </thead>
         <tbody>
          <tr>
             <th scope="row">1</th>
             <td colspan="6"></td>
             <td></td>
             <td></td>
             <td></td>
           </tr>
           <tr>
             <th scope="row">2</th>
             <td colspan="6"></td>
             <td></td>
             <td></td>
             <td></td>
           </tr>
           <tr>
             <th scope="row">3</th>
             <td colspan="6"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
             <th scope="row">4</th>
             <td colspan="6"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
             <th scope="row">5</th>
             <td colspan="6"></td>
              <td></td>
              <td></td>
              <td></td>

            </tr>
            <tr>
              <th scope="row">6</th>
              <td colspan="6"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
        </tbody>
       </table>
       <br></br> <br></br>
       <button type="button" class="btn btn-primary btn-lg">Retour</button>
  </div>
 );
}

