import React from 'react'


const Song = ({currentSong,setOpenLibrary,openLibrary}) => {
  function Setopen(){
    setOpenLibrary(!openLibrary)
  }
    
    return (
        <div className="songContainer">
          <div className='songNavbar'>
             <p className='navbar-p'>Waves</p>
               <button onClick={Setopen} class="btn">Library</button>
               </div>
            
        <img src={currentSong.cover}></img>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
            
        </div>
    )
}

export default Song
