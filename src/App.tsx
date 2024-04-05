import {useCallback, useEffect, useState} from "react";
import words from "./wordList.json";
import {HangmanDrawing} from "./HangmanDrawing.tsx";
import {HangmanWord} from "./HangmanWord.tsx";
import {Keyboard} from "./Keyboard.tsx";

function App() {
    const getWord = () => words[Math.floor(Math.random() * words.length)];
    const [wordToGuess, setWordToGuess] = useState<string>(getWord);

    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const isLoser = incorrectLetters.length >= 6;

    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isLoser || isWinner) return;

        setGuessedLetters(current => [...current, letter])
    }, [guessedLetters, isLoser, isWinner])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/)) return;

            e.preventDefault()
            addGuessedLetter(key)
        }
        document.addEventListener("keypress", handleKeyDown)


        return () => {
            document.removeEventListener("keypress", handleKeyDown)
        }
    }, [guessedLetters]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;
            if (key !== "Enter") return;

            e.preventDefault()
            setGuessedLetters([]);
            setWordToGuess(getWord());
        }
        document.addEventListener("keypress", handleKeyDown)


        return () => {
            document.removeEventListener("keypress", handleKeyDown)
        }
    }, [guessedLetters]);

    return (
        <div className={"flex flex-col  mx-auto gap-4 items-center max-w-[800px]"}>
            <div className={"text-center"}>
                {isWinner && "You win! refresh to play again"}
                {isLoser && "You lost! refresh to play again"}
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
            <Keyboard
                disabled={isLoser || isWinner}
                addGuessedLetter={addGuessedLetter}
                inactiveLetters={incorrectLetters}
                activeLetters={guessedLetters.filter(letter =>
                    wordToGuess.includes(letter))}/>
        </div>
    )
}

export default App;