 

  const url = 'https://swapi.dev/api/people/?search=';
  let userInput = undefined;

  window.addEventListener('load', () => { 
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


function AddFavorite(pointerValue)
{
  let value = pointerValue.split("\n").join("");
  let listOfHeros = document.querySelector('.fetched');
  if(value != null)
  {
    if(!AlreadyInFaveList(value))
    {
    
      let el = document.createElement('li');
      //let newValue = pointerValue.split('').Join(' ');
      let valueToEl = document.createTextNode(pointerValue);
      el.appendChild(valueToEl);
      let listOfFaves = document.querySelector('.faves');
      listOfFaves.appendChild(el);

    }else if(value === "")
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
    let child = listOfFaves.childNodes[i].innerText.split("\n").join(""); 
    //let input = userInput.split("\n").join("");
     if(child === pointerValue)
     { 
       return true;
     }     
    }
   return false;
}
