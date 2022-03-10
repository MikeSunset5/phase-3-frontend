import React, {useState} from "react";

function NewDogForm({updateHandle}) {
  const [newDogName, setNewDogName]=useState("")
  const [newDogUrl, setNewDogUrl]=useState("")
  const [newDogPrice, setNewDogPrice]=useState("")

  function nameHandle(e){
    setNewDogName(e.target.value)
  }
  function urlHandle(e){
    setNewDogUrl(e.target.value)
  }
  function priceHandle(e){
    setNewDogPrice(parseFloat(e.target.value))
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
        price: newDogPrice
      }),
    })
    .then(res=>res.json())
    .then(data=>updateHandle(data))
    
    setNewDogName("")
    setNewDogUrl("")
    setNewDogPrice("")
  }

  return (
    <div className="new-dog-form">
      <h2>New Dog</h2>
      <form onSubmit={addDogInfo}>
        <input 
          type="text"
          name="name"
          placeholder="Dog name"
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
          name="price"
          step="0.01"
          placeholder="Price"
          value={newDogPrice}
          onChange={priceHandle}
          />
        <button type="submit">Add Dog</button>
      </form>
    </div>
  );
}

export default NewDogForm;
