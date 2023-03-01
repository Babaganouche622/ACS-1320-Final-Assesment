import React from "react";
import { useState } from "react";
import Card from "../Card/Card";
import metal from "../../data/metal.json";

export default function CardList() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="">
      <input 
      className='border border-fuchsia-700 m-auto pb-5 items-center flex flex-col w-2/5 h-10 bg-orange-800 text-red-600 rounded-md'
      type='text' 
      placeholder='Search...' 
      onChange={(e) => 
      {setSearchText(e.target.value)}}
      />
      <div className="grid gap-4 grid-auto-fit mt-5">
      {metal.filter(obj => obj.band_name.toLowerCase().includes(searchText.toLowerCase())).map((band, key) => (
        <Card key={key} band={band} />
      ))}
      </div>
    </div>
)}