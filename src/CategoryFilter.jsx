import React from 'react';

const CategoryFilter = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="category-filter">
      <h3>Filter by Genre</h3>
      <select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;