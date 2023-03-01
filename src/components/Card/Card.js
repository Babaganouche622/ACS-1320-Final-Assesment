import React from 'react';
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
    <div className="flex flex-col pl-8 border-red-700 rounded-md shadow-lg shadow-red-700 animate-pulse hover:border hover:animate-none">
      <h3 className='text-4xl animate-none'>{band.band_name}</h3>
      <p>Origin: {band.origin}</p>
      <p>Fans: {toLocalString(band.fans)}</p>
      <p>Formed: {band.formed}</p>
      <p>Split: {band.split}</p>
        <p>Styles:</p>
      <ul className='pl-5'>
        {styles.map((style, key) =>(
          <li key={key}className='list-disc'>{style}</li>
        ))}
      </ul>
      {band.split !== "-" ? null : <Like />}
    </div>
  );
}