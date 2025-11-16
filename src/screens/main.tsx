import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
// import { Container } from '../styles/Container';
import logoTec from '../assets/image/logoTec.png';
import ButtonsChoose from '../components/ButtonsChoose/ButtonsChoose';
import Reset from '../components/Reset/Reset';
import Visors from '../components/Visor/Visors';
import Logo from '../components/Logo/Logo';
import Container from '../styles/Container';
import { useSound } from '../context/soundContext';
import { useQuiz } from '../hooks/SystemGame';


const Main = () => {

  const { play, isMuted, toggleMute } = useSound();
  const { alternatives, verifyOption, gameScore, remaindingMoves, reset, start, setCode } = useQuiz();  

  useEffect(() => {
    play("SoundTrack")
  }, [])
  return (

    <Container >

      {/* <Image source={logoTec} style={{ width: '100%', resizeMode: "contain", }} /> */}
      <Logo />

      {/* Estava a pensar em fazer uma injeção de visores mas acaba que não vale apena */}
      <Visors bigVisor={gameScore()} smallVisor={remaindingMoves()} />

      {/* Botões para responder questões */}
      <ButtonsChoose
        alternatives={alternatives}
        onSelect={(option) => verifyOption(option)}
      />

      {/* Reset */}
      {/* <Reset onPress={(code) => {code ? setCode(code) : reset}} state={start}/> */}
      <Reset onPress={(code) => {
    if (code) {
        setCode(code);
    } else {
        reset(); // ← AGORA SIM executa
    }
}} state={start}/>

      

    </Container>
  )
}

export default Main