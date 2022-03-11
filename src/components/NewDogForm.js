import React, {useState} from "react";

function NewDogForm({updateHandle}) {
  const [newDogName, setNewDogName]=useState("")
  const [newDogUrl, setNewDogUrl]=useState("")
  const [newDogAge, setNewDogAge]=useState("")
  const [newDogBreed, setNewDogBreed]=useState("")
  const [newDogSize, setNewDogSize]=useState("")
  const [newDogDescription, setNewDogDescription]=useState("")


  function descriptionHandle(e){
    setNewDogDescription(e.target.value)
  }  
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
        age: newDogAge,
        breed: newDogBreed,
        size: newDogSize,
        description: newDogDescription,
        walk_time: true,
        image: newDogUrl,    
      }),
    })
    .then(res=>res.json())
    .then(data=>updateHandle(data))
    
    setNewDogName("")
    setNewDogUrl("")
    setNewDogAge("")
    setNewDogBreed("")
    setNewDogSize("")
    setNewDogDescription("")
  }

    // t.string "size"
    
    // t.integer "walk_time"

  return (
    <div className="new-dog-form">
      <h2>New Dog</h2>
      <form onSubmit={addDogInfo}>
        <div id="select">
        <select id="size" value={newDogSize} onChange={sizeHandle}>
          <option >Select Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>          
        </select>
        </div>
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
        <input 
          type="text"
          name="description"
          placeholder="Description"
          value={newDogDescription}
          onChange={descriptionHandle}
        />
        <button type="submit">Add Dog</button>
      </form>
    </div>
  );
}

export default NewDogForm;
