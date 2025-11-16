// import { useEffect, useState } from "react";
// import { programs } from "../constants/Programs";
// import { playSound } from "../utils/sounds";

// export const useQuiz = () => {
//     const [score, setScore] = useState(0);
//     const [index, setIndex] = useState(0);
//     const [finished, setFinished] = useState(false);
//     const [wrong, setWrong] = useState(0);
//     const [code, setCode] = useState("");
//     const [start, setStart] = useState(true);
//     const [answers, setAnswers] = useState<string[]>([]);


//     // 1) initial value
//     useEffect(() => {
//         setCode("041");
//     }, []);

//     // 2) react to changes
//     // useEffect(() => {
//     //     console.log("Alterado para", code);
//     //     const list = programs[0][code as keyof typeof programs[0]] ?? [];
//     //     setAnswers(list);
//     //     setIndex(0);
//     // }, [code, start]);
//     // useEffect(() => {
//     //     console.log("Alterado para", code);
//     //     const list = programs[0][code as keyof typeof programs[0]] ?? [];
//     //     setAnswers(list);
//     //     setIndex(0);
//     // }, [code]);
//     useEffect(() => {
//     console.log("Alterado para", code);

//     const found = programs.find(p => p[code]);

//     const list = found?.[code as ProgramCode] ?? [];

//     setAnswers(list);
//     setIndex(0);
// }, [code]);





//     // const answers = programs[0].p041;
//     // const answers = programs[0][code as keyof typeof programs[0]] ?? [];
//     // const correctAnswer = answers[index];
//     const correctAnswer = answers[index] ?? "";


//     // Recebe a opções escolhida e faz um set com o código do programa
//     // Ai com isto ele vai me permitir poder acessar o array que está na opção escolhida.s
//     const setProgram = (code: string) => {
//         // answers = programs:
//     }

//     const verifyOption = (option: string) => {
//         setStart(false);
//         console.log("Option:", option);
//         console.log("Correct answer:", correctAnswer);

//         // ✅ ACERTOU
//         if (option.toLowerCase() === correctAnswer.toLowerCase()) {


//             setScore((s) => s + (3 - wrong));
//             setWrong(0);
//             playSound("win")
//             // ✅ Próxima pergunta
//             setIndex((i) => {
//                 if (i + 1 >= answers.length) {
//                     setFinished(true);
//                     return i;
//                 }
//                 return i + 1;
//             });

//             return;
//         }

//         // ✅ ERROU


//         setWrong((prev) => {
//             const newWrong = prev + 1;
//             // handleWrong();
//             playSound("lose")
//             // ✅ 3 erros → avança pergunta
//             if (newWrong >= 3) {
//                 setIndex((i) => {
//                     if (i + 1 >= answers.length) {
//                         setFinished(true);
//                         return i;
//                     }
//                     return i + 1;
//                 });
//                 return 0;
//             }

//             return newWrong;
//         });
//     };

//     const gameScore = () => {
//         return `${code} -> ${index} = ${score}`
//     }

//     const remaindingMoves = () => {
//         return `Tentativa ${wrong + 1} de 3`
//     }

//     const reset = () => {
//         setIndex(0);
//         setWrong(0);
//         setScore(0);
//         setStart(true);
//     }

//     return {
//         index,
//         score,
//         wrong,
//         finished,
//         alternatives: ["A", "B", "C", "D"],
//         start,


//         verifyOption,
//         gameScore,
//         remaindingMoves,
//         reset,
//         setCode
//     };
// };


import { useEffect, useState } from "react";
import { programs, ProgramCode } from "../constants/Programs";
import { playSound } from "../utils/sounds";

export const useQuiz = () => {
    const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [wrong, setWrong] = useState(0);
    const [code, setCode] = useState<ProgramCode>("041");
    const [start, setStart] = useState(true);
    const [answers, setAnswers] = useState<string[]>([]);

    useEffect(() => {
        console.log("Alterado para", code);

        const found = programs.find(p => p[code] !== undefined);

        const list = found?.[code] ?? [];

        setAnswers(list);
        setIndex(0);
    }, [code]);
    

    const correctAnswer = answers[index] ?? "";

    const verifyOption = (option: string) => {
        setStart(false);

        if (option.toLowerCase() === correctAnswer.toLowerCase()) {
            setScore(s => s + (3 - wrong));
            setWrong(0);
            playSound("win");

            setIndex(i => {
                if (i + 1 >= answers.length) {
                    setFinished(true);
                    return i;
                }
                return i + 1;
            });

            return;
        }

        setWrong(prev => {
            const newWrong = prev + 1;

            playSound("lose");

            if (newWrong >= 3) {
                setIndex(i => {
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

    const gameScore = () => `${code} -> ${index} = ${score}`;

    const remaindingMoves = () => `Tentativa ${wrong + 1} de 3`;

    const reset = () => {
        setIndex(0);
        setWrong(0);
        setScore(0);
        setStart(true);
    };

    return {
        index,
        score,
        wrong,
        finished,
        alternatives: ["A", "B", "C", "D"],
        start,
        verifyOption,
        gameScore,
        remaindingMoves,
        reset,
        setCode,
    };
};
