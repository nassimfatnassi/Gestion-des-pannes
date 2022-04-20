import React from "react";
import'./Sinscrire.css';
export default function Sinscrire() {
  return (
    <div className='d_flex'>
       <form>
       <br></br> <br></br>
       <h1>S'inscrire</h1>
         <div class='row justify-content-center'>
           <div class="form-group col-md-2">
              <label for="inputPrénom4">Nom</label> 
              <input type="nom" class="form-control" id="inputPrénom4" placeholder="Nom"/>
           </div>
          </div>  
          <div class='row justify-content-center'>
           <div class="form-group col-md-2">
              <label for="inputPrénom4">Prénom</label>
              <input type="prénom" class="form-control" id="inputPrénom4" placeholder="Prénom"/>
           </div>
          </div>       
             <div class='row justify-content-center'>
               <div class="form-group col-md-2">
                 <label for="inputTéléphone4">Téléphone</label>
                  <input type="téléphone" class="form-control" id="inputTéléphone4" placeholder="+2160000000"/>
               </div>
              </div> 
           
                 <div class='row justify-content-center'>
                    <div class="form-group col-md-2">
                      <label for="inputEmail4">Email</label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder="exemple@gmail.com"/>
                    </div>
                  </div>
                  <div class='row justify-content-center'>                
                    <div class="form-group col-md-2">
                      <label for="inputPassword4">Mot de passe </label>
                      <input type="password" class="form-control" id="inputPassword4" placeholder="********"/>
                   </div>
               </div>
               <br></br> 
                 <button type="submit" className="btn btn-primary  btn-ms btn-block ">Connecter</button>      <button type="submit" className="btn btn-secondary  btn-ms btn-block ">Annuler</button>
                <br></br>  
               <p className="forgot-password text-right">
               Déjà enregistré <a href="#">S'inscrire</a>
              </p> 
    
     </form>
    </div>
  ); 
}


 