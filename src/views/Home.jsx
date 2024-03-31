import { useContext } from "react"
import { ContextApp } from "../App"
import Gallery from "../components/Gallery"
import Photos from "./photos.json"

const Home = () => {
  const { liked } = useContext(ContextApp)

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery photos={Photos.photos} />
    </div>
  )
}

export default Home