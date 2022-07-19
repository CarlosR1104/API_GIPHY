import React from 'react'
import { useEffect, useState } from 'react';
import { GiphyFecht } from '@giphy/js-fetch-api'

export const Giphy = () => {
  const card = document.getElementById("card-grift");
  const key = "08QGeqiMazMNmunvZhmnr7TgVDB0BwQb";
  const url = "api.giphy.com/v1/gifs/trending"
  const giphy = new GiphyFecht(process.env.REACT_APP_GIPHY_KEY)
  const [cards, setCards] = useState([]);
  /*const limit = 5;
  const desplazamiento = 5;*/
    const createGrift = () =>{
        setCards(cards.target.value);
    }
    useEffect(() => {
      getGrift()
    }, [])
  function getGrift(){
    await pig
    /*fetch(url + key)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            createCard(element);
            console.log(element);
        });
    })*/
  }
  
  function createCard(element){
    const conteiner = document.createElement("div")
    const imgcard = document.createElement("img")
    const namecard = document.createElement("h2")
    conteiner.classList.add("table-grift");
    imgcard.classList.add("img");
    namecard.classList.add("card");
    namecard.textContent = element.name
    imgcard.setAttribute("src", element.image);
    imgcard.setAttribute("alt", element.name);
    conteiner.appendChild(namecard);
    conteiner.appendChild(imgcard);
    card.appendChild(conteiner);
    console.log(namecard)
}

  
  return (
    <div>
      <h2>Api Giphy</h2>
            <input type="url" id="input" onKeyUp={createGrift}/>
            <div id='card-grift' className='card-grift'></div>
    </div>
  )
}
