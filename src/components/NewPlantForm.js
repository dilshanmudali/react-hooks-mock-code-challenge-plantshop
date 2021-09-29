import {useState} from "react";

function NewPlantForm({handleAddPlant}) {

  const [plantform, setPlantForm] = useState({
    name : '',
    image: '',
    price: 0
  })

  const handleChange = (e) => {
    setPlantForm({
      ...plantform,
      [e.target.name]:e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    handleAddPlant(plantform)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={plantform.name} placeholder="Plant name" onChange={handleChange} required='true'/>
        <input type="text" name="image" value={plantform.image} placeholder="Image URL" onChange={handleChange} required='true'/>
        <input type="number" name="price" step="0.01" value={plantform.price} placeholder="Price" onChange={handleChange} required='true'/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
