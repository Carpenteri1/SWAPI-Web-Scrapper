
window.addEventListener('load', () => {
  
    const favorites = document.getElementById('worlds');
    const buttonOne = document.getElementById('showFave');
    const buttonTwo = document.getElementById('fetchData');
    const buttonThree = document.getElementById('backToFetch');
    showFetchData();

    buttonOne.addEventListener('click',showFavorites);
    buttonThree.addEventListener('click',showFetchData);
});

function showFetchData() 
{
  document.querySelector('.favorites').style.display = 'none';
  document.querySelector('.heros').style.display='block';
  document.querySelector('#showFave').style.display='inline';
  document.querySelector('#fetchData').style.display="inline";
  document.querySelector('#backToFetch').style.display='none';
  document.querySelector('#SearchBar').style.display='inline';
  document.querySelector('.label').style.display ="block";
  document.querySelector('header .FaveTitle').style.display='none';
  document.querySelector('header .fetchTitle').style.display='block';
}

function showFavorites() 
{
  document.querySelector('.label').style.display ="none";
  document.querySelector('.favorites').style.display = 'block';
  document.querySelector('.heros').style.display='none';
  document.querySelector('#showFave').style.display='none';
  document.querySelector('#fetchData').style.display="none";
  document.querySelector('#backToFetch').style.display='inline';
  document.querySelector('#SearchBar').style.display='none';
  document.querySelector('#AddToFave').style.display='none';
  document.querySelector('.FaveTitle').style.display='block';
  document.querySelector('.fetchTitle').style.display='none';
}



