import React, {useState, useRef, useEffect} from 'react'
import './WordCard.css'

function WordCard({word}) {

  const [showEng, setShowEng] = useState(false)
  const audioRef = useRef()

  useEffect(() => {
    try {
      audioRef.current.load()
    } catch(e) {
      console.log(audioRef.current)
    }
  })
  
  let image = ""
  let spanish = ""
  let english = ""
  let audio = ""
  let text = ""

  if (word) {
    image = word.i
    spanish = word.s
    english = word.e
    audio = word.a

    text = showEng ? english : spanish
  }
  if (audio) {
    audio =`./audio/${audio}`
  }

  if (!image) {
    image = "default.jpg"
  }
  const aStyle = {
    backgroundImage: `url(./img/${image})`,
    backgroundSize: 'cover'
  }
  const toggleLanStyle = {
    backgroundImage: 'url(./img/flip.png)',
    backgroundSize: 'cover'
  }
  const audioStyle = {
    backgroundImage: 'url(./img/audio.png)',
    backgroundSize: 'cover'
  }
  

  return (<>
    <div className="_card">
      <div className="_a" style={aStyle}></div>
      <div className="_word">
        <div className="_toggleLan _pointer" style={toggleLanStyle}
          onClick={()=> {setShowEng(!showEng)}}
        ></div>
        <div className="_audio _pointer" style={audioStyle}
          onClick={() => {audioRef.current.play()}}
        ></div>
        <audio ref={audioRef}>
          <source src={audio} type="audio/mpeg" />
          <source src={audio} type="audio/mp4" />
        </audio>
        <div className="_text">{text}</div>
      </div>
    </div>
  </>)
}

export default WordCard