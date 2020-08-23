import React from 'react'
import './Words.css'
import WordCard from './WordCard'

function Words({line}) {
  return(<>
    <div className="container">
      <div className="row">
        {
          line.map((word, i) => 
          {
            return (
              <div key={i} className="col-sm-6 col-lg-4 _wordSpace">
                <WordCard word={word}/>
              </div>
            )
          })
        }
      </div>
    </div>
  </>)
}

export default Words