import React from "react";
import { useState } from "react/cjs/react.development";

function PlantCard({plant, handleDelete}) {

  const [plantStatus, setPlantStatus] = useState(true)
  const {id, name, image ="https://via.placeholder.com/400", price} = plant


  const handleStatus = () => {
    setPlantStatus(prevState => !prevState)
  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {plantStatus ? (
        <button onClick={handleStatus} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStatus}>Out of Stock</button>
      )}
      <button onClick={() => handleDelete(id)} style={{backgroundColor: 'orange'}}>Delete</button>
    </li>
  );
}

export default PlantCard;
