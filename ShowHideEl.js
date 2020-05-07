
window.addEventListener('load', () => {
    const favorites = document.getElementById('worlds');
    const buttonOne = document.getElementById('showFave');
    const buttonTwo = document.getElementById('fetchData');
    const buttonThree = document.getElementById('backToFetch');

    showFavorites();
    showFetchData();
    buttonOne.addEventListener('click',showFavorites);
    buttonThree.addEventListener('click',showFetchData);


});

function showFetchData() 
{
  document.querySelector('.favorites').style.display = 'none';
  document.querySelector('.heros').style.display='block';
  document.querySelector('#showFave').style.display='block';
  document.querySelector('#fetchData').style.display="block";
  document.querySelector('#backToFetch').style.display='none';
}

function showFavorites() 
{
  document.querySelector('.favorites').style.display = 'block';
  document.querySelector('.heros').style.display='none';
  document.querySelector('#showFave').style.display='none';
  document.querySelector('#fetchData').style.display="none";
  document.querySelector('#backToFetch').style.display='block';
}



