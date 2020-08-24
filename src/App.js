import React, {useState} from 'react'
import './App.css'
import Navbar from './Navbar'
import Words from './Words'
import YouTube from './YouTube'

function App() {
  const [ln, setLn] = useState()

  const line = words[ln]
  const content = line ? <Words line={line} /> : <YouTube />
  return (<>
    <Navbar lyrics={lyrics} ln={ln} setLn={setLn}/>
    {content}
  </>)
}

export default App;

const words ={
  0: [
    {s:"sí",e:"yes",a:"yes.mp3"},
    {s:"sabes",e:"(You) know",a:"youKnow.mp3"},
    {s:"que",e:"that",a:"that.mp3"},
    {s:"ya",e:"already",a:"already.mp3"},
    {s:"llevo",e:"have (done)",a:"haveDone.mp3"},
    {s:"un rato",e:"a while",a:"aWhile.mp3"},
    {s:"mirándote",e:"looking at you",a:"lookingAtYou.mp3"}
  ],1: [
    {s:"tengo que",e:"(I) have to",a:"iHaveTo.mp3"},
    {s:"bailar",e:"to dance",a:"toDance.mp3"},
    {s:"contigo",e:"with you",a:"withYou.mp3"},
    {s:"hoy",e:"today",a:"today.mp3"}
  ],2: [
    {s:"vi",e:"(I) saw",a:"iSaw.mp3",i:""},
    {s:"que",e:"that",a:"that.mp3",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"mirada",e:"look",a:"look.mp3",i:""},
    {s:"ya",e:"already",a:"already.mp3",i:""},
    {s:"estaba",e:"was",a:"was.mp3",i:""},
    {s:"llamándome",e:"calling me",a:"callingMe.mp3",i:""}
  ],3: [
    {s:"muéstrame",e:"show me",a:"showMe.mp3",i:""},
    {s:"el",e:"the",a:"the.mp3",i:""},
    {s:"camino",e:"way",a:"way.mp3",i:""},
    {s:"que",e:"that",a:"that.mp3",i:""},
    {s:"yo",e:"I",a:"i.mp3",i:""},
    {s:"voy",e:"(I) go",a:"iGo.mp3",i:""}
  ],4: [
    {s:"tú",e:"you",a:"you.mp3",i:""},
    {s:"eres",e:"(you) are",a:"youAre.mp3",i:""},
    {s:"el",e:"the",a:"the.mp3",i:""},
    {s:"imán",e:"magnet",a:"magnet.mp3",i:""},
    {s:"y",e:"and",a:"and.mp3",i:""},
    {s:"yo",e:"I",a:"i.mp3",i:""},
    {s:"soy",e:"(I) am",a:"iAm.mp3",i:""},
    {s:"metal",e:"metal",a:"metal.mp3",i:""}
  ],5: [
    {s:"Me voy",e:"I'm going",a:"imGoing.mp3",i:""},
    {s:"acercando",e:"getting closer",a:"gettingCloser.mp3",i:""},
    {s:"y",e:"and",a:"and.mp3",i:""},
    {s:"armando",e:"put together",a:"putTogether.mp3",i:""},
    {s:"el",e:"the",a:"the.mp3",i:""},
    {s:"plan",e:"plan",a:"plan.mp3",i:""}
  ],6: [
    {s:"solo",e:"alone",a:"along.mp3",i:""},
    {s:"con",e:"with",a:"with.mp3",i:""},
    {s:"pensarlo",e:"thinking",a:"thinking.mp3",i:""},
    {s:"se",e:"itself",a:"itself.mp3",i:""},
    {s:"acelera",e:"accelerate",a:"accelerate.mp3",i:""},
    {s:"el",e:"the",a:"the.mp3",i:""},
    {s:"pulso",e:"pulse",a:"pulse.mp3",i:""}
  ],7: [
    {s:"ya",e:"already",a:"already.mp3",i:""},
    {s:"me está gustando",e:"I'm liking it",a:"iAmLikingIt.mp3",i:""},
    {s:"gustando",e:"liking",a:"liking.mp3",i:""},
    {s:"más",e:"more",a:"more.mp3",i:""},
    {s:"más de lo normal",e:"more than normal",a:"moreThanNormal.mp3",i:""},
    {s:"normal",e:"normal",a:"normal.mp3",i:""}
  ],8: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],9: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],10: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],11: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],12: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],13: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],14: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],15: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],16: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],17: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],18: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],19: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],20: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],21: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],22: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],23: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],24: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],25: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],26: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],27: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],28: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],29: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],30: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],31: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],32: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],33: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],34: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],35: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],36: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],37: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],38: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],39: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],40: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],41: [
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
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
