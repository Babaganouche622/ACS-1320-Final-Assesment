import React from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";
import metal from "../../data/metal.json";

export default function CardList() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="card-list">
      <input 
      type='text' 
      placeholder='Search...' 
      onChange={(e) => 
      {setSearchText(e.target.value)}}
      />
      {metal.filter(obj => obj.band_name.toLowerCase().includes(searchText.toLowerCase())).map((band, key) => (
        <Card key={key} band={band} />
      ))}
    </div>
)}