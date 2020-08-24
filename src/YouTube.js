import React from 'react'
import './YouTube.css'

function YouTube () {
  return (<>
    <div className="_youtube">
      <iframe title="decipacito youtube" className="_youtubeFrame"
        width="300" height="200" 
        
        src="https://www.youtube.com/embed/kJQP7kiw5Fk">
      </iframe>
      
      <div className="_instruction">
        click Lyrics dropdown to learn its Spanish words
      </div>
    </div>

  </>)
}

export default YouTube