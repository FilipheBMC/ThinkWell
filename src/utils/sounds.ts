import { Audio } from "expo-av";
import { sounds } from "../constants/sounds";

export async function playSound(name: keyof typeof sounds) {
  const soundFile = sounds[name]; // ← pega o arquivo pelo nome

  const { sound } = await Audio.Sound.createAsync(soundFile);
  await sound.playAsync();

  sound.setOnPlaybackStatusUpdate((status) => {
    if (!status.isLoaded) return;
    if (status.didJustFinish) sound.unloadAsync();
  });
}
