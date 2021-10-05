import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const Url_main = 'http://localhost:6001/plants'
console.log()

const PlantPage = ()  => {

  const [plantsData, setPlantsData] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSortBy] = useState('ABC')

  useEffect(() => {
    fetch(Url_main)
    .then(res => res.json())
    .then(data => setPlantsData(data))
  },[])

  const handleAddPlant = plant => {

    fetch(Url_main, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plant)
    })
    .then(res => res.json())
    .then(plant => {
      setPlantsData([
        ...plantsData, plant
      ])
    })
  }

  const handleUpdatePlant = (updatePlant) => {
    
    const updateArr = plantsData.map(plantObj => {
      if(updatePlant.id === plantObj.id){
        return {...updatePlant}
      }else{
        return plantObj
      }
    })

    setPlantsData(updateArr)
  }

  const handleDelete = (id) => {

    fetch(`${Url_main}/${id}`,{
      method: 'DELETE'
    })
    .then(() => {
      const deletePlant = plantsData.filter(plant => plant.id !== id)
      setPlantsData(deletePlant)
    })
  }

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch} setSortBy={setSortBy}/>
      <PlantList
      handleUpdatePlant={handleUpdatePlant} plantsData={plantsData} search={search} handleAddPlant={handleAddPlant} handleDelete={handleDelete}  sort={sort}/>
    </main>
  );
}

export default PlantPage;
