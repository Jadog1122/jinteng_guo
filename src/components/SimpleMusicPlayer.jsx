import React, { useState } from 'react';
import './MusicPlayer.css';

const SimpleMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

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
      soundcloudUrl: "https://soundcloud.com/sylvanesso/coffee",
      duration: "4:12"
    },
    {
      title: "Code & Coffee",
      artist: "Jinteng Guo", 
      soundcloudUrl: "https://soundcloud.com/sylvanesso/coffee",
      duration: "3:28"
    }
  ];

  const currentSong = tracks[currentTrack];

  // Convert SoundCloud URL to embed URL
  const getSoundCloudEmbedUrl = (url) => {
    // Use SoundCloud's standard embed format
    const encodedUrl = encodeURIComponent(url);
    return `https://w.soundcloud.com/player/?url=${encodedUrl}&color=%2300e5ff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextIndex = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextIndex);
    setIsPlaying(false);
  };

  const prevTrack = () => {
    const prevIndex = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    setCurrentTrack(prevIndex);
    setIsPlaying(false);
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
            <button className="control-btn next-btn" onClick={nextTrack} title="Next">
              ⏭
            </button>
          </div>
        </div>

        {/* SoundCloud Widget */}
        <div className="soundcloud-widget">
          <iframe
            width="100%"
            height="120"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title={`${currentSong.title} - ${currentSong.artist}`}
            src={getSoundCloudEmbedUrl(currentSong.soundcloudUrl)}
          />
        </div>

        {/* Contact Button */}
        {/* <button 
          className="contact-me-btn"
          onClick={() => window.open('mailto:jg6902@stern.nyu.edu')}
        >
          Contact Me
        </button> */}
      </div>
    </div>
  );
};

export default SimpleMusicPlayer;
