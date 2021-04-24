import React from 'react';


const LibraryItems = ({el,setCurrentSong}) => {
    function changeSong(){
        setCurrentSong(el)
    }
    return (
        <div onClick={changeSong} className="itemList">
           <img src={el.cover}/>
           <div>
           <h2>{el.name}</h2>
           <p>{el.artist}</p>
           </div>
        </div>
        
    )
}

export default LibraryItems