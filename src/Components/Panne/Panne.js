import React from 'react'

export default function Panne() {
  return (
    <div className='d_flex'>
    <p className="h2 mt-5 pb-3">Consulter la liste des pannes</p>
      <form>
          <label className="me-3">Projet</label>
          <select>
          <option value="tunis">Projet</option>
          </select>
          <br></br> <br></br>
          <label className="me-3">Ligne</label>
          <select>
          <option value="tunis">Ligne</option>
          </select>
          <br></br> <br></br>
          <label className="me-3">Poste</label>
          <select>
          <option value="tunis">Poste</option>
          </select>
          <br></br> <br></br>
          <label className="me-3">Catégories</label>
          <select>
          <option value="tunis">Catégories</option>
          </select>
          <br></br> <br></br>
          <label>Date</label>
          <input type="date" />
      <br></br> <br></br>
      <button className='btn btn-primary'>Ajouter</button> <button className='btn btn-primary'>Modifier</button>
      </form>
 </div>
  )
}
