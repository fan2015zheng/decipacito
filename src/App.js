import React, {useState} from 'react'
import './App.css'
import Navbar from './Navbar'
import WordCard from './WordCard'

function App() {
  const [ln, setLn] = useState(0)

  const line = words[ln]
  return (<>
    <Navbar lyrics={lyrics} setLn={setLn}/>
    <div className="container">
      <div className="row">
      { 
        (() => {
          if (!line) {
            return null
          }
          return (
            line.map((word, i) => 
              {
                return (
                  <div key={i} className="col-sm-6 col-lg-4 _wordSpace">
                    <WordCard word={word}/>
                  </div>
                )
              }
            )
          )
        })()
      }
      </div>
    </div>
  </>)
}

export default App;

const words ={
  0: [
    {s:"sí",e:"yes",a:"yes.mp3"},
    {s:"sabes"},
    {s:"que"},
    {s:"ya"},
    {s:"llevo"},
    {s:"un"},
    {s:"rato"},
    {s:"mirándote"}
  ],
  1: [
    {s:"tengo que",e:"(I) have to",a:"iHaveTo.mp3"},
    {s:"bailar"},
    {s:"contigo"},
    {s:"hoy"}
  ]
}

const lyrics = {
  0: "Sí, sabes que ya llevo un rato mirándote",
  1: "Tengo que bailar contigo hoy (DY)",
  2: "Vi que tu mirada ya estaba llamándome",
  3: "Muéstrame el camino que yo voy (Oh)",
  4: "Tú, tú eres el imán y yo soy el metal",
  5: "Me voy acercando y voy armando el plan",
  6: "Solo con pensarlo se acelera el pulso (Oh yeah)",
  7: "Ya, ya me está gustando más de lo normal",
  8: "Todos mis sentidos van pidiendo más",
  9: "Esto hay que tomarlo sin ningún apuro",
  10: "Despacito",
  11: "Quiero respirar tu cuello despacito",
  12: "Deja que te diga cosas al oído",
  13: "Para que te acuerdes si no estás conmigo",
  14: "Despacito",
  15: "Quiero desnudarte a besos despacito",
  16: "Firmo en las paredes de tu laberinto",
  17: "Y hacer de tu cuerpo todo un manuscrito (sube, sube, sube)",
  18: "(Sube, sube)",
  19: "Quiero ver bailar tu pelo",
  20: "Quiero ser tu ritmo",
  21: "Que le enseñes a mi boca",
  22: "Tus lugares favoritos (favoritos, favoritos baby)",
  23: "Déjame sobrepasar tus zonas de peligro",
  24: "Hasta provocar tus gritos",
  25: "Y que olvides tu apellido (Diridiri, dirididi Daddy)",
  26: "Si te pido un beso ven dámelo",
  27: "Yo sé que estás pensándolo",
  28: "Llevo tiempo intentándolo",
  29: "Mami, esto es dando y dándolo",
  30: "Sabes que tu corazón conmigo te hace bom, bom",
  31: "Sabes que esa beba está buscando de mi bom, bom",
  32: "Ven prueba de mi boca para ver cómo te sabe",
  33: "Quiero, quiero, quiero ver cuánto amor a ti te cabe",
  34: "Yo no tengo prisa, yo me quiero dar el viaje",
  35: "Empecemos lento, después salvaje",
  36: "Pasito a pasito, suave suavecito",
  37: "Nos vamos pegando poquito a poquito",
  38: "Cuando tú me besas con esa destreza",
  39: "Veo que eres malicia con delicadeza",
  40: "Pasito a pasito, suave suavecito",
  41: "Nos vamos pegando, poquito a poquito",
  42: "Y es que esa belleza es un rompecabezas",
  43: "Pero pa montarlo aquí tengo la pieza",
  44: "Despacito",
  45: "Quiero respirar tu cuello despacito",
  46: "Deja que te diga cosas al oído",
  47: "Para que te acuerdes si no estás conmigo",
  48: "Despacito",
  49: "Quiero desnudarte a besos despacito",
  50: "Firmo en las paredes de tu laberinto",
  51: "Y hacer de tu cuerpo todo un manuscrito (sube, sube, sube)",
  52: "(Sube, sube)",
  53: "Quiero ver bailar tu pelo",
  54: "Quiero ser tu ritmo",
  55: "Que le enseñes a mi boca",
  56: "Tus lugares favoritos (favoritos, favoritos baby)",
  57: "Déjame sobrepasar tus zonas de peligro",
  58: "Hasta provocar tus gritos",
  59: "Y que olvides tu apellido",
  60: "Despacito",
  61: "Vamos a hacerlo en una playa en Puerto Rico",
  62: "Hasta que las olas griten '¡ay, bendito!''",
  63: "Para que mi sello se quede contigo",
  64: "Pasito a pasito, suave suavecito",
  65: "Nos vamos pegando, poquito a poquito",
  66: "Que le enseñes a mi boca",
  67: "Tus lugares favoritos (favoritos, favoritos baby)",
  68: "Pasito a pasito, suave suavecito",
  69: "Nos vamos pegando, poquito a poquito",
  70: "Hasta provocar tus gritos",
  71: "Y que olvides tu apellido (DY)",
  72: "Despacito"
}
