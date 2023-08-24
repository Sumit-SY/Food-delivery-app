import React from 'react';
import "./Type.css";

function Type(props) {
  console.log("props",props);
  return (
    <div className="filter-type-container">
      <div className="filter-type-image-container">
      <img 
      className="filter-type-image" src={props.image}
      alt='Filter image'/>
      </div>

      <p className="filter-type-text">{props.text}</p>
    </div>
  )
}

export default Type;