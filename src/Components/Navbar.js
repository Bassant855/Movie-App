import React,{useState,useRef} from 'react'
import {FaBars} from 'react-icons/fa'
import './NavStyle.css'




function  Navbar ({setMovies}) {
    const [query, setQuery] = useState('')
    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }



    const searchMovie = async(e)=>{
        e.preventDefault();
        console.log("Searching");
        try{
          const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
          const res= await fetch(url);
          const data= await res.json();
          console.log(data);
          setMovies(data.results);
        }
        catch(e){
          console.log(e);
        }
      }

      const handleSearch = (e) => {
        setQuery(e.target.value)
      }
  return (
    <header>
      <a href='/home' className='logo'>Movie App</a>
      <nav ref={navRef}>
          <input type='search' placeholder='Movie Search' value={query}
          onChange={handleSearch} />
          <button className="search-btn mx-3 " onClick={searchMovie}>Search</button>

      </nav>
      <button onClick={showNavbar} className='nav-btn nav-close-btn'>
          <FaBars/>
      </button>
  </header>

  )
}

export default Navbar

