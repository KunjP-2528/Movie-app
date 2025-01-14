import React, { useState, useEffect, useRef } from 'react';
import MovieCard from '../component/MovieCard';

const Favorite: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const favoritesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const scrollLeft = () => {
    if (favoritesContainerRef.current) {
      favoritesContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (favoritesContainerRef.current) {
      favoritesContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="favorite">
      <h1>Your Favorites</h1>
      <div className="movies-container" ref={favoritesContainerRef}>
        {favorites.length > 0 ? (
          favorites.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} mode="favorites" />
          ))
        ) : (
          <p>No favorite movies added yet!</p>
        )}
      </div>
      {favorites.length > 0 && (
        <>
          <button className="slider-arrow left" onClick={scrollLeft}>←</button>
          <button className="slider-arrow right" onClick={scrollRight}>→</button>
        </>
      )}
    </div>
  );
};

export default Favorite;
