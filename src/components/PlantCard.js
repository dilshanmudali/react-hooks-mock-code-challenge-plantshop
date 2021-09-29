import React from "react";
import { useState } from "react/cjs/react.development";

function PlantCard({plant, handleDelete, handleUpdatePlant}) {

  const [plantStatus, setPlantStatus] = useState(true)
  const [showBidForm, setBidForm] = useState(null)
  const [newBid, setNewBid] = useState('')

  const {id, name, image ="https://via.placeholder.com/400", price} = plant


  const handleStatus = () => {
    setPlantStatus(prevState => !prevState)
  }

  const handleBidForm = () => {
    setBidForm(prevState => !prevState)
  }

  const handleSubmitBid = (e) => {
    e.preventDefault()

    if(newBid < price){
      alert('please input a higher bid than current bid')
    }else{
      fetch(`http://localhost:3000/plants/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({price:newBid})
    })
    .then(res => res.json())
    .then(updateData => handleUpdatePlant(updateData))
    }   
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Current Bid: ${price}</p>
      {plantStatus ? (
        <button onClick={handleStatus} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStatus}>Out of Stock</button>
      )}
      <button onClick={() => handleDelete(id)} style={{backgroundColor: 'orange'}}>Delete</button>
      <button onClick = {handleBidForm}>{showBidForm ? "Cancel" : "Add Bid"}</button>
      {showBidForm ?
      (<form onSubmit={handleSubmitBid}>
        <input onChange= {(e) => setNewBid(e.target.value)} type="number" name="price" step={`${price}`} value={newBid} placeholder="Bid"/>
        <button type="submit">Set Bid</button>
      </form>) : null}
    </li>
  );
}

export default PlantCard;
