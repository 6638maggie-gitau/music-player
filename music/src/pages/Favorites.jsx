import React from 'react'

const Favorites = ({favorites}) => {
  return (
    <div className='min-h-screen bg-black text-white p-6'>
        <Nav FavoritesCount={favorites.length} />
        <h1 className='text-3xl font-bold'> ❤Favorite Songs</h1>

        {favorites.length ===0 ?(
            <p className='text-gray-400'>No favorite songs yet</p>
        ):(
            <div className='grid md:grid-cols-2 gap-4'>
                {favorites.map((songs) => (
                    <div
                        key={songs.id} 
                        classname='bg-gray-900 p-4 rounded-xl'>
                            <h2 className='text-2xl font-bold'>{songs.title}</h2>
                            <p className='text-gray-400'>{songs.artist}</p>
                    </div>

                ))}
            </div>
        )
    }
    </div>
  )
}

export default Favorites