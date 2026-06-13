import React, { useEffect, useRef, useState } from "react";

const MoodPlayer = ({ songs = [], favorites = [], toggleFavorite }) => {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when songs change
  useEffect(() => {
    if (songs.length > 0) {
      setCurrentIndex(0);
    }
  }, [songs]);


  // Early return AFTER all hooks
  if (!songs || songs.length === 0) {
    return (
      <div className="bg-gray-900 text-white p-6 rounded-xl mt-6">
        <h1 className="text-xl font-bold">No songs available</h1>
      </div>
    );
  }

  const currentSong = songs[currentIndex] || songs[0];

  console.log(JSON.stringify(currentSong, null, 2));
console.log("Audio File:", currentSong?.audio);

  const isFavorite = favorites.some(
    (song) => song.id === currentSong?.id
  );

  const playSong = () => {
    audioRef.current?.play();
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + songs.length) % songs.length
    );
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl mt-6">
      <h2 className="text-2xl font-bold">{currentSong.title}</h2>

      <p className="text-gray-400">
        {currentSong.artist || "Unknown Artist"}
      </p>

      <div className="flex gap-3 mt-4 items-center">
        <button
          onClick={prevSong}
          className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          ⏮
        </button>

        <button
          onClick={playSong}
          className="px-3 py-2 bg-green-600 rounded hover:bg-green-500"
        >
          ▶
        </button>

        <button
          onClick={nextSong}
          className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          ⏭
        </button>

        <button
          onClick={() => toggleFavorite(currentSong)}
          className="text-2xl"
        >
          {isFavorite ? "❤" : "🤍"}
        </button>
      </div>

     <audio
  key={currentSong.id}
  ref={audioRef}
  controls
  src={currentSong.audio} 
  className="w-full mt-4"
>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MoodPlayer;