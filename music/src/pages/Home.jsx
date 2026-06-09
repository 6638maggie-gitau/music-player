import React from 'react'
import { useState } from 'react'
import moodsongs from '../data/moodsongs'
import Nav from '../Components/Nav'
import MoodSelector from '../Components/MoodSelector'
import MoodPlayer from '../Components/MoodPlayer'

const Home = () => {
  const [mood, setMood] = useState("sunset");
  const [favorites, setFavorites] =useState([])
  const toggleFavorite = (song) =>{
    const exists = favorites.find((s) => s.id === song.id)

    if(exists){
      setFavorites(favorites.filter((s) => s.id !==song.id));
    }
    else{
      setFavorites([...favorites, song]);
    };
  }

  return (
    <div className='min-h-screen bg-black text-white p-6'> 
      <Nav favoritesCount= {favorites.length} />

      <div className='mb-8'>
        <h2 className='text-3xl font-bold mb-2'>Welcome to MoodBeat</h2>
        <p className='text-gray-400'>Choose your mood and enjoy the vibes</p>
      </div>

      <MoodSelector setMood={setMood} />
      <MoodPlayer songs={moodsongs[mood]}
      favorites={favorites} 
      toggleFavorite={toggleFavorite} />
    </div>
  )
}

export default Home