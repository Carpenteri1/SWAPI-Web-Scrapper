 

  const url = 'https://swapi.dev/api/people/?search=';
  let userInput = undefined;

  window.addEventListener('load', () => { 
  errorHandle();
})


function errorHandle()
{
  const buttonTwo = document.getElementById('fetchData');
  const buttonFour = document.getElementById('AddToFave');
    try
    {
      buttonTwo.addEventListener('click', fetchingData);
    }catch(e)
    {
      console.error(e);

    }finally
    {

    }
}

async function fetchingData()
{
  heroRemoveFromDom();
  let userInput = document.getElementById("SearchBar").value;
  console.log(userInput);
  if(userInput != "")
  {
    const options = 
    {
      method: 'GET'
    }
     
        let listOfHeros = document.querySelector('.fetched')
        const response = await fetch(url+userInput,options);
        const data = await response.json();
        data.results.forEach(element => {
        listOfHeros.append(heroToDomAdd(element));
      })
  }else
  {
    NoHeroFound("Search Field is Empty\nNo Hero Was Found");
  }
}


function heroRemoveFromDom()
{
  let listOfHeros = document.querySelector('.fetched')
  while (listOfHeros.lastElementChild) {
    listOfHeros.removeChild(listOfHeros.lastElementChild);
  }
 
  
}


function NoHeroFound(message)
{
  let listOfHeros = document.querySelector('.fetched')
  let content = document.createElement('p');
  content.id = "textElementError";
  content.innerText =`${message}`;
  listOfHeros.appendChild(content);
}


  function heroToDomAdd(hero)
{
    let content = document.createElement('li');
    content.id = "textElement";
    content.innerText = `Name: ${hero.name} \nHeight: ${hero.height}cm 
    Birth-Year: ${hero.birth_year} \nGender: ${hero.gender}\n\n`;
    return content;
 
}


function AddFavorite()
{
  let listOfHeros = document.querySelector('.fetched');
  let userInput = document.getElementById("SearchBar").value;

  if(userInput != null)
  {
    if(AlreadyInFaveList(userInput)==false)
    {
      let el = document.createElement('li');
      el.appendChild(listOfHeros.firstChild);
      let listOfFaves = document.querySelector('.faves').appendChild(el);
    }else if(userInput === "")
    {
      heroRemoveFromDom();
      NoHeroFound("Cant add if there is no search result")
    }else
    {
      heroRemoveFromDom();
      NoHeroFound("Cant add "+userInput+" again!\n"+
        "already in favorites")
    }
  }
}

function AlreadyInFaveList(userInput)
{
  let listOfFaves = document.querySelector('.faves') 
  let nameExcist = false;
  for(i = 0;i<listOfFaves.childNodes.length;i++)
   {
     if(listOfFaves.childNodes[i].textContent.includes("Name: "+userInput))
     { 
        nameExcist = true;
     }     
    }
   return nameExcist;
  
    
}
