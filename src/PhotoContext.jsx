
import React, { createContext, useState, useEffect } from 'react';

export const PhotosContext = createContext();

export const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/photos.json')
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error al cargar las fotos:", error));
  }, []);

  const addFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(favoriteId => favoriteId !== id));
  };

  return (
    <PhotosContext.Provider value={{ photos, setPhotos, favorites, addFavorite, removeFavorite }}>
      {children}
    </PhotosContext.Provider>
  );
};
