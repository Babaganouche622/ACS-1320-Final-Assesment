import React from 'react';
import "./Header.css";
import metal from "../../data/metal.json";

export default function Header() {
  function totalFans() {
    let fansTotal = 0;
    metal.map((band) => fansTotal += band.fans);
    let new_string = (fansTotal * 1000).toString();
    if (new_string.length > 5) {
      new_string = new_string.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    return new_string;
  }

  return (
    <div className="header">
      <h1>Brian Cahill</h1>
      <h2>FEW 1.2 Final Assessment</h2>
      <p>Total Bands: {metal.length}</p>
      <h2>Metal Bands🤘</h2>
      <p>Total Fans: {totalFans()}</p>
      <p>Styles: </p>
    </div>
  );
}