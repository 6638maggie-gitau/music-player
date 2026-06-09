import React from 'react'

const MoodSelector = ({setMood}) => {
  return (
    <div className='flex flex-wrap gap-3 mb-6'>
        <button onClick={() => setMood("sunset")} className='bg-yellow-500 px-4 py-2 rounded-lg'>🌅Sunset</button>
        <button onClick={() => setMood("laugh")} className='bg-pink-500 px-4 py-2 rounded-lg'>😂Laugh</button>
        <button onClick={() => setMood("dance")} className='bg-green-500 px-4 py-2 rounded-lg'>💃Dance</button>
        <button onClick={() => setMood("overthink")} className='bg-blue-500 px-4 py-2 rounded-lg'>🧠Overthink</button>
    </div>
  )
}

export default MoodSelector