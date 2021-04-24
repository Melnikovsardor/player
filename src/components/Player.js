import React,{useState,useRef} from 'react';


const Player = ({currentSong,isPlaying,setIsplaying, setCurrentSong, arraySong}) => {

    const [time, setTime] = useState( {
        current: 0,
        duration: 0,


        })

    const audio = useRef(null)

    function handleClick(){
        audio.current.play()
        setIsplaying(!isPlaying)
        if(isPlaying == true) {
            audio.current.pause()
        }else{
            audio.current.play()
        }

    }


    function handleTime(e){
      let currentTime = Math.ceil(e.target.currentTime)
      let durationTime = Math.ceil(e.target.duration)
      setTime({...time, current: currentTime, duration: durationTime})
    
      
    }

    function skipSonghandler(){
    
        let indexSong = arraySong.findIndex(i => i.id === currentSong.id);
     
        setCurrentSong(arraySong[indexSong + 1])
    }

    // function skipSong() {
    //     let indexsong = arraySong.findIndex( i => i.id === currentSong.id )
    //     console.log(indexsong)
    //     if(indexsong == 5){
    //         arraySong[indexsong] = 0
    //     }else{
    //         setCurrentSong(arraySong[indexsong + 1])
    //     }
    // }


function dragHandler(e){
    console.log(e.target.value)
    audio.current.currentTime = e.target.value

}

function secondsToTime(e){
    var h = Math.floor(e / 3600).toString().padStart(2,'0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(e % 60).toString().padStart(2,'0');
    
    return m + ':' + s;
}


function skipSong(skip){
    let indexSong = arraySong.findIndex(i => i.id === currentSong.id);

    if(skip === "next"){
        setCurrentSong(arraySong[(indexSong + 1) % arraySong.length])
    }else if(skip === "prev"){
        setCurrentSong(arraySong[(indexSong -1 ) % arraySong.length])
    }

}

    return (
        <div>
             <div className="playerContainer">
                <p>{secondsToTime(time.current)}</p>
                <input type="range"
                onChange={dragHandler}
                min={0}
                max={time.duration}
                value ={time.current}
    
        
    
                
                />

                <p>{secondsToTime(time.duration)}</p>
                
            </div>
            
            <div className="Fass">
                
                <i class="fas fa-angle-left fa-3x" onClick={()=> skipSong("prev")} ></i>
                <i class="fas fa-angle-double-right fa-3x" onClick={handleClick}></i>
                <i class="fas fa-angle-right fa-3x" onClick={() => skipSong("next")}></i>
            </div> 
        
            <audio  
            onLoadedData={handleTime}  
            onTimeUpdate={handleTime}
            ref={audio}     
            src={currentSong.audio}>   </audio>
            
        </div>
    )
}

export default Player
