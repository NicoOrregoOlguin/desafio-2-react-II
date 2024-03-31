import { useState, createContext } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Favorites from "./views/Favorites"
import Home from "./views/Home"

export const ContextApp = createContext()

const App = () => {
  const [liked, setLiked] = useState([])
  const [favorites, setFavorites] = useState([])

  return (
    <ContextApp.Provider value={{ liked, setLiked, favorites, setFavorites }}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </div>
    </ContextApp.Provider>
  )
}

export default App