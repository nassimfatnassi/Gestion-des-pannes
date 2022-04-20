import React from 'react'
import'./Panne.css';
export default function Panne() {
  return (
    <div className='d_flex'>
    <p className="h2 mt-5 pb-3">Consulter la liste des pannes</p>
      <form >

          <label className="me-3 label-1"> Projet : </label>
          <select>
          <option value="tunis"></option>
          <option value="Daimler">Daimler</option>
          <option value="Q2">Q2</option>
          <option value="Q3">Q3</option>
          <option value="A2">A2</option>
          <option value="A3">A3</option>
          <option value="CUTTING AREA">CUTTING AREA</option>
          <option value="ABS AREA">ABS AREA</option>
          <option value="MUSTER AREA">MUSTER AREA</option>
          <option value="KIT AREA">KIT AREA</option>
          <option value="KO AREA">KO AREA</option>
          <option value="VK AREA">VK AREA</option>
          <option value="KSPS AREA">KSPS AREA</option>
          <option value="DENZO">DENZO</option>
          </select>   
          <br></br>
          <label className="me-3 label-1">Ligne : </label>
          <select>
          <option value="tunis"></option>
          <option value="IRM">IRM</option>
          <option value="MRM">MRM</option>
          <option value="58001">58001</option> 
          <option value="58002">58002</option>
          <option value="58003">58003</option>
          <option value="58004">58004</option>
          <option value="58009">58009</option> 
          <option value="58010">58010</option> 
          <option value="KSTN92">KSTN92</option> 
          <option value="KSTN93">KSTN93</option> 
          <option value="KSTN94">KSTN94</option> 
          <option value="KSTN95">KSTN95</option> 
          <option value="KSTN28">KSTN28</option>
          <option value="KSTN17">KSTN17</option>
          <option value="KSTN18">KSTN18</option>
          <option value="KSTND1">KSTND1</option> 
          <option value="KSTND2">KSTND2</option>
          <option value="KSTND5">KSTND5</option>
          </select>
          <br></br> 
          <label className="me-3 label-1">Poste : </label>
          <select>
          <option value="tunis"></option>
          <option value="MZ">MZ</option> 
          <option value="ET">ET</option>
          <option value="PACKEN">PACKEN</option> 
          <option value="POSTE QUALITE">POSTE QUALITE</option>
          <option value="POSTE SL">POSTE SL</option> 
          <option value="EPT">EPT</option>
          <option value="SCHUNK">SCHUNK</option> 
          <option value="MA">MA</option>
          <option value="VC">VC</option>
          </select>
          <br></br> 
          <label className="me-3 label-1">Catégories :</label>
          <select>
          <option value="tunis"></option>
          <option value="Software Production">Software Production</option>
          <option value="Hardware">Hardware</option> 
          <option value="Network Problems">Network Problems</option>
          </select>
          <br></br> 
          <label className="me-3 label-1">Shift : </label>
          <select>
          <option value="tunis"></option>
          <option value="6h">6h</option>
          <option value="14h">14h</option> 
          <option value="22h">22h</option>
          </select>
          <br></br>
          <div class="form-group">
           <label className="me-3 label-1"> Description : </label>
           <textarea type="Description" placeholder="" as="Description" rows="4"></textarea>
           </div>
         <br></br> 
         <label className="me-3 label-1">Date : </label>
         <input type="date" />
         <br></br> 
         <label className="me-3 label-1">Time : </label>
         <input type="Time" placeholder=""></input>
         <br></br>
            <div class="justify-content-md-end">
           <button class="btn btn-primary" type="button">Ajouter</button>         <button class="btn btn-primary" type="button">Modifier</button>

  
        </div>
      </form>
   </div>
  );
}
