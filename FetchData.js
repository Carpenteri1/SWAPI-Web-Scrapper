 

  const url = 'https://swapi.dev/api/people/?page=';
  
  let pageNum = 1;
  let userInput = undefined;

  window.addEventListener('load', () => { 

  const buttonTwo = document.getElementById('fetchData');
  const buttonFour = document.getElementById('AddToFave');
  buttonFour.addEventListener('click',AddFavorite);
  buttonTwo.addEventListener('click',fetchingData);

})

async function fetchingData()
{
  heroRemoveFromDom();
  const options = 
  {
    method: 'GET'
  }
    for(pageNum;pageNum<=9;pageNum++)
    {
      const response = await fetch(url+pageNum,options);
      const heroData = await response.json();
      const listOfHeros = document.querySelector('.fetched')
      elements = heroData.results.map(heroToDomAdd)
      .forEach(element => {
        
          listOfHeros.appendChild(element);
        
      })
    }
}


function heroRemoveFromDom()
{
  listOfHeros = document.querySelector('.fetched')
  if(listOfHeros.firstChild != null)
  {
    listOfHeros.removeChild(listOfHeros.firstChild);
  }
    
}

  function heroToDomAdd(hero)
{
    listOfHeros = document.querySelector('.fetched')
    let content = document.createElement('p');
    content.id = "textElement";
    userInput = document.getElementById("SearchBar").value;

    if(hero.name == userInput)
    {
    //heading.innerText = "Found:";
    content.innerText = `Name: ${hero.name} \nHeight: ${hero.height}cm 
    Birth-Year: ${hero.birth_year} \nGender: ${hero.gender}`;
    listOfHeros.appendChild(content);
    return listOfHeros;
    }
}




function AddFavorite()
{
  listOfHeros = document.querySelector('.fetched');
  listOfFaves = document.querySelector('.favorites');

  if(listOfHeros != null)
  {
    let el = document.createElement('li');
    el.append(listOfHeros.firstChild);
    listOfFaves.append(el);
  }
}
