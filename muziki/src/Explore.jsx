import React, { useState } from 'react';
import './Explore.css';
import { data, artists, genres, topSongs, newReleases } from './songs';

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // Filter data based on search term and filter
    const filteredData = data.filter(song => {
        const matchesSearch = searchTerm === '' || 
            song.artist_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            song.song_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            song.genre.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = filter === 'All' ||
            (filter === 'Artists' && song.artist_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (filter === 'Genres' && song.genre.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (filter === 'Top Songs' && song.song_name.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesSearch && matchesFilter;
    });

    const renderCategory = () => {
        switch (selectedCategory) {
            case 'All':
                return filteredData.map((song, index) => (
                    <tr className='all-cards'>
                        <td key={index}>{song.artist_name}</td>
                        <td key={index}>{song.song_name}</td>
                        <td key={index}>{song.genre}</td>
                    </tr>
                ));
            case 'Artists':
                return artists.map((artist, index) => <div className="card" key={index}>{artist}</div>);
            case 'Genres':
                return genres.map((genre, index) => <div className="card" key={index}>{genre}</div>);
            case 'Top Songs':
                return topSongs.map((song, index) => <div className="card" key={index}>{song}</div>);
            case 'New Releases':
                return newReleases.map((album, index) => <div className="card" key={index}>{album}</div>);
            default:
                return filteredData.map((song, index) => (
                    
                    <tr className="all-cards">
                        <td>{song.artist_name}</td>
                        <td>{song.song_name}</td>
                        <td>{song.genre}</td>
                    </tr>
                    
                ));
        }
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
            </div>

            <div className="category-buttons">
                <button onClick={() => handleCategoryClick('All')}>All</button>
                <button onClick={() => handleCategoryClick('Artists')}>Artists</button>
                <button onClick={() => handleCategoryClick('Genres')}>Genres</button>
                <button onClick={() => handleCategoryClick('Top Songs')}>Top Songs</button>
                <button onClick={() => handleCategoryClick('New Releases')}>New Releases</button>
            </div>

            {selectedCategory === 'All' ? (
                <table className='table'>
                    <thead>
                        <tr className='header'>
                            <th>Artist</th>
                            <th>Song</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody className='all-cards'>
                        {renderCategory()}
                    </tbody>
                </table>
            ) : (
                <div className="cards">
                    {renderCategory()}
                </div>
            )}
        </div>
    );
};

export default Explore;
