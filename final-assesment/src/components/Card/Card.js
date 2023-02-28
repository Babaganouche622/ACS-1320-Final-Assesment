import React from 'react';
import "./Card.css";
import Like from "../Like/Like";

export default function Card({ band }) {
  const styles = band.style.split(",");
  return (
    <div className="card">
      <h3>{band.band_name}</h3>
      <p>Origin: {band.origin}</p>
      <p>Fans: {band.fans}</p>
      <p>Formed: {band.formed}</p>
      <p>Split: {band.split}</p>
        <p>Styles:</p>
      <ul>
        {styles.map((style, key) =>(
          <li key={key}>{style}</li>
        ))}
      </ul>
      {band.split !== "-" ? null : <Like />}
    </div>
  );
}