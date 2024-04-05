import styles from './Keyboard.module.css';

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]


export function Keyboard({activeLetters, inactiveLetters, addGuessedLetter,disabled=false}: {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
    disabled: boolean
}) {
    return (
        <div className={"gap-2 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10"}>
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                return (
                    <button
                        disabled={isActive || isInactive || disabled}
                        onClick={() => addGuessedLetter(key)}
                        key={key}
                        className={`${styles.btn} ${isActive ? styles.active : ''}
                        ${isInactive ? styles.inactive : ''}`}>
                        {key}
                    </button>
                )
            })}
        </div>
    )
}