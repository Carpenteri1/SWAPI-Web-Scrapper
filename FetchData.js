 

  const url = 'https://swapi.dev/api/people/?search=';
  let userInput = undefined;

  window.addEventListener('load', () => { 
  errorHandle();
})


function errorHandle()
{
  const buttonTwo = document.getElementById('fetchData');
  let lis = document.querySelector(".fetched");
      lis.addEventListener('click',function(e){
        AddFavorite(e.target.innerText);
        
        /*if(e.path != undefined)
        {//only works in chrome
          AddFavorite(e.path[0].innerText);
         }
        else if(e.originalTarget.innerText != undefined)
        {//only works in firefox
          AddFavorite(e.originalTarget.innerText);
        }else if(e.currentTarget.innerText != undefined)
        {
          alert("hey");
        }*/
    
      })
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


function AddFavorite(clicked)
{
  let listOfHeros = document.querySelector('.fetched');
  let userInput = document.getElementById("SearchBar").value;

  if(clicked != null)
  {
    if(!AlreadyInFaveList(clicked))
    {
    
      let el = document.createElement('li');
      let clickedValue = document.createTextNode(clicked);
      el.appendChild(clickedValue);
      let listOfFaves = document.querySelector('.faves');
      listOfFaves.appendChild(el);

    }else if(clicked === "")
    {
      heroRemoveFromDom();
      NoHeroFound("Cant add if there is no search result")
    }else
    {
      heroRemoveFromDom();
      NoHeroFound("Cant add "+clicked+" again!\n"+
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
    let child = listOfFaves.childNodes[i].innerText.split("\n").join(""); 
    let input = userInput.split("\n").join("");
     if(child === input)
     { 
       return true;
     }     
    }
   return false;
}
