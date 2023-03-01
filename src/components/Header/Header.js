import React from 'react';
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
    <div className='flex flex-col items-center'>
      <h1 className='text-6xl'>Brian Cahill</h1>
      <h2 className='text-2xl'>FEW 1.2 Final Assessment</h2>
      <h2 className='text-4xl pt-10'>Metal Bands🤘</h2>
      <p className='text-2xl'>Total Bands: {metal.length}</p>
      <p  className='text-2xl pb-5'>Total Fans: {totalFans()}</p>
    </div>
  );
}
