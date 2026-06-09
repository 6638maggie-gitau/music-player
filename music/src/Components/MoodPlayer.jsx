import React, { useEffect, useRef, useState } from 'react';

const MoodPlayer = ({ songs, favorites, toggleFavorite }) => {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSong = songs[currentIndex];

  const isFavorite =
    favorites?.some((s) => s.id === currentSong?.id);

  // Reset index when songs change
  useEffect(() => {
    setCurrentIndex(0);
  }, [songs]);

  // Reload audio when song changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [currentIndex]);

  const playSong = () => {
    audioRef.current?.play();
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl mt-6">
      <h2 className="text-2xl font-bold">{currentSong.title}</h2>
      <p className="text-gray-400">{currentSong.artist}</p>

      <div className="flex gap-3 mt-4 items-center">
        <button onClick={prevSong}>⏮</button>

        <button onClick={playSong}>▶</button>

        <button onClick={nextSong}>⏭</button>

        <button
          onClick={() => toggleFavorite(currentSong)}
          className="text-2xl"
        >
          {isFavorite ? "❤" : "🤍"}
        </button>
      </div>

      <audio
        ref={audioRef}
        src={currentSong.audio}
      />
    </div>
  );
};

export default MoodPlayer;