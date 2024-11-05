import React, { useState, useRef, lazy } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  thumbnailUrl?: string;
  videoUrl: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  thumbnailUrl = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  videoUrl 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden group">
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${!isVideoLoaded ? 'hidden' : ''}`}
        poster={thumbnailUrl}
        playsInline
        muted={isMuted}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={handleVideoLoad}
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isVideoLoaded && (
        <img 
          src={thumbnailUrl} 
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      )}

      {/* Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <button
            onClick={handlePlay}
            className="w-20 h-20 rounded-full bg-blue-600/90 hover:bg-blue-500 flex items-center justify-center transition-all transform hover:scale-110 shadow-lg shadow-black/50"
            aria-label="Play video"
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </button>
        </div>
      )}

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between">
          {isPlaying ? (
            <button
              onClick={() => videoRef.current?.pause()}
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Pause"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handlePlay}
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Play"
            >
              <Play className="w-6 h-6" />
            </button>
          )}

          <button
            onClick={toggleMute}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};