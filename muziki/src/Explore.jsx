import React, { useState } from 'react';
import './Explore.css';

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // Define the data for artists, genres, top songs, and new releases
    const artists = ['Fally Ipupa', 'Koffi Olomide', 'Awilo Longomba', 'Papa Wemba'];
    const genres = ['Soukous', 'Rumba', 'Ndombolo', 'Afrobeat'];
    const topSongs = [ 'Liputa', 'Gorah', 'MH', 'Olandi'];
    const newReleases = ['Album 1', 'Album 2', 'Album 3', 'Album 4'];

    return (
        <div className="explore">
            <h1>Explore Music of Congo</h1>
            
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Search for artists, genres, songs..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select value={filter} onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Artists">Artists</option>
                    <option value="Genres">Genres</option>
                    <option value="Top Songs">Top Songs</option>
                    <option value="New Releases">New Releases</option>
                </select>
            </div>
            
            <section className="featured">
                <h2>Featured Artists</h2>
                <div className="cards">
                    {artists.map((artist, index) => (
                        <div className="card" key={index}>{artist}</div>
                    ))}
                </div>
            </section>
            
            <section className="genres">
                <h2>Genres</h2>
                <div className="cards">
                    {genres.map((genre, index) => (
                        <div className="card" key={index}>{genre}</div>
                    ))}
                </div>
            </section>
            
            <section className="top-songs">
                <h2>Top Songs</h2>
                <div className="cards">
                    {topSongs.map((song, index) => (
                        <div className="card" key={index}>{song}</div>
                    ))}
                </div>
            </section>
            
            <section className="new-releases">
                <h2>New Releases</h2>
                <div className="cards">
                    {newReleases.map((album, index) => (
                        <div className="card" key={index}>{album}</div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Explore;
