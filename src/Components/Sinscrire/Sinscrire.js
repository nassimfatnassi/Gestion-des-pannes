import React from "react";
import'./Sinscrire.css';
export default function Sinscrire() {
  return (
    <div>
        <div className="d_flex">
            <p className="h2">Information Personnel</p>
         <form>
             <label className="me-3">Nom</label>
             <input type="text" placeholder="AByCod" />
             <br></br> <br></br>
             <labe className="me-3">Prénom</labe>
             <input type="text" placeholder="AByCod" />
             <br></br> <br></br>
             <labe className="me-3">Téléphone</labe>
             <input type="text" placeholder="+21600000000" />
         </form>
            <p className="h2">Compte</p>
         <form>
             <label className="me-3">Login</label>
             <input type="text" placeholder="AByCod" />
             <br></br> <br></br>
             <labe className="me-3">Email</labe>
             <input type="email" placeholder="AByCod" />
             <br></br> <br></br>
             <labe className="me-3">Password</labe>
             <input type="pasword" placeholder="**********" />
         </form>
         <br></br> 
         <button className="btn btn-primary">Connecter</button>
        </div>
    </div>
  );
}
