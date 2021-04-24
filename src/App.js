import React , {useState} from 'react'
import "./styles/app.scss"
import Song from "./components/Song"
import Player from "./components/Player"
import data from './data'
import Library from "./components/Library"





const App = () => {
  const [arraySong,setArraySong] = useState(data())
  const [currentSong,setCurrentSong] = useState(arraySong[0])
  const [isPlaying, setIsplaying] = useState(false)
  const [openLibrary, setOpenLibrary] = useState(false)

  return (
    <div>
   <Library
       openLibrary={openLibrary}
       arraySong={arraySong}
       setCurrentSong={setCurrentSong}
       />
       

    <Song 
       openLibrary={openLibrary}
       setOpenLibrary={setOpenLibrary}
       currentSong={currentSong}
      />

     <Player 
       currentSong={currentSong}
       setIsplaying={setIsplaying}
       isPlaying={isPlaying}
       setCurrentSong={setCurrentSong}
       arraySong={arraySong}
     />

     <Library openLibrary={openLibrary} setCurrentSong={setCurrentSong} arraySong={arraySong}/>

    </div>
  )
}

export default App
