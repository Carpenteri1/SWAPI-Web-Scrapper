 

  const url = 'https://swapi.dev/api/people/?page=';
  let pageNum = 1;
  window.addEventListener('load',async () => { 
      
   await fetchingData();
})

async function fetchingData()
{
  const options = 
  {
    method: 'GET'
  }

  const buttonTwo = document.getElementById('fetchData');
  buttonTwo.addEventListener('click', async () => {
    for(pageNum;pageNum<=9;pageNum++)
    {
      const response = await fetch(url+pageNum,options);
      const heroData = await response.json();
      let listOfHeros = document.querySelector('.fetched')
      let elements = heroData.results.map(heroToDom)
      .forEach(element => {
        listOfHeros.appendChild(element);
      }) 
    }
})
}

  function heroToDom(hero)
{
  let el = document.createElement('li');
  let heading = document.createElement('h3');
  heading.innerText = hero.name;
  el.appendChild(heading);

  let content = document.createElement('span');
  content.innerText = `Height: ${hero.height}cm 
  Birth-Year: ${hero.birth_year} \nGender: ${hero.gender}`;
  el.appendChild(content);
  return el;
}




function AddFavorite()
{
if(typeof names)
{
  let child = document.createElement("li");
  child.append(worlds.firstChild);
  favoriteHero.append(child);
}
if(typeof worlds)
{
  let child = document.createElement("li");
  child.append(names.ch);
  favoriteWorld.append(child)
}

}
