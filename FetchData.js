 

  const url = 'https://swapi.dev/api/people/?search=';
  const addToFaveUrl = 'https://swapi.dev/api/people/?page=';
  let userInput = undefined;
  let selectedFaves = ['Luke Skywalker','Yoda','Darth Vader','C-3PO','R2D2','Han Solo'];
  window.addEventListener('load', () => {
    fetchingDataToAutoAdd(); 
    MainFunction();
})


function MainFunction()
{
  const buttonTwo = document.getElementById('fetchData');

    try
    {
      targetInnerText();
      buttonTwo.addEventListener('click', fetchingData);
    }catch(e)
    {
      console.error(e);
    
    }finally
    {

    }
}

function targetInnerText()
{
  let lis = document.querySelector(".fetched");
      lis.addEventListener('click',function(e){
          AddFavorite(e.target.innerText);
      })
}

async function fetchingDataToAutoAdd()
{
  const options = 
    {
      method: 'GET'
    }
    for(pageNum = 1;pageNum<=9;pageNum++)
    {
        let listOfFaves = document.querySelector('.faves')
        const response = await fetch(addToFaveUrl+pageNum,options);
        const data = await response.json();
        data.results.forEach(element => {

            if(autoAddToDomFave(element) != null)
            {
              listOfFaves.append(autoAddToDomFave(element));
            }
      })
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
        let listOfFaves = document.querySelector('.faves')
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


function autoAddToDomFave(hero)
{
  let content = document.createElement('li');
    content.id = "textElement";
    content.innerText = `Name: ${hero.name} \nHeight: ${hero.height}cm 
      Birth-Year: ${hero.birth_year} \nGender: ${hero.gender}\n\n`;

  if(hero.name == selectedFaves[0])
    {
      autoAddToFave(content.innerText)
    }
    else if(hero.name == selectedFaves[1])
    {
      autoAddToFave(content.innerText)
    }
    else if(hero.name == selectedFaves[2])
    {
      autoAddToFave(content.innerText)
    }
    else if(hero.name == selectedFaves[3])
    {
      autoAddToFave(content.innerText)
    }
    else if(hero.name == selectedFaves[4])
    {
      autoAddToFave(content.innerText)
    }
    else if(hero.name == selectedFaves[5])
    {
      autoAddToFave(content.innerText)
    }
    else
    {
      return null;
    }
}


  function heroToDomAdd(hero)
{
    let content = document.createElement('li');
    content.id = "textElement";
    content.innerText = `Name: ${hero.name} \nHeight: ${hero.height}cm 
    Birth-Year: ${hero.birth_year} \nGender: ${hero.gender}\n\n`;
  
    return content;
}


function autoAddToFave(character)
{
   

    if(character != null) 
    {
      //let value = character.split(" ").join("");
      if(!AlreadyInFaveList(character))
      {
        let el = document.createElement('li');
        let valueToEl = document.createTextNode(character);
        el.appendChild(valueToEl);
        let listOfFaves = document.querySelector('.faves');
        listOfFaves.appendChild(el);
  
      }
    }
}

function AddFavorite(pointerValue)
{
  //let value = pointerValue.split("\n").join("");
  let listOfHeros = document.querySelector('.fetched');
  if(pointerValue != null)
  {
    if(!AlreadyInFaveList(pointerValue))
    {
    
      let el = document.createElement('li');
      let valueToEl = document.createTextNode(pointerValue);
      el.appendChild(valueToEl);
      let listOfFaves = document.querySelector('.faves');
      listOfFaves.appendChild(el);

    }else if(pointerValue === "")
    {
      heroRemoveFromDom();
      NoHeroFound("Cant add if there is no search result")
    }else
    {
      heroRemoveFromDom();
      NoHeroFound(pointerValue+"\n"+
        "Cant add\n already in favorites")
    }
  }
}

function AlreadyInFaveList(pointerValue)
{
  let listOfFaves = document.querySelector('.faves') 
  for(i = 0;i<listOfFaves.childNodes.length;i++)
   {
     if(listOfFaves.childNodes[i].innerText != undefined)
     {
      let child = listOfFaves.childNodes[i].innerText.split("\n").join("");
      let splitedChild = child.split(" ").join(""); 
      let input = pointerValue.split("\n").join("");
      let splitedInput = input.split(" ").join("")

         if(splitedChild == splitedInput)
         { 
          return true;
         }     
      }
  
    }
    return false;
}
