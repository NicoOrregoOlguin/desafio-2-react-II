import { useContext } from "react";
import { ContextApp } from "../App"; 
import Gallery from "../components/Gallery";
import Photos from "./photos.json";

const Favorites = () => {
  const { favorites } = useContext(ContextApp);

  const favoritePhotos = Photos.photos.filter(photo => favorites.includes(photo.id));

  return (
    <div>
      <h1>Fotos Favoritas</h1>
      <Gallery photos={favoritePhotos} />
    </div>
  );
};

export default Favorites;
