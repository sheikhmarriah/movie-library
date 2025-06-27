const APIKEY='';
const IMG_PATH='';
const SEARCHAPI="";

//API can be generated from TMDB website.

const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");

getMovies(APIKEY);

function getMovies(url){
     fetch(url).then(res => res.json())
     .then(function(data) {
          console.log(data.results);
          data.results.forEach(element => {
               const div_row = document.createElement('div');
               div_row.setAttribute('class', 'row');
               const div_column = document.createElement('div');
               div_column.setAttribute('class', 'column');
               const div_card = document.createElement('div');
               div_card.setAttribute('class', 'card');
               const img = document.createElement('img');
               img.setAttribute('class', 'thumbnail');
               img.setAttribute('id', 'img');
               const title = document.createElement('h3');
               title.setAttribute('class', 'title');
               const center = document.createElement('center');

               title.innerHTML = `${element.title}`;
               img.src = IMG_PATH + element.poster_path;

               center.appendChild(img);
               div_card.appendChild(center);
               div_card.appendChild(title);
               div_column.appendChild(div_card);
               div_row.appendChild(div_column);
               main.appendChild(div_row);
          });
     });
}

form.addEventListener("submit", (e) => {
     e.preventDefault();
     main.innerHTML = '';

     const searchItem = search.value;

     if (searchItem) {
          getMovies(SEARCHAPI + searchItem);
               search.value = "";
     }
});
