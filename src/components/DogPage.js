import React,{useState,useEffect} from "react";
import NewDogForm from "./NewDogForm";
import DogList from "./DogList";
import Search from "./Search";

function DogPage() {
  const [allDogData, setAllDogData]=useState([])
  const [searchData, setSearchData]=useState("")
  
  function handleSearch(e){
    setSearchData(e.target.value)
  }
  useEffect(()=>{
    fetch("http://localhost:9292/dogs")
    .then(res=>res.json())
    .then(data=>setAllDogData(data))

    },[])
  function updateHandle(newDog){
    setAllDogData([...allDogData, newDog]);
  }
  function deleteHandle(id){
    const delArray = allDogData.filter(del=>(del.id !== id))
    setAllDogData(delArray)
  }
  const newSearchArray = allDogData.filter(Dog=>{
    return Dog.name.toLowerCase().includes(searchData.toLocaleLowerCase());
  })
  function priceHandle(newPrice){
    const newPriceArray = allDogData.map((price) => {
      if(price.id === newPrice.id){
        return newPrice;
      }else{
        return price;
      }
    })
    setAllDogData(newPriceArray)
  }
  return (
    <main>
      <NewDogForm updateHandle={updateHandle} />
      <Search searchText={searchData} handleSearch={handleSearch}/>
      <DogList allData={newSearchArray} delDog={deleteHandle} changePrice={priceHandle} />
    </main>
  );
}

export default DogPage;
