import React, { useState } from 'react'
import{Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Nav from './Components/Nav'
import Favorites from './pages/Favorites'

const App = () => {
  const [favorites, setFavorites] =useState([])
  const toggleFavorite = (song) =>{
    const exists= favorites.find((s) => s.id === song.id);

    if(exists){
      setFavorites(
        favorites.filter((s) => s.id !==song.id)
      )
    }
    else{
      setFavorites([...favorites,song])
    }
  }
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home favorites={favorites}  toggleFavorite={toggleFavorite}/>} />
      <Route path='/favorites' element={<Favorites  favorites={favorites}/>} />
    </Routes>
    </>
  )
}

export default App