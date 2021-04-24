import React from 'react';
import LibraryItems from "./LibraryItems";





const Library = ({arraySong,setCurrentSong,openLibrary}) => {
    const data = arraySong.map(el=> {
        return(
            <LibraryItems setCurrentSong={setCurrentSong} el={el} name={el.name} artist={el.artist} cover={el.cover}/>
        )
    })

    return (
        <div className={` ${openLibrary === true ? "libraries" : "openLibrary"}`}>
            <h1>Library</h1>
            {data}
        
            
        </div>
    )
}
export default Library;
