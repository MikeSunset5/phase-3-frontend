import React from "react";
import DogCard from "./DogCard";

function DogList({allData, delDog, changePrice}) {
  return (
    <ul className="cards">
      {allData.map((dogs)=><DogCard data={dogs} delData={delDog} editPriceData={changePrice} key={dogs.id}/>)}
    </ul>
  );
}

export default DogList;
