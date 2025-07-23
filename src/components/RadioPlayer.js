import React, { useState } from 'react';

const PlayIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const RadioPlayer = ({ streamUrl = 'https://stream.zeno.fm/fpfjy5wxrpxuv', currentSong = 'Cargando...', artist = 'Desconocido' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(streamUrl));

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-700 to-orange-500 p-4 shadow-lg border-t border-red-800 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="p-3 rounded-full bg-white text-red-700 hover:bg-red-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <div>
            <p className="text-lg font-semibold text-white">{currentSong}</p>
            <p className="text-sm text-red-100">{artist}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white text-sm">En Vivo</span>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;