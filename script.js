const names = document.getElementById('names'); 
const favorites = document.getElementById('worlds');
const buttonOne = document.getElementById('button1');
const buttonTwo = document.getElementById('button2');
const buttonThree = document.getElementById('button3');

const heroName = 'https://swapi.dev/api/people/';


buttonOne.addEventListener('click',showFavorites)
buttonTwo.addEventListener('click',loop)
buttonThree.addEventListener('click',showFetchData)

function loop()
{

  for (let step = 1; step <= 82; step++) 
  {
     getName(step);
   
  }
  
}



function showFetchData() 
{
  document.querySelector('.favorites').style.display = 'none';
  document.querySelector('.heros').style.display='block';
  document.querySelector('#button1').style.display='block';
  document.querySelector('#button2').style.display="block";
  document.querySelector('#button3').style.display='none';
}

function showFavorites() 
{
  document.querySelector('.favorites').style.display = 'block';
  document.querySelector('.heros').style.display='none';
  document.querySelector('#button1').style.display='none';
  document.querySelector('#button2').style.display="none";
  document.querySelector('#button3').style.display='block';
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

