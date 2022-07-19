import React from 'react'
import { useEffect, useState } from 'react';

export const Giphy = () => {
  const card = document.getElementById("card-grift");
  const key = "08QGeqiMazMNmunvZhmnr7TgVDB0BwQb";
  const url = "https://api.giphy.com/v1/gifs/trending?api_key=08QGeqiMazMNmunvZhmnr7TgVDB0BwQb&limit=10&rating=g";
  const search = "https://api.giphy.com/v1/gifs/search?api_key='+api_key+'&q='+event.target.value+'&limit=10&offset=0&rating=g&lang=en";
  const [cards, setCards] = useState(false);

  /*const limit = 5;
  const desplazamiento = 5;*/
  const createGrift = () =>{
      setCards(!cards);
  }

  useEffect(() => {
    
      if (cards == true) {
        searchGif()
      }else{
        getGrift()
        createGrift()
      }
      
  }, [])

  const searchGif = () => {
    document.getElementById("card-grift").innerHTML = "";
    console.log()
    fetch('https://api.giphy.com/v1/gifs/search?q='+document.getElementById("input").value+ "&api_key="+key+'&limit=10')
    .then(response => response.json())
    .then(data => {
        data.data.map(element => {
            createCard(element.images.original.url);
            console.log(element);
        });
    })
  }

  function getGrift(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.data.map(element => {
            createCard(element.images.original.url);
            console.log(element);
        });
    })
  }
  
  function createCard(element){
    const conteiner = document.createElement("div")
    const imgcard = document.createElement("img")
    const namecard = document.createElement("h2")
    conteiner.classList.add("table-grift");
    imgcard.classList.add("img");
    namecard.classList.add("card");
    imgcard.setAttribute("src", element);
    conteiner.appendChild(imgcard);
    document.getElementById("card-grift").appendChild(conteiner)
}

  
  return (
    <div>
      <h2>Api Giphy</h2>
            <input type="url" id="input" onKeyDown={createGrift}/>
            <div id='card-grift' className='card-grift'></div>
    </div>
  )
}
