// import { createContext, useContext, useEffect, useState } from "react";
// import { Audio } from "expo-av";
// import { sounds } from "../constants/sounds";

// interface ISoundContext {
//   play: (name: keyof typeof sounds) => Promise<void>;
//   isMuted: boolean;
//   toggleMute: () => void;
// }

// const SoundContext = createContext<ISoundContext | null>(null);

// export function SoundProvider({ children }: { children: React.ReactNode }) {
//   const [isMuted, setIsMuted] = useState(false);

//   async function play(name: keyof typeof sounds) {
//     if (isMuted) return;

//     const { sound } = await Audio.Sound.createAsync(sounds[name]);
//     await sound.playAsync();
//     sound.unloadAsync();
//   }

//   function toggleMute() {
//     setIsMuted((prev) => !prev);
//   }

//   return (
//     <SoundContext.Provider value={{ play, isMuted, toggleMute }}>
//       {children}
//     </SoundContext.Provider>
//   );
// }

// export function useSound() {
//   const ctx = useContext(SoundContext);
//   if (!ctx) {
//     throw new Error("useSound must be used inside a SoundProvider");
//   }
//   return ctx;
// }

import { createContext, useContext, useEffect, useState } from "react";
import { Audio } from "expo-av";
import { sounds } from "../constants/sounds";

interface ISoundContext {
  play: (name: keyof typeof sounds) => Promise<void>;
  isMuted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<ISoundContext | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);
  const [bgSound, setBgSound] = useState<Audio.Sound | null>(null);

  // ✅ Toca som de fundo automaticamente quando o Provider monta
  useEffect(() => {
    let soundInstance: Audio.Sound | null = null;

    async function loadBackgroundMusic() {
      if (isMuted) return;

      // cria som
      const { sound } = await Audio.Sound.createAsync(sounds.SoundTrack, {
        isLooping: true,   // ✅ música de fundo precisa loop
        volume: 0.5        // opcional
      });

      await sound.playAsync();
      setBgSound(sound);
      soundInstance = sound;
    }

    loadBackgroundMusic();

    // ✅ descarrega ao desmontar
    return () => {
      if (soundInstance) {
        soundInstance.unloadAsync();
      }
    };
  }, []);

  // ✅ Para/retoma música ao mutar/desmutar
  useEffect(() => {
    if (!bgSound) return;

    if (isMuted) {
      bgSound.pauseAsync();
    } else {
      bgSound.playAsync();
    }
  }, [isMuted, bgSound]);

  async function play(name: keyof typeof sounds) {
    if (isMuted) return;

    const { sound } = await Audio.Sound.createAsync(sounds[name]);
    await sound.playAsync();
    sound.unloadAsync();
  }

  function toggleMute() {
    setIsMuted(prev => !prev);
  }

  return (
    <SoundContext.Provider value={{ play, isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("useSound must be used inside a SoundProvider");
  }
  return ctx;
}
