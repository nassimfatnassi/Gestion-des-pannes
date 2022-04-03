import React from "react";
import'./Sinscrire.css';
export default function Sinscrire() {
  return (
    <div>
        <div className="sinscrire">
            <p className="h2 titre">Information Personnel</p>
         <form>
             <label className="me-3 label-1">Nom</label>
             <input type="text" placeholder="AByCod" />
             <br></br> <br></br>
             <labe className="me-3 label-1">Prénom</labe>
             <input type="text" placeholder="AByCod" />
             <br></br> <br></br>
             <labe className="me-3 label-1">Téléphone</labe>
             <input type="text" placeholder="+21600000000" />
         </form>
            <p className="h2 titre">Compte</p>
         <form>
             <label className="me-3 label-1">Login</label>
             <input type="text" placeholder="AByCod" />
             <br></br> <br></br>
             <labe className="me-3 label-1">Email</labe>
             <input type="email" placeholder="AByCod" />
             <br></br> <br></br>
             <labe className="me-3 label-1">Password</labe>
             <input type="pasword" placeholder="**********" />
         </form>
         <br></br> 
         <button className="btn btn-primary">Connecter</button>
        </div>
    </div>
  );
}
