export function HangmanWord({guessedLetters, wordToGuess, reveal=false}: {guessedLetters:string[], wordToGuess:string,reveal:boolean}) {
    return (
        <div className={"font-bold text-5xl uppercase flex space-x-4"}>
            {wordToGuess.split("").map((letter, index) => (
                <span key={index} style={{borderBottom: ".1em solid black"}}>
                    <span
                    style={{
                        visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                        color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
                    }}>{letter}</span>
                </span>
            ))}
        </div>
    )
}
