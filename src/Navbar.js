import React from 'react'
import './Navbar.css'

function Navbar({lyrics, ln, setLn}) {

  let text = "Lyrics"
  if (ln !== undefined) {
    text = lyrics[ln]
  }
  
  
  return(<>
  <nav className="navbar navbar-expand-sm fixed-top bg-secondary navbar-dark">
  
  <span className="navbar-brand _brand _pointer"
    onClick={()=> setLn(undefined)}
  >
    Learn Despacito
  </span>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
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
  </div>
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

