import React from 'react'

export default function Materiaux() {
  return (
    <div className='d_flex'>
       <p className="h2 mt-5 pb-3">Gérer Matériaux</p>
         <form>
             <label className="me-3">Nom</label>
             <select>
             <option value="tunis">tunis</option>
             <option value="manouba">manouba</option>
             <option value="ariana">ariana</option>
             <option value="benarous">benarous</option>
             <option value="beja">beja</option>
             </select>
             <br></br> <br></br>
             <label className="me-3">Classification</label>
             <select>
             <option value="tunis">tunis</option>
             <option value="manouba">manouba</option>
             <option value="ariana">ariana</option>
             <option value="benarous">benarous</option>
             <option value="beja">beja</option>
         </select>
         <br></br> <br></br>
         <button className='btn btn-primary'>Ajouter</button> <button className='btn btn-primary'>Modifier</button>
         </form>
    </div>
  )
}
