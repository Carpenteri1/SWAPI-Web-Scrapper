
  const url = 'https://swapi.dev/api/people/';
  window.addEventListener('load', () => { 
  fetchingData();
})

async function fetchingData()
{

  const options = 
  {
    method: 'GET'
  }

  let page ='?page=';
  let pageNum = 1;

  const buttonTwo = document.getElementById('fetchData');
  buttonTwo.addEventListener('click', async () => {
    const response = await fetch(url+page+pageNum,options);
    const heroData = await response.json();
    
    let listOfHeros = document.querySelector('.fetched')
    let test = heroData.results.map(heroToDom)
    .forEach(element => {
      listOfHeros.appendChild(element);
    })
})
  if(pageNum < 2)
  {
    pageNum++;
    fetchingData;
  }
}


function heroToDom(hero)
{
 
  let el = document.createElement('li');
  let heading = document.createElement('h3');
  heading.innerText = hero.name;
  el.appendChild(heading);

  let content = document.createElement('span');
  content.innerText = `Height: ${hero.height} 
  Birth: ${hero.birth_year} \nGender: ${hero.gender}`;
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
