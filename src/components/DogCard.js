import React, {useState} from "react";

function DogCard({data, delData, /*editPriceData*/}) {
  const [stock, setStock]=useState(true)
  // const [priceChange, setPriceChange]=useState("")
  
  // function handleEdit(e){
  //   setPriceChange(e.target.value)
  // }
  // ------------------------------------------------------------------------
  // function editPrice(e){
  //   e.preventDefault();
  //   fetch(`http://localhost:6001/dogs/${data.id}`,{
  //     method:"PATCH",
  //     headers:{
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       price: parseFloat(priceChange)
  //     }),
  //   })
  //   .then(res=>res.json())
  //   .then(data=>editPriceData(data))

  //   setPriceChange("")
  // }
  // --------------------------------------------------------------------------
  function inStock(){
    const changeStock = !stock;
    setStock(changeStock)
  }
  // ---------------------------------------------------------------------------
  function deleteItem(){
    fetch(`http://localhost:9292/dogs/${data.id}`,{
      method:"DELETE",
    })
    delData(data.id)
  }
  // ---------------------------------------------------------------------------
  return (

    <li className="card">
      <img src={data.image} alt={data.name} />
      <h4>{data.name}</h4>
      <p>Age: {data.age}</p>
      <p>Size: {data.size}</p>
      <br/>
      <p>Description: {data.description}</p>

      {/* <div >
      <input type="number" name="editPrice" step="0.01" placeholder="Edit Price" value={priceChange} onChange={handleEdit}/>
      <button onClick={editPrice}>Change</button>
      </div> */}
      {stock ? (
        <button onClick={inStock} className="primary">At Home</button>
      ) : (
        <button onClick={inStock}>Out for Walk</button>
      )}
      <button onClick={deleteItem}>Went Upstate</button>
      
    </li>
  );
}

export default DogCard;
