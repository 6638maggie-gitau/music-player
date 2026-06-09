import { Link } from "react-router-dom"

const Nav = ({favoritesCount}) => {
  return (
    <div className="flex items-center justify-between bg-gray-900 p-4 rounded-xl mb-6">
      <div className="flex items-center gap-3">
        <img src="https://i.pravatar.cc/40" alt="profile" 
        className='w-12 h-12 rounded-full'/>
        <h1 className="text-3xl font-bold text-white">MoodBeat</h1>
      </div>

      <div className="flex items-center gap-6">
        <Link to='/' className="text-white hover:text-yellow-400">Home</Link>
        <Link to='/' className="text-white hover:text-pink-400">❤Favorites({favoritesCount})</Link>
      </div>
    </div>
  )
}
{}
export default Nav