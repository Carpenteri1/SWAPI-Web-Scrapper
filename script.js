const ul = document.getElementById('authors'); 
const url = 'https://swapi.dev/api/people/1/';

fetch(url)
.then(resp => resp.json())
.then(function(data)
{
  console.log(data.name);
  //let child = document.createElement("li");
  child = data.name;
  ul.append(child);
append(parent)
}).catch(function(error){
  console.log(error);
})