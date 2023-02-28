import React from 'react';
import "./Card.css";
import Like from "../Like/Like";

export default function Card({ band }) {
  const styles = band.style.split(",");
  function toLocalString(fans) {
    let new_string = (fans * 1000).toString();
    if (new_string.length > 5) {
      new_string = new_string.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    return new_string;
  }
  
  return (
    <div className="card">
      <h3>{band.band_name}</h3>
      <p>Origin: {band.origin}</p>
      <p>Fans: {toLocalString(band.fans)}</p>
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