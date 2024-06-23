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
                    <div className="card">Artist 1</div>
                    <div className="card">Artist 2</div>
                    <div className="card">Artist 3</div>
                </div>
            </section>
            
            <section className="genres">
                <h2>Genres</h2>
                <div className="cards">
                    <div className="card">Soukous</div>
                    <div className="card">Rumba</div>
                    <div className="card">Ndombolo</div>
                </div>
            </section>
            
            <section className="top-songs">
                <h2>Top Songs</h2>
                <div className="cards">
                    <div className="card">Song 1</div>
                    <div className="card">Song 2</div>
                    <div className="card">Song 3</div>
                </div>
            </section>
            
            <section className="new-releases">
                <h2>New Releases</h2>
                <div className="cards">
                    <div className="card">Album 1</div>
                    <div className="card">Album 2</div>
                    <div className="card">Album 3</div>
                </div>
            </section>
        </div>
    );
};

export default Explore;
