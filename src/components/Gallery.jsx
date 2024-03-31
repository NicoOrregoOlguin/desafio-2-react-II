import { useContext } from "react";
import { ContextApp } from "../App";
import IconHeart from "./IconHeart";
import "./Gallery.css";

const Gallery = ({ photos }) => {
  const { liked, setLiked, favorites, setFavorites } = useContext(ContextApp);

  const toggleFavorite = (id) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((itemId) => itemId !== id)
        : [...currentFavorites, id]
    );
  };

  const toggleLiked = (id) => {
    setLiked((currentLiked) =>
      currentLiked.includes(id)
        ? currentLiked.filter((itemId) => itemId !== id)
        : [...currentLiked, id]
    );
  };

  const handleItemClick = (id) => {
    toggleFavorite(id);
    toggleLiked(id);
  };

  if (!Array.isArray(photos)) {
    return <p>No se han detectado fotos</p>;
  }

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <div key={photo.id} className="gallery-item">
          {photo.src && (
            <img
              src={photo.src.tiny}
              alt={photo.alt}
              onClick={() => handleItemClick(photo.id)}
            />
          )}
          <div className="icon-heart-container" onClick={() => handleItemClick(photo.id)}>
            <IconHeart filled={liked.includes(photo.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
