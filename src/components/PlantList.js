import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsData, search, handleDelete, sort}) {
  // console.log(plantsData)
  const renderPlants = plantsData
      .filter(plants => plants.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a,b) => {
          if(sort === 'ABC'){
            return a.name.localeCompare(b.name)
          }else if(sort === 'Price'){
            return b.price - a.price
          }else{
            return (a,b)
          }
        })
      .map(plant => 
            <PlantCard 
              plant = {plant}
              key = {plant.id}
              handleDelete = {handleDelete}
            />)

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
