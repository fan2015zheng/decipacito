import React from 'react'
import './Navbar.css'

function Navbar({lyrics, setLn}) {
  return(<>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <span className="navbar-brand">Decipacito</span>

  <ul className="navbar-nav">
    <li className="nav-item dropdown">
      <span className="nav-link dropdown-toggle _pointer"  id="navbardrop" data-toggle="dropdown">
        Lyrics
      </span>
      <div className="dropdown-menu _dropdown">
        {getNumArray(73).map((line, i) => {
          return (
            <div key={i} className="dropdown-item _pointer _item"
              onClick={() => {setLn(line)}}
            >
              {lyrics[line]}
            </div>
          )
        })}
      </div>
    </li>
  </ul>
</nav>
  </>)
}

export default Navbar

function getNumArray(n) {
  const array = []
  for(let i=0; i<n; i++) {
    array.push(i)
  }
  return array
}

