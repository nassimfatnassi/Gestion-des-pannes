import React from "react";
import "./Profil.css";
export default function Profil() {
  return (
    <form>
      <div className="d_flex">
        <p className="h2 mt-5 pb-3">Chef de département</p>
        <a className="imgbg">
          <img src="bgprofil.jpg  " width="22%" />
        </a>

        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <label for="inputPrénom4">Nom</label>
            <input
              type="nom"
              class="form-control"
              id="inputPrénom4"
              placeholder="Nom"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputPrénom4">Prénom</label>
            <input
              type="prénom"
              class="form-control"
              id="inputPrénom4"
              placeholder="Prénom"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <label for="inputAdresse4">Adresse</label>
            <input
              type="adresse"
              class="form-control"
              id="inputAdresse4"
              placeholder="Adresse"
            />
          </div>

          <div class="form-group col-md-4">
            <label for="inputTéléphone4">Téléphone</label>
            <input
              type="téléphone"
              class="form-control"
              id="inputTéléphone4"
              placeholder="+2160000000"
            />
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="form-group col-md-4">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="exemple@gmail.com"
            />
          </div>

          <div class="form-group col-md-4">
            <label for="inputPassword4">Mot de passe </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="*********"
            />
          </div>
        </div>
        <br></br>
        <div>
          <button className="btn btn-primary me-2">Modifier</button>
          <button className="btn btn-secondary">Annuler</button>
        </div>
      </div>
    </form>
  );
}
