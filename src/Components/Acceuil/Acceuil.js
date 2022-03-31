import React from "react";

export default function Acceuil() {
  return (
    <div>
      <div className="header mt-5">
        <p className="h2 fw-bold fst-italic">About us</p>
        <img src="map.png" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <p className="p1">
              Kromberg & Schubert look back on a story of success spanning more
              than 110 years.
            </p>
            <p className="p2">
              Pioneering spirit and innovative entrepreneurship with a flat
              hierarchy has enabled the continuous expansion and globalisation
              of the company. With over 50.000 employees (m/f/d) in over 40
              locations, Kromberg & Schubert is today one of the global leaders
              in the supply of electrical systems, cables and plastic
              components.
            </p>
            <p className="p3">
              The key to success is the company culture: Enthusias­m and
              motivation to provide creative product solutions are the engines
              of the interdisciplinary teams, who focus their energies on
              recognizing trends in the market at an early stage and also on
              addressing the individual requirements of our customers.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    </div>
  );
}
