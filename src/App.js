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
    {s:"que",e:"that",a:"that.m4a"},
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
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"mirada",e:"look",a:"look.mp3",i:""},
    {s:"ya",e:"already",a:"already.mp3",i:""},
    {s:"estaba",e:"was",a:"was.mp3",i:""},
    {s:"llamándome",e:"calling me",a:"callingMe.mp3",i:""}
  ],3: [
    {s:"muéstrame",e:"show me",a:"showMe.mp3",i:""},
    {s:"el",e:"the",a:"the.mp3",i:""},
    {s:"camino",e:"way",a:"way.mp3",i:""},
    {s:"que",e:"that",a:"that.m4a",i:""},
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
    {s:"solo",e:"alone",a:"alone.mp3",i:""},
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
    {s:"Todos",e:"all",a:"all.m4a",i:""},
    {s:"mis",e:"my",a:"pMy.m4a",i:""},
    {s:"sentidos",e:"senses",a:"senses.m4a",i:""},
    {s:"van",e:"(they) go",a:"theyGo.m4a",i:""},
    {s:"pidiendo",e:"asking",a:"asking.m4a",i:""},
    {s:"más",e:"more",a:"more.mp3",i:""}
  ],9: [
    {s:"esto",e:"this",a:"this.m4a",i:""},
    {s:"hay que",e:"should",a:"should.m4a",i:""},
    {s:"tomarlo",e:"take it",a:"takeIt.m4a",i:""},
    {s:"sin",e:"without",a:"without.m4a",i:""},
    {s:"ningún",e:"any",a:"any.m4a",i:""},
    {s:"apuro",e:"predicament",a:"predicament.m4a",i:""}
  ],10: [
    {s:"despacito",e:"slowly",a:"slowly.m4a",i:""}
  ],11: [
    {s:"quiero",e:"(I) want",a:"iWant.m4a",i:""},
    {s:"respirar",e:"breathe",a:"breathe.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"cuello",e:"neck",a:"neck.m4a",i:""},
    {s:"despacito",e:"slowly",a:"slowly.m4a",i:""}
  ],12: [
    {s:"deja",e:"let",a:"let.m4a",i:""},
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"te diga",e:"say (to you)",a:"sayToYou.m4a",i:""},
    {s:"cosas",e:"things",a:"things.m4a",i:""},
    {s:"al",e:"to the",a:"toThe.m4a",i:""},
    {s:"oído",e:"ear",a:"ear.m4a",i:""}
  ],13: [
    {s:"para que",e:"so that",a:"soThat.m4a",i:""},
    {s:"te acuerdes",e:"you remember",a:"youRemember.m4a",i:""},
    {s:"si",e:"if",a:"if.m4a",i:""},
    {s:"no estás",e:"you are not",a:"youAreNot.m4a",i:""},
    {s:"conmigo",e:"with me",a:"withMe.m4a",i:""}
  ],14: [
    {s:"despacito",e:"slowly",a:"slowly.m4a",i:""}
  ],15: [
    {s:"quiero",e:"(I) want",a:"iWant.m4a",i:""},
    {s:"desnudarte",e:"undress (you)",a:"undressYou.m4a",i:""},
    {s:"a besos",e:"with kisses",a:"withKisses.m4a",i:""},
    {s:"despacito",e:"slowly",a:"slowly.m4a",i:""}
  ],16: [
    {s:"firmo",e:"(I) write",a:"iWrite.m4a",i:""},
    {s:"en",e:"on",a:"in.m4a",i:""},
    {s:"las paredes",e:"the walls",a:"theWalls.m4a",i:""},
    {s:"de",e:"of",a:"of.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"laberinto",e:"labyrinth",a:"labyrinth.m4a",i:""}
  ],17: [
    {s:"y",e:"and",a:"and.mp3",i:""},
    {s:"hacer",e:"to make",a:"oToDo.m4a",i:""},
    {s:"de",e:"of",a:"of.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"cuerpo",e:"body",a:"body.m4a",i:""},
    {s:"todo",e:"all",a:"sAll.m4a",i:""},
    {s:"un",e:"a",a:"a.m4a",i:""},
    {s:"manuscrito",e:"manuscript",a:"manuscript.m4a",i:""},
    {s:"sube",e:"(it) goes up",a:"goUp.m4a",i:""}
  ],18: [
    {s:"sube",e:"(it) goes up",a:"goUp.m4a",i:""}
  ],19: [
    {s:"quiero",e:"(I) want",a:"iWant.m4a",i:""},
    {s:"ver",e:"to see",a:"see.m4a",i:""},
    {s:"bailar",e:"to dance",a:"toDance.mp3"},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"pelo",e:"hair",a:"hair.m4a",i:""}
  ],20: [
    {s:"quiero",e:"(I) want",a:"iWant.m4a",i:""},
    {s:"ser",e:"to be",a:"toBe.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"ritmo",e:"rhythm",a:"rhythm.m4a",i:""}
  ],21: [
    {s:"que",e:"(so) that",a:"that.m4a",i:""},
    {s:"enseñes",e:"(you) teach",a:"youTeach.m4a",i:""},
    {s:"le enseñes a mi boca",e:"show my mouth",a:"showMyMouth.m4a",i:""},
    {s:"mi",e:"my",a:"my.m4a",i:""},
    {s:"boca",e:"mouth",a:"mouth.m4a",i:""}
  ],22: [
    {s:"tus",e:"your",a:"pYour.m4a",i:""},
    {s:"lugares",e:"places",a:"places.m4a",i:""},
    {s:"favoritos",e:"favorite",a:"favorite.m4a",i:""},
    {s:"baby",e:"baby",a:"baby.m4a",i:""}
  ],23: [
    {s:"déjame",e:"let me",a:"letMe.m4a",i:""},
    {s:"sobrepasar",e:"to exceed",a:"exceed.m4a",i:""},
    {s:"tus",e:"your",a:"pYour.m4a",i:""},
    {s:"zonas",e:"areas",a:"areas.m4a",i:""},
    {s:"de",e:"of",a:"of.m4a",i:""},
    {s:"peligro",e:"danger",a:"danger.m4a",i:""}
  ],24: [
    {s:"hasta",e:"until",a:"until.m4a",i:""},
    {s:"provocar",e:"to cause",a:"cause.m4a",i:""},
    {s:"tus",e:"your",a:"pYour.m4a",i:""},
    {s:"gritos",e:"scream",a:"scream.m4a",i:""}
  ],25: [
    {s:"y",e:"and",a:"and.mp3",i:""},
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"olvides",e:"(you) forget",a:"youForget.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"apellido",e:"family name",a:"familyName.m4a",i:""},
  ],26: [
    {s:"si",e:"if",a:"if.m4a",i:""},
    {s:"te pido",e:"I ask you",a:"iAskYou.m4a",i:""},
    {s:"un",e:"a",a:"a.m4a",i:""},
    {s:"beso",e:"kiss",a:"kiss2.m4a",i:""},
    {s:"ven",e:"come",a:"come.m4a",i:""},
    {s:"dámelo",e:"give it to me",a:"giveItToMe.m4a",i:""}
  ],27: [
    {s:"yo",e:"I",a:"i.mp3",i:""},
    {s:"sé",e:"know",a:"know.m4a",i:""},
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"estás",e:"you are",a:"youAre.m4a",i:""},
    {s:"pensándolo",e:"thinking",a:"thinking.m4a",i:""}
  ],28: [
    {s:"llevo",e:"I take",a:"haveDone.mp3"},
    {s:"tiempo",e:"time",a:"time.m4a",i:""},
    {s:"intentándolo",e:"trying",a:"trying.m4a",i:""}
  ],29: [
    {s:"Mami",e:"",a:"",i:""},
    {s:"esto es",e:"this is",a:"thisIs.m4a",i:""},
    {s:"dando",e:"giving",a:"giving.m4a",i:""},
    {s:"y",e:"and",a:"and.mp3",i:""},
    {s:"dándolo",e:"giving it",a:"givingIt.m4a",i:""}
  ],30: [
    {s:"sabes",e:"(You) know",a:"youKnow.mp3"},
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"corazón",e:"heart",a:"heart.m4a",i:""},
    {s:"conmigo",e:"with me",a:"withMe.m4a",i:""},
    {s:"te hace",e:"make you",a:"makeYou.m4a",i:""},
    {s:"bom",e:"???",a:"",i:""}
  ],31: [
    {s:"sabes",e:"(You) know",a:"youKnow.mp3"},
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"esa",e:"that",a:"that2.m4a",i:""},
    {s:"beba",e:"baby",a:"baby2.m4a",i:""},
    {s:"está",e:"she's",a:"shes.m4a",i:""},
    {s:"buscando",e:"looking for",a:"lookingFor.m4a",i:""},
    {s:"de",e:"of",a:"of.m4a",i:""},
    {s:"mi",e:"my",a:"my.m4a",i:""},
    {s:"bom",e:"???",a:"",i:""}
  ],32: [
    {s:"ven",e:"come",a:"come.m4a",i:""},
    {s:"prueba",e:"taste",a:"taste.m4a",i:""},
    {s:"de",e:"of",a:"of.m4a",i:""},
    {s:"mi",e:"my",a:"my.m4a",i:""},
    {s:"boca",e:"mouth",a:"mouth.m4a",i:""},
    {s:"para",e:"for",a:"for.m4a",i:""},
    {s:"ver",e:"to see",a:"see.m4a",i:""},
    {s:"cómo",e:"what",a:"what.m4a",i:""},
    {s:"te",e:"you",a:"you.m4a",i:""},
    {s:"sabe",e:"find out/taste",a:"findOut.m4a",i:""}
  ],33: [
    {s:"quiero",e:"(I) want",a:"iWant.m4a",i:""},
    {s:"ver",e:"to see",a:"see.m4a",i:""},
    {s:"cuánto",e:"how much",a:"howMuch.m4a",i:""},
    {s:"amor",e:"love",a:"love.m4a",i:""},
    {s:"a ti te cabe",e:"fit inside you",a:"fitInsideYou.m4a",i:""}
  ],34: [
    {s:"yo no",e:"I don't",a:"iDont.m4a",i:""},
    {s:"tengo",e:"(I) have",a:"have.m4a",i:""},
    {s:"prisa",e:"hurry",a:"hurry.m4a",i:""},
    {s:"me",e:"myself",a:"myself.m4a",i:""},
    {s:"quiero",e:"(I) want",a:"iWant.m4a",i:""},
    {s:"dar el viaje",e:"enjoy the trip",a:"enjoyTrip.m4a",i:""},
    {s:"el",e:"the",a:"the.mp3",i:""},
    {s:"viaje",e:"trip",a:"trip.m4a",i:""}
  ],35: [
    {s:"empecemos",e:"(we) begin",a:"weBegin.m4a",i:""},
    {s:"lento",e:"slow",a:"slow.m4a",i:""},
    {s:"después",e:"then",a:"then.m4a",i:""},
    {s:"salvaje",e:"wild",a:"wild.m4a",i:""}
  ],36: [
    {s:"pasito a pasito",e:"step by step",a:"",i:""},
    {s:"suave",e:"soft",a:"soft.m4a",i:""},
    {s:"suavecito",e:"softly",a:"softly.m4a",i:""}
  ],37: [
    {s:"nos vamos pegando",e:"we get closer",a:"weGetCloser.m4a",i:""},
    {s:"poquito a poquito",e:"little by little",a:"littleByLittle.m4a",i:""}
  ],38: [
    {s:"cuando",e:"when",a:"when.m4a",i:""},
    {s:"tú",e:"you",a:"you.mp3",i:""},
    {s:"me",e:"myself",a:"myself.m4a",i:""},
    {s:"besas",e:"kiss",a:"kiss.m4a",i:""},
    {s:"con",e:"with",a:"with.m4a",i:""},
    {s:"esa",e:"that",a:"that2.m4a",i:""},
    {s:"destreza",e:"skill",a:"skill.m4a",i:""}
  ],39: [
    {s:"veo",e:"I see",a:"iSee.m4a",i:""},
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"eres",e:"(you) are",a:"youAre.mp3",i:""},
    {s:"malicia",e:"mischief",a:"mischief.m4a",i:""},
    {s:"con",e:"with",a:"with.m4a",i:""},
    {s:"delicadeza",e:"kindness",a:"kindness.m4a",i:""}
  ],40: [
    {s:"pasito a pasito",e:"step by step",a:"",i:""},
    {s:"suave",e:"soft",a:"soft.m4a",i:""},
    {s:"suavecito",e:"softly",a:"softly.m4a",i:""}
  ],41: [
    {s:"nos vamos pegando",e:"we get closer",a:"weGetCloser.m4a",i:""},
    {s:"poquito a poquito",e:"little by little",a:"littleByLittle.m4a",i:""}
  ],42: [
    {s:"y",e:"and",a:"and.mp3",i:""},
    {s:"es",e:"is",a:"is.m4a",i:""},
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"esa",e:"that",a:"that2.m4a",i:""},
    {s:"belleza",e:"beauty",a:"beauty.m4a",i:""},
    {s:"un",e:"a",a:"a.m4a",i:""},
    {s:"rompecabezas",e:"jigsaw puzzle",a:"puzzle.m4a",i:""}
  ],43: [
    {s:"pero",e:"but",a:"but.m4a",i:""},
    {s:"pa",e:"to",a:"to.m4a",i:""},
    {s:"montarlo",e:"put together",a:"putTogether.m4a",i:""},
    {s:"aquí",e:"here",a:"here.m4a",i:""},
    {s:"tengo",e:"(I) have",a:"have.m4a",i:""},
    {s:"la pieza",e:"the piece",a:"thePiece.m4a",i:""}
  ],44: [
    {s:"despacito",e:"slowly",a:"slowly.m4a",i:""}
  ],45: [
    {s:"quiero",e:"(I) want",a:"iWant.m4a",i:""},
    {s:"respirar",e:"",a:"",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"cuello",e:"",a:"",i:""},
    {s:"despacito",e:"slowly",a:"slowly.m4a",i:""}
  ],46: [
    {s:"deja",e:"let",a:"let.m4a",i:""},
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"te diga",e:"say (to you)",a:"sayToYou.m4a",i:""},
    {s:"cosas",e:"things",a:"things.m4a",i:""},
    {s:"al",e:"to the",a:"toThe.m4a",i:""},
    {s:"oído",e:"ear",a:"ear.m4a",i:""}
  ],47: [
    {s:"para que",e:"so that",a:"soThat.m4a",i:""},
    {s:"te acuerdes",e:"you remember",a:"youRemember",i:""},
    {s:"si",e:"if",a:"if.m4a",i:""},
    {s:"no estás",e:"you are not",a:"youAreNot.m4a",i:""},
    {s:"conmigo",e:"with me",a:"withMe.m4a",i:""}
  ],48: [
    {s:"despacito",e:"slowly",a:"slowly.m4a",i:""}
  ],49: [
    {s:"quiero",e:"(I) want",a:"iWant.m4a",i:""},
    {s:"desnudarte",e:"undress (you)",a:"undressYou.m4a",i:""},
    {s:"a besos",e:"with kisses",a:"withKisses.m4a",i:""},
    {s:"despacito",e:"slowly",a:"slowly.m4a",i:""}
  ],50: [
    {s:"firmo",e:"(I) write",a:"iWrite.m4a",i:""},
    {s:"en",e:"on",a:"in.m4a",i:""},
    {s:"las paredes",e:"the walls",a:"theWalls.m4a",i:""},
    {s:"de",e:"of",a:"of.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"laberinto",e:"labyrinth",a:"labyrinth.m4a",i:""}
  ],51: [
    {s:"y",e:"and",a:"and.mp3",i:""},
    {s:"hacer",e:"to make",a:"oToDo.m4a",i:""},
    {s:"de",e:"of",a:"of.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"cuerpo",e:"body",a:"body.m4a",i:""},
    {s:"todo",e:"all",a:"sAll.m4a",i:""},
    {s:"un",e:"a",a:"a.m4a",i:""},
    {s:"manuscrito",e:"manuscript",a:"manuscript.m4a",i:""},
    {s:"sube",e:"(it) goes up",a:"goUp.m4a",i:""}
  ],52: [
    {s:"sube",e:"(it) goes up",a:"goUp.m4a",i:""}
  ],53: [
    {s:"quiero",e:"(I) want",a:"iWant.m4a",i:""},
    {s:"ver",e:"to see",a:"see.m4a",i:""},
    {s:"bailar",e:"to dance",a:"toDance.mp3"},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"pelo",e:"hair",a:"hair.m4a",i:""}
  ],54: [
    {s:"quiero",e:"(I) want",a:"iWant.m4a",i:""},
    {s:"ser",e:"to be",a:"toBe.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"ritmo",e:"rhythm",a:"rhythm.m4a",i:""}
  ],55: [
    {s:"que",e:"(so) that",a:"that.m4a",i:""},
    {s:"enseñes",e:"(you) teach",a:"youTeach.m4a",i:""},
    {s:"le enseñes a mi boca",e:"show my mouth",a:"showMyMouth.m4a",i:""},
    {s:"mi",e:"my",a:"my.m4a",i:""},
    {s:"boca",e:"mouth",a:"mouth.m4a",i:""}
  ],56: [
    {s:"tus",e:"your",a:"pYour.m4a",i:""},
    {s:"lugares",e:"places",a:"places.m4a",i:""},
    {s:"favoritos",e:"favorite",a:"favorite.m4a",i:""},
    {s:"baby",e:"baby",a:"baby.m4a",i:""}
  ],57: [
    {s:"déjame",e:"let me",a:"letMe.m4a",i:""},
    {s:"sobrepasar",e:"to exceed",a:"exceed.m4a",i:""},
    {s:"tus",e:"your",a:"pYour.m4a",i:""},
    {s:"zonas",e:"areas",a:"areas.m4a",i:""},
    {s:"de",e:"of",a:"of.m4a",i:""},
    {s:"peligro",e:"danger",a:"danger.m4a",i:""}
  ],58: [
    {s:"hasta",e:"until",a:"until.m4a",i:""},
    {s:"provocar",e:"to cause",a:"cause.m4a",i:""},
    {s:"tus",e:"your",a:"pYour.m4a",i:""},
    {s:"gritos",e:"scream",a:"scream.m4a",i:""}
  ],59: [
    {s:"y",e:"and",a:"and.mp3",i:""},
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"olvides",e:"(you) forget",a:"youForget.m4a",i:""},
    {s:"tu",e:"your",a:"your.mp3",i:""},
    {s:"apellido",e:"family name",a:"familyName.m4a",i:""}
  ],60: [
    {s:"despacito",e:"slowly",a:"slowly.m4a",i:""}
  ],61: [
    {s:"vamos a",e:"let's",a:"lets.m4a",i:""},
    {s:"hacerlo",e:"to do it",a:"doIt.m4a",i:""},
    {s:"en",e:"on",a:"in.m4a",i:""},
    {s:"una",e:"a",a:"gA.m4a",i:""},
    {s:"playa",e:"beach",a:"beach.m4a",i:""},
    {s:"en",e:"in",a:"in.m4a",i:""},
    {s:"Puerto Rico",e:"Puerto Rico",a:"puertoRico.m4a",i:""}
  ],62: [
    {s:"hasta",e:"until",a:"until.m4a",i:""},
    {s:"que",e:"that",a:"that.m4a",i:""},
    {s:"las",e:"the",a:"pThe.m4a",i:""},
    {s:"olas",e:"(sea) waves",a:"seaWaves.m4a",i:""},
    {s:"griten",e:"(they) scream",a:"theyScream.m4a",i:""},
    {s:"¡ay bendito",e:"Oh God",a:"ohGod.m4a",i:""}
  ],63: [
    {s:"para que",e:"so that",a:"soThat.m4a",i:""},
    {s:"mi",e:"my",a:"my.m4a",i:""},
    {s:"sello",e:"seal/mark",a:"seal.m4a",i:""},
    {s:"se quede",e:"to stay",a:"stay.m4a",i:""},
    {s:"contigo",e:"with you",a:"withYou.mp3",i:""}
  ],64: [
    {s:"pasito a pasito",e:"step by step",a:"",i:""},
    {s:"suave",e:"soft",a:"soft.m4a",i:""},
    {s:"suavecito",e:"softly",a:"softly.m4a",i:""}
  ],65: [
    {s:"nos vamos pegando",e:"we get closer",a:"weGetCloser.m4a",i:""},
    {s:"poquito a poquito",e:"little by little",a:"littleByLittle.m4a",i:""}
  ],66: [
    {s:"que",e:"(so) that",a:"that.m4a",i:""},
    {s:"enseñes",e:"(you) teach",a:"youTeach.m4a",i:""},
    {s:"le enseñes a mi boca",e:"show my mouth",a:"showMyMouth.m4a",i:""},
    {s:"mi",e:"my",a:"my.m4a",i:""},
    {s:"boca",e:"mouth",a:"mouth.m4a",i:""}
  ],67: [
    {s:"tus",e:"your",a:"pYour.m4a",i:""},
    {s:"lugares",e:"places",a:"places.m4a",i:""},
    {s:"favoritos",e:"favorite",a:"favorite.m4a",i:""},
    {s:"baby",e:"baby",a:"baby.m4a",i:""}
  ],68: [
    {s:"pasito a pasito",e:"step by step",a:"",i:""},
    {s:"suave",e:"soft",a:"soft.m4a",i:""},
    {s:"suavecito",e:"softly",a:"softly.m4a",i:""}
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
    {s:"que",e:"that",a:"that.m4a",i:""},
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
