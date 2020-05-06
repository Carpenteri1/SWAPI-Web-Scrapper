const names = document.getElementById('names'); 
const worlds = document.getElementById('worlds');
const favoriteHero = document.querySelector('#faveHero');
const favoriteWorld = document.querySelector('#faveWorld');

const heroName = 'https://swapi.dev/api/people/';
const heroWorld = 'https://swapi.dev/api/planets/';


for (let step = 1; step <= 82; step++) 
{
   getName(step);
   getPlanets(step); 
 
}

function getName(index)
{
  fetch(heroName+index)
  .then(resp => resp.json())
  .then(function(data)
  {  

    if(data.name != undefined)
    {
      let childOfNames = document.createElement("li");
      childOfNames.append(data.name);
      names.append(childOfNames);
    }
  }).catch(function(error){
    console.log(error);
  })
  
}

function getPlanets(index)
{
  fetch(heroWorld+index)
  .then(resp => resp.json())
  .then(function(data)
  { 
    console.log(data)
    if(data.name != undefined)
    {
      let childOfWorld = document.createElement("li");
      childOfWorld.append(data.name);
      worlds.append(childOfWorld);
    }
  }).catch(function(error){
    console.log(error);
  })
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

names.addEventListener('click',AddFavorite)
worlds.addEventListener('click',AddFavorite)

