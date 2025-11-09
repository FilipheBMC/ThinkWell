import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { playSound } from './src/utils/sounds';
import { SoundProvider, useSound } from './src/context/soundContext';
import Main from './src/screens/main';
import { SafeAreaView } from 'react-native';

export default function App() {

  const handleWin = () => {
    playSound("win")
    console.log("lkjshdflaskjdh");

  }

  const handleLose = () => {
    playSound('lose')
  }

  const handleClick = () => {
    playSound('click')
  }

  const handleResult = () => {
    playSound('result')
  }


  return (
    <SoundProvider>
      {/* <Button title='fundo' onPress={}/> */}
      {/* <Button title='win' onPress={handleWin}/>
      <Button title='lose' onPress={handleLose}/>
      <Button title='resultado' onPress={handleResult}/>
      <Button title='click' onPress={handleClick}/>
      <StatusBar style="auto" /> */}
      <Main />
    </SoundProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
