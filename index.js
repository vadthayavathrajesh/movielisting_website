const cont =document.querySelector('.main1');
const cont2 =document.querySelector('.main2');

const one = function(data){
    const html =`
    <article class="count">
    <img class="count_img" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}"/>
    <div class="count_data">
        <h3 class="count_name">${data.original_title}</h3>
        
        
    </div>
    </article>` ;
    cont.insertAdjacentHTML('beforeend',
    html);
    cont.style.opacity = 1;
};

const two = function(data){
    const html =`
    <article class="count">
    <img class="count_img" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}"/>
    <div class="count_data">
        <h3 class="count_name">${data.original_title}</h3>
        
        
    </div>
    </article>` ;
    cont2.insertAdjacentHTML('beforeend',
    html);
    cont2.style.opacity = 1;
};

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDJjNzFkYWVhZjVjMGM3MTJkZWI2NWQyMmY0OTk4MSIsInN1YiI6IjY0N2Q3ODg0MGUyOWEyMmJkZmVjNWJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-m7zGSNeDX_jM-MKcWfzKR0f1GT3buPD_MUvvA60_GU'
    }
  };
  
  for(let i=0;i<4;i++)
  {
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => one(response.results[i]))
    .catch(err => console.error(err));
  }

  for(let i=0;i<4;i++)
  {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => two(response.results[i]))
  .catch(err => console.error(err));
  }

