import React from 'react';
import "./Header.css";
import metal from "../../data/metal.json";

export default function Header() {

  return (
    <div className="header">
      <h1>Brian Cahill</h1>
      <h2>FEW 1.2 Final Assessment</h2>
      <p>Total Bands: {metal.length}</p>
      <p>Styles: </p>
    </div>
  );
}