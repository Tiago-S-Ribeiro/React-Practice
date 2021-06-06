import React, { useState, useEffect, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchMoviesHandler(){
    //'fetch' returns a Promise. a object which will eventually yield some data instead of immediatly doing that.
    fetch('https://swapi.dev/api/films/').then(response => {
      return response.json(); //response.json also returns a Promise
    }).then(data => {
      //setMovies(data.results); 
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      });
      setMovies(transformedMovies);
    });
  }

  //Simplification of the above, instead of .then blocks, it's used async/await statements
  const anotherFetchExampleUsingAsyncAwait = useCallback(async() =>{
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok){
        throw new Error('Error: ' + response.status);
      }

      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch(error) {
      setError(error.message);
      //setIsLoading(false); this could also be here.
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    anotherFetchExampleUsingAsyncAwait();
  }, [anotherFetchExampleUsingAsyncAwait]);

  let content = <p>No movies</p>;

  if(movies.length > 0){ content = <MoviesList movies={movies}/>; }
  if(error){ content = <p>{error}</p> }
  if(isLoading){ content = <p>Loading...</p> }

  return (
    <React.Fragment>
      <section>
        <button onClick={anotherFetchExampleUsingAsyncAwait}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies.</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
