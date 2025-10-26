import React, { useState } from 'react';
import SoundCloud from '@gorangajic/react-soundcloud-widget';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  // SoundCloud tracks - your music collection
  const tracks = [
    {
      title: "Daniel Caesar - Creep",
      artist: "Chinox1",
      soundcloudUrl: "https://soundcloud.com/chinox1/daniel-caesar-creep",
      duration: "3:45"
    },
    {
      title: "Building the Future",
      artist: "Jinteng Guo", 
      soundcloudUrl: "https://soundcloud.com/sylvanesso/coffee", // Add your own tracks here
      duration: "4:12"
    },
    {
      title: "Code & Coffee",
      artist: "Jinteng Guo", 
      soundcloudUrl: "https://soundcloud.com/sylvanesso/coffee", // Add your own tracks here
      duration: "3:28"
    }
  ];

  const currentSong = tracks[currentTrack];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextIndex = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextIndex);
  };

  const prevTrack = () => {
    const prevIndex = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    setCurrentTrack(prevIndex);
  };

  const handleSoundCloudPlay = () => {
    setIsPlaying(true);
  };

  const handleSoundCloudPause = () => {
    setIsPlaying(false);
  };

  const handleSoundCloudEnd = () => {
    nextTrack();
  };

  return (
    <div className="music-player-container">
      <div className="music-player">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image">
            <img src="/me_p1.jpg" alt="Jinteng Guo" />
          </div>
          <div className="profile-info">
            <div className="profile-name">Jinteng Guo</div>
            <div className="profile-titles">
              <span className="title-tag">Entrepreneur</span>
              <span className="title-tag">Full Stack Developer</span>
            </div>
          </div>
        </div>

        {/* Music Player Controls */}
        <div className="music-controls">
          <div className="now-playing-label">NOW PLAYING</div>
          <div className="track-info">
            <div className="track-title">{currentSong.title}</div>
            <div className="track-artist">{currentSong.artist}</div>
          </div>
          <div className="player-controls">
            <button className="control-btn prev-btn" onClick={prevTrack} title="Previous">
              ⏮
            </button>
            <button className="control-btn play-btn" onClick={togglePlay}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className="control-btn next-btn" onClick={nextTrack} title="Next">
              ⏭
            </button>
          </div>
        </div>

        {/* SoundCloud Widget */}
        <div className="soundcloud-widget">
          <SoundCloud
            url={currentSong.soundcloudUrl}
            opts={{
              auto_play: false,
              visual: false,
              show_artwork: false,
              show_playcount: false,
              show_user: false,
              color: '00e5ff',
              theme_color: '00e5ff'
            }}
            onPlay={handleSoundCloudPlay}
            onPause={handleSoundCloudPause}
            onEnd={handleSoundCloudEnd}
          />
        </div>

        {/* Contact Button */}
        <button 
          className="contact-me-btn"
          onClick={() => window.open('mailto:jg6902@stern.nyu.edu')}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
