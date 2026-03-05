import React from 'react';
import PropTypes from 'prop-types';
import './SongCard.css';

const SongCard = ({ coverArt, title, artist, likes, downloads, comments }) => {
    return (
        <div className="song-card">
            <img src={coverArt} alt={`${title} cover art`} className="cover-art" />
            <div className="song-info">
                <h3 className="song-title">{title}</h3>
                <p className="song-artist">{artist}</p>
                <div className="song-stats">
                    <span className="likes">❤️ {likes} Likes</span>
                    <span className="downloads">⬇️ {downloads} Downloads</span>
                    <span className="comments">💬 {comments} Comments</span>
                </div>
                <button className="play-button">Play</button>
            </div>
        </div>
    );
};

SongCard.propTypes = {
    coverArt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
};

export default SongCard;