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
    {s:"Todos",e:"",a:"",i:""},
    {s:"mis",e:"",a:"",i:""},
    {s:"sentidos",e:"",a:"",i:""},
    {s:"van",e:"",a:"",i:""},
    {s:"pidiendo",e:"",a:"",i:""},
    {s:"más",e:"",a:"",i:""}
  ],9: [
    {s:"Esto",e:"",a:"",i:""},
    {s:"hay",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"tomarlo",e:"",a:"",i:""},
    {s:"sin",e:"",a:"",i:""},
    {s:"ningún",e:"",a:"",i:""},
    {s:"apuro",e:"",a:"",i:""}
  ],10: [
    {s:"despacito",e:"",a:"",i:""}
  ],11: [
    {s:"Quiero",e:"",a:"",i:""},
    {s:"respirar",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"cuello",e:"",a:"",i:""},
    {s:"despacito",e:"",a:"",i:""}
  ],12: [
    {s:"Deja",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"te",e:"",a:"",i:""},
    {s:"diga",e:"",a:"",i:""},
    {s:"cosas",e:"",a:"",i:""},
    {s:"al",e:"",a:"",i:""},
    {s:"oído",e:"",a:"",i:""}
  ],13: [
    {s:"Para",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"te",e:"",a:"",i:""},
    {s:"acuerdes",e:"",a:"",i:""},
    {s:"si",e:"",a:"",i:""},
    {s:"no",e:"",a:"",i:""},
    {s:"estás",e:"",a:"",i:""},
    {s:"conmigo",e:"",a:"",i:""}
  ],14: [
    {s:"despacito",e:"",a:"",i:""}
  ],15: [
    {s:"quiero",e:"",a:"",i:""},
    {s:"desnudarte",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"besos",e:"",a:"",i:""},
    {s:"despacito",e:"",a:"",i:""}
  ],16: [
    {s:"Firmo",e:"",a:"",i:""},
    {s:"en",e:"",a:"",i:""},
    {s:"las",e:"",a:"",i:""},
    {s:"paredes",e:"",a:"",i:""},
    {s:"de",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"laberinto",e:"",a:"",i:""}
  ],17: [
    {s:"Y",e:"",a:"",i:""},
    {s:"hacer",e:"",a:"",i:""},
    {s:"de",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"cuerpo",e:"",a:"",i:""},
    {s:"todo",e:"",a:"",i:""},
    {s:"un",e:"",a:"",i:""},
    {s:"manuscrito",e:"",a:"",i:""},
    {s:"sube",e:"",a:"",i:""}
  ],18: [
    {s:"sube",e:"",a:"",i:""}
  ],19: [
    {s:"Quiero",e:"",a:"",i:""},
    {s:"ver",e:"",a:"",i:""},
    {s:"bailar",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"pelo",e:"",a:"",i:""}
  ],20: [
    {s:"Quiero",e:"",a:"",i:""},
    {s:"ser",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"ritmo",e:"",a:"",i:""}
  ],21: [
    {s:"Que",e:"",a:"",i:""},
    {s:"le",e:"",a:"",i:""},
    {s:"enseñes",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"mi",e:"",a:"",i:""},
    {s:"boca",e:"",a:"",i:""}
  ],22: [
    {s:"tus",e:"",a:"",i:""},
    {s:"lugares",e:"",a:"",i:""},
    {s:"favoritos",e:"",a:"",i:""},
    {s:"baby",e:"",a:"",i:""}
  ],23: [
    {s:"déjame",e:"",a:"",i:""},
    {s:"sobrepasar",e:"",a:"",i:""},
    {s:"tus",e:"",a:"",i:""},
    {s:"zonas",e:"",a:"",i:""},
    {s:"de",e:"",a:"",i:""},
    {s:"peligro",e:"",a:"",i:""}
  ],24: [
    {s:"Hasta",e:"",a:"",i:""},
    {s:"provocar",e:"",a:"",i:""},
    {s:"tus",e:"",a:"",i:""},
    {s:"gritos",e:"",a:"",i:""}
  ],25: [
    {s:"Y",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"olvides",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"apellido",e:"",a:"",i:""},
    {s:"dirididi",e:"",a:"",i:""},
    {s:"Daddy",e:"",a:"",i:""},
    {s:"",e:"",a:"",i:""}
  ],26: [
    {s:"Si",e:"",a:"",i:""},
    {s:"te",e:"",a:"",i:""},
    {s:"pido",e:"",a:"",i:""},
    {s:"un",e:"",a:"",i:""},
    {s:"beso",e:"",a:"",i:""},
    {s:"ven",e:"",a:"",i:""},
    {s:"dámelo",e:"",a:"",i:""}
  ],27: [
    {s:"Yo",e:"",a:"",i:""},
    {s:"sé",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"estás",e:"",a:"",i:""},
    {s:"pensándolo",e:"",a:"",i:""}
  ],28: [
    {s:"Llevo",e:"",a:"",i:""},
    {s:"tiempo",e:"",a:"",i:""},
    {s:"intentándolo",e:"",a:"",i:""}
  ],29: [
    {s:"Mami",e:"",a:"",i:""},
    {s:"esto",e:"",a:"",i:""},
    {s:"dando",e:"",a:"",i:""},
    {s:"y",e:"",a:"",i:""},
    {s:"dándolo",e:"",a:"",i:""}
  ],30: [
    {s:"Sabes",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"corazón",e:"",a:"",i:""},
    {s:"conmigo",e:"",a:"",i:""},
    {s:"te",e:"",a:"",i:""},
    {s:"hace",e:"",a:"",i:""},
    {s:"bom",e:"",a:"",i:""}
  ],31: [
    {s:"Sabes",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"esa",e:"",a:"",i:""},
    {s:"beba",e:"",a:"",i:""},
    {s:"está",e:"",a:"",i:""},
    {s:"buscando",e:"",a:"",i:""},
    {s:"de",e:"",a:"",i:""},
    {s:"mi",e:"",a:"",i:""},
    {s:"bom",e:"",a:"",i:""}
  ],32: [
    {s:"Ven",e:"",a:"",i:""},
    {s:"prueba",e:"",a:"",i:""},
    {s:"de",e:"",a:"",i:""},
    {s:"mi",e:"",a:"",i:""},
    {s:"boca",e:"",a:"",i:""},
    {s:"para",e:"",a:"",i:""},
    {s:"ver",e:"",a:"",i:""},
    {s:"cómo",e:"",a:"",i:""},
    {s:"te",e:"",a:"",i:""},
    {s:"sabe",e:"",a:"",i:""}
  ],33: [
    {s:"quiero",e:"",a:"",i:""},
    {s:"ver",e:"",a:"",i:""},
    {s:"cuánto",e:"",a:"",i:""},
    {s:"amor",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"ti",e:"",a:"",i:""},
    {s:"te",e:"",a:"",i:""},
    {s:"cabe",e:"",a:"",i:""}
  ],34: [
    {s:"Yo",e:"",a:"",i:""},
    {s:"no",e:"",a:"",i:""},
    {s:"tengo",e:"",a:"",i:""},
    {s:"prisa",e:"",a:"",i:""},
    {s:"me",e:"",a:"",i:""},
    {s:"quiero",e:"",a:"",i:""},
    {s:"dar",e:"",a:"",i:""},
    {s:"el",e:"",a:"",i:""},
    {s:"viaje",e:"",a:"",i:""}
  ],35: [
    {s:"empecemos",e:"",a:"",i:""},
    {s:"lento",e:"",a:"",i:""},
    {s:"después",e:"",a:"",i:""},
    {s:"salvaje",e:"",a:"",i:""}
  ],36: [
    {s:"pasito",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"pasito",e:"",a:"",i:""},
    {s:"suave",e:"",a:"",i:""},
    {s:"suavecito",e:"",a:"",i:""}
  ],37: [
    {s:"Nos",e:"",a:"",i:""},
    {s:"vamos",e:"",a:"",i:""},
    {s:"pegando",e:"",a:"",i:""},
    {s:"poquito",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"poquito",e:"",a:"",i:""}
  ],38: [
    {s:"cuando",e:"",a:"",i:""},
    {s:"tú",e:"",a:"",i:""},
    {s:"me",e:"",a:"",i:""},
    {s:"besas",e:"",a:"",i:""},
    {s:"con",e:"",a:"",i:""},
    {s:"esa",e:"",a:"",i:""},
    {s:"destreza",e:"",a:"",i:""}
  ],39: [
    {s:"veo",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"eres",e:"",a:"",i:""},
    {s:"malicia",e:"",a:"",i:""},
    {s:"con",e:"",a:"",i:""},
    {s:"delicadeza",e:"",a:"",i:""}
  ],40: [
    {s:"pasito",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"pasito",e:"",a:"",i:""},
    {s:"suave",e:"",a:"",i:""},
    {s:"suavecito",e:"",a:"",i:""}
  ],41: [
    {s:"Nos",e:"",a:"",i:""},
    {s:"vamos",e:"",a:"",i:""},
    {s:"pegando",e:"",a:"",i:""},
    {s:"poquito",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"poquito",e:"",a:"",i:""}
  ],42: [
    {s:"Y",e:"",a:"",i:""},
    {s:"es",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"esa",e:"",a:"",i:""},
    {s:"belleza",e:"",a:"",i:""},
    {s:"un",e:"",a:"",i:""},
    {s:"rompecabezas",e:"",a:"",i:""}
  ],43: [
    {s:"pero",e:"",a:"",i:""},
    {s:"pa",e:"",a:"",i:""},
    {s:"montarlo",e:"",a:"",i:""},
    {s:"aquí",e:"",a:"",i:""},
    {s:"tengo",e:"",a:"",i:""},
    {s:"la",e:"",a:"",i:""},
    {s:"pieza",e:"",a:"",i:""}
  ],44: [
    {s:"despacito",e:"",a:"",i:""}
  ],45: [
    {s:"quiero",e:"",a:"",i:""},
    {s:"respirar",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"cuello",e:"",a:"",i:""},
    {s:"despacito",e:"",a:"",i:""}
  ],46: [
    {s:"deja",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"te",e:"",a:"",i:""},
    {s:"diga",e:"",a:"",i:""},
    {s:"cosas",e:"",a:"",i:""},
    {s:"al",e:"",a:"",i:""},
    {s:"oído",e:"",a:"",i:""}
  ],47: [
    {s:"para",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"te",e:"",a:"",i:""},
    {s:"acuerdes",e:"",a:"",i:""},
    {s:"si",e:"",a:"",i:""},
    {s:"no",e:"",a:"",i:""},
    {s:"estás",e:"",a:"",i:""},
    {s:"conmigo",e:"",a:"",i:""}
  ],48: [
    {s:"despacito",e:"",a:"",i:""}
  ],49: [
    {s:"quiero",e:"",a:"",i:""},
    {s:"desnudarte",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"besos",e:"",a:"",i:""},
    {s:"despacito",e:"",a:"",i:""}
  ],50: [
    {s:"Firmo",e:"",a:"",i:""},
    {s:"en",e:"",a:"",i:""},
    {s:"las",e:"",a:"",i:""},
    {s:"paredes",e:"",a:"",i:""},
    {s:"de",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"laberinto",e:"",a:"",i:""}
  ],51: [
    {s:"Y",e:"",a:"",i:""},
    {s:"hacer",e:"",a:"",i:""},
    {s:"de",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"cuerpo",e:"",a:"",i:""},
    {s:"todo",e:"",a:"",i:""},
    {s:"un",e:"",a:"",i:""},
    {s:"manuscrito",e:"",a:"",i:""},
    {s:"sube",e:"",a:"",i:""}
  ],52: [
    {s:"sube",e:"",a:"",i:""}
  ],53: [
    {s:"quiero",e:"",a:"",i:""},
    {s:"ver",e:"",a:"",i:""},
    {s:"bailar",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"pelo",e:"",a:"",i:""}
  ],54: [
    {s:"quiero",e:"",a:"",i:""},
    {s:"ser",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"ritmo",e:"",a:"",i:""}
  ],55: [
    {s:"que",e:"",a:"",i:""},
    {s:"le",e:"",a:"",i:""},
    {s:"enseñes",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"mi",e:"",a:"",i:""},
    {s:"boca",e:"",a:"",i:""}
  ],56: [
    {s:"tus",e:"",a:"",i:""},
    {s:"lugares",e:"",a:"",i:""},
    {s:"favoritos",e:"",a:"",i:""},
    {s:"baby",e:"",a:"",i:""}
  ],57: [
    {s:"déjame",e:"",a:"",i:""},
    {s:"sobrepasar",e:"",a:"",i:""},
    {s:"tus",e:"",a:"",i:""},
    {s:"zonas",e:"",a:"",i:""},
    {s:"de",e:"",a:"",i:""},
    {s:"peligro",e:"",a:"",i:""}
  ],58: [
    {s:"hasta",e:"",a:"",i:""},
    {s:"provocar",e:"",a:"",i:""},
    {s:"tus",e:"",a:"",i:""},
    {s:"gritos",e:"",a:"",i:""}
  ],59: [
    {s:"Y",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"olvides",e:"",a:"",i:""},
    {s:"tu",e:"",a:"",i:""},
    {s:"apellido",e:"",a:"",i:""}
  ],60: [
    {s:"despacito",e:"",a:"",i:""}
  ],61: [
    {s:"Vamos",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"hacerlo",e:"",a:"",i:""},
    {s:"en",e:"",a:"",i:""},
    {s:"una",e:"",a:"",i:""},
    {s:"playa",e:"",a:"",i:""},
    {s:"en",e:"",a:"",i:""},
    {s:"Puerto Rico",e:"",a:"",i:""}
  ],62: [
    {s:"hasta",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"las",e:"",a:"",i:""},
    {s:"olas",e:"",a:"",i:""},
    {s:"griten",e:"",a:"",i:""},
    {s:"¡ay",e:"",a:"",i:""},
    {s:"bendito",e:"",a:"",i:""}
  ],63: [
    {s:"para",e:"",a:"",i:""},
    {s:"que",e:"",a:"",i:""},
    {s:"mi",e:"",a:"",i:""},
    {s:"sello",e:"",a:"",i:""},
    {s:"se",e:"",a:"",i:""},
    {s:"quede",e:"",a:"",i:""},
    {s:"contigo",e:"",a:"",i:""}
  ],64: [
    {s:"pasito",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"pasito",e:"",a:"",i:""},
    {s:"suave",e:"",a:"",i:""},
    {s:"suavecito",e:"",a:"",i:""}
  ],65: [
    {s:"nos",e:"",a:"",i:""},
    {s:"vamos",e:"",a:"",i:""},
    {s:"pegando",e:"",a:"",i:""},
    {s:"poquito",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"poquito",e:"",a:"",i:""}
  ],66: [
    {s:"que",e:"",a:"",i:""},
    {s:"le",e:"",a:"",i:""},
    {s:"enseñes",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"mi",e:"",a:"",i:""},
    {s:"boca",e:"",a:"",i:""}
  ],67: [
    {s:"tus",e:"",a:"",i:""},
    {s:"lugares",e:"",a:"",i:""},
    {s:"favoritos",e:"",a:"",i:""},
    {s:"baby",e:"",a:"",i:""}
  ],68: [
    {s:"pasito",e:"",a:"",i:""},
    {s:"a",e:"",a:"",i:""},
    {s:"pasito",e:"",a:"",i:""},
    {s:"suave",e:"",a:"",i:""},
    {s:"suavecito",e:"",a:"",i:""}
  ],69: [
    {s:"nos vamos pegando",e:"we get closer",a:"weGetCloser.m4a",i:""},
    {s:"poquito a poquito",e:"little by little",a:"littleByLittle.m4a",i:""}
  ],70: [
    {s:"hasta",e:"until",a:"until.m4a",i:""},
    {s:"provocar",e:"to cause",a:"cause.m4a",i:""},
    {s:"tus",e:"your",a:"pYour.m4a",i:""},
    {s:"gritos",e:"scream",a:"scream.m4a",i:""}
  ],71: [
    {s:"Y",e:"and",a:"and.mp3",i:""},
    {s:"que",e:"that",a:"that.mp3",i:""},
    {s:"olvides",e:"(you) forget",a:"youForget.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"apellido",e:"family name",a:"familyName.m4a",i:""}
  ],72: [
    {s:"despacito",e:"slowly",a:"slowly.m4a",i:""}
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
