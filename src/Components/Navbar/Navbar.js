import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="logo.png" width="50%" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Acceuil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/Sinscrire">
                  S'inscrire
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Profil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Technicien IT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/Panne">
                  Panne
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/Materiaux">
                  Matériaux
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Tableau de bord
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
           </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
