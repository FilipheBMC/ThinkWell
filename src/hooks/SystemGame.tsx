// import { View, Text } from 'react-native'
// import React, { useState } from 'react'
// import { programs } from '../constants/Programs';

// const SystemGame = () => {

//     const [score, setScore] = useState(0);
//     const [index, setIndex] = useState(0);
//     const [finished, setFinished] = useState(false);
//     const [selected, setSelected] = useState<string | null>(null);
//     const [wrong, setWrong] = useState(0);

//     const current = programs

//     const answers = programs[0].p041;
//     const correctAnswer = answers[index]; // resposta correta da pergunta atual

//     const answer = (option: string) => {
//         setSelected(option);

//         verifyOption(option);

//         // avança para próxima questão
//         if (index + 1 < answers.length) {
//             setIndex((i) => i + 1);
//             console.log("Alterei o meu index porque acertei a questão")
//         } else {
//             setFinished(true);
//         }
//     };

//     const verifyOption = (option: string) => {
//         if (option === correctAnswer) {

//             // ✅ cálculo correto considerando erros
//             setScore((s) => s + (3 - wrong));

//             // ✅ próxima pergunta
//             setIndex((i) => i + 1);
//             setWrong(0);

//         } else {

//             // ✅ usa versão funcional para pegar o valor real atualizado
//             setWrong((prev) => {
//                 const newWrong = prev + 1;

//                 if (newWrong === 3) {
//                     console.log("Mudei de index porque a quantidade de erros chegou a 3");

//                     setIndex((i) => i + 1); // troca pergunta
//                     return 0; // zera erros
//                 }

//                 return newWrong;
//             });
//         }
//     };


//     return (

//   )
// }

// export default SystemGame

// import { useState } from "react";
// import { programs } from "../constants/Programs";
// import { playSound } from "../utils/sounds";

// export const useQuiz = () => {
//   const [score, setScore] = useState(0);
//   const [index, setIndex] = useState(0);
//   const [finished, setFinished] = useState(false);
//   const [wrong, setWrong] = useState(0);

//   const answers = programs[0].p041;
//   const correctAnswer = answers[index];

//   const handleWrong = () => {
//     playSound("lose")
//   }

//   const verifyOption = (option: string) => {
//     if (option === correctAnswer) {
//       setScore((s) => s + (3 - wrong)); // pontuação
//       setWrong(0);
//       console.log("Acertei")
//       setIndex((i) => i + 1);
//       console.log("Passando pro próximo")
//     } else {
//       setWrong((prev) => {
//         const newWrong = prev + 1;
//         console.log("Errei")
//         handleWrong();
//         if (newWrong === 3) {
//           setIndex((i) => i + 1);
//           return 0;
//         }
//         return newWrong;
//       });
//     }
//   };

//   return {
//     index,
//     score,
//     wrong,
//     finished,
//     alternatives: ["a", "b", "c", "d"], // ← alternativas
//     verifyOption,
//   };
// };


import { useEffect, useState } from "react";
import { programs } from "../constants/Programs";
import { playSound } from "../utils/sounds";

export const useQuiz = () => {
    const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [wrong, setWrong] = useState(0);
    const [code , setCode] = useState("");

    useEffect(() => {
        setCode(("p041"))
    },[])

    // const answers = programs[0].p041;
    const answers = programs[0][code as keyof typeof programs[0]] ?? [];
    const correctAnswer = answers[index];

    const verifyOption = (option: string) => {
        console.log("Option:", option);
        console.log("Correct answer:", correctAnswer);

        // ✅ ACERTOU
        if (option.toLowerCase() === correctAnswer.toLowerCase()) {
            

            setScore((s) => s + (3 - wrong));
            setWrong(0);
            playSound("win")
            // ✅ Próxima pergunta
            setIndex((i) => {
                if (i + 1 >= answers.length) {
                    setFinished(true);
                    return i;
                }
                return i + 1;
            });

            return;
        }

        // ✅ ERROU


        setWrong((prev) => {
            const newWrong = prev + 1;
            // handleWrong();
            playSound("lose")
            // ✅ 3 erros → avança pergunta
            if (newWrong >= 3) {
                setIndex((i) => {
                    if (i + 1 >= answers.length) {
                        setFinished(true);
                        return i;
                    }
                    return i + 1;
                });
                return 0;
            }

            return newWrong;
        });
    };

    const gameScore = () => {
        return `${code} -> ${index} = ${score}`
    }

    const remaindingMoves = () => {
        return `Tentativa ${wrong+1} de 3`
    }

    const reset = () => {
        setIndex(0);
        setWrong(0);
        setScore(0);
    }

    return {
        index,
        score,
        wrong,
        finished,
        alternatives: ["A", "B", "C", "D"],

        verifyOption,
        gameScore,
        remaindingMoves,
        reset,
    };
};
