import React, {useState} from "react";

function NewDogForm({updateHandle}) {
  const [newDogName, setNewDogName]=useState("")
  const [newDogUrl, setNewDogUrl]=useState("")
  const [newDogAge, setNewDogAge]=useState("")
  const [newDogBreed, setNewDogBreed]=useState("")
  const [newDogSize, setNewDogSize]=useState("")


  function sizeHandle(e){
    setNewDogSize(e.target.value)
  }
  function nameHandle(e){
    setNewDogName(e.target.value)
  }
  function urlHandle(e){
    setNewDogUrl(e.target.value)
  }
  function breedHandle(e){
    setNewDogBreed(e.target.value)
  }
  function ageHandle(e){
    setNewDogAge(parseFloat(e.target.value))
  }
  function addDogInfo(e){
    e.preventDefault();
    fetch("http://localhost:9292/dogs",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newDogName,
        image: newDogUrl,
        breed: newDogBreed,
        Age: newDogAge
      }),
    })
    .then(res=>res.json())
    .then(data=>updateHandle(data))
    
    setNewDogName("")
    setNewDogUrl("")
    setNewDogAge("")
    setNewDogBreed("")
  }

    // t.string "size"
    // t.string "description"
    // t.integer "walk_time"

  return (
    <div className="new-dog-form">
      <h2>New Dog</h2>
      <form onSubmit={addDogInfo}>
        <lable>Select Size</lable>
        <select id="size" value={newDogSize} onChange={sizeHandle}>
          <option >select</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>          
        </select>
        <br/>
        <input 
          type="text"
          name="name"
          placeholder="Name"
          value={newDogName}
          onChange={nameHandle}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newDogUrl}
          onChange={urlHandle}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newDogAge}
          onChange={ageHandle}
          />
        <input 
          type="text"
          name="breed"
          placeholder="Breed"
          value={newDogBreed}
          onChange={breedHandle}
        />
        <button type="submit">Add Dog</button>
      </form>
    </div>
  );
}

export default NewDogForm;
