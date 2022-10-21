import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';
import MovieBox from './Components/MovieBox';
import Navbar from './Components/Navbar';


function App() {
  const [movies,setMovies] = useState([])
  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17";
  useEffect(() => {
      axios.get(API_URL)
      .then(res => {
          console.log(res.data)
          setMovies(res.data.results)
      })
      .catch(error => {
          console.log(error)
      })
  },[])
  return (
    <div className="App">
      <Navbar setMovies={setMovies}/>
      {movies.length > 0 ? (
        <div className='box'>
        {movies.map(movie => <MovieBox key={movie.id} {...movie}/>)}
        </div>
      ): <h2 className='not-found'>Sorry! No Movie Found</h2>}
      
    </div>
  );
}

export default App;
