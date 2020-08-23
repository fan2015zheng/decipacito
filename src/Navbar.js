import React from 'react'
import './Navbar.css'

function Navbar({lyrics, ln, setLn}) {

  let text = "Lyrics"
  if (ln !== undefined) {
    text = lyrics[ln]
  }
  
  
  return(<>
  <nav className="navbar navbar-expand-sm fixed-top bg-danger navbar-danger">
  
  <span className="navbar-brand _brand _pointer"
    onClick={()=> setLn(undefined)}
  >
    Decipacito
  </span>

  <ul className="navbar-nav">
    <li className="nav-item dropdown">
      <span className="nav-link dropdown-toggle _pointer _dropdownToggle"  id="navbardrop" data-toggle="dropdown">
        {text}
      </span>
      <div className="dropdown-menu _dropdown">
        {getNumArray(73).map((l, i) => {
          return (
            <div key={i} className="dropdown-item _pointer _item"
              onClick={() => {setLn(l)}}
            >
              {lyrics[l]}
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

