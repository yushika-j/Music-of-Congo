import React, { useState } from 'react';
import './Explore.css';
import { data } from './songs';

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
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

            <table>
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th>Song</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((song, index) => (
                        <tr key={index}>
                            <td>{song.artist_name}</td>
                            <td>{song.song_name}</td>
                            <td>{song.genre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



            {
                /* <section className="featured">
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
            </section> */
        }
            

export default Explore;
