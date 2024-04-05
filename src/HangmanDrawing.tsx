const HEAD = (
    <div className={"w-16 h-16 border-black border-[7px] rounded-full absolute top-8 -right-7"}/>
)

const BODY = (
    <div className={"h-24 w-2 bg-black absolute top-24 right-0"}/>
)

const RIGHT_ARM = (
    <div className={"h-20 w-2 bg-black rotate-45 absolute top-20 -right-7"}/>
)

const LEFT_ARM = (
    <div className={"h-20 w-2 bg-black -rotate-45 transform absolute top-20 right-7"}/>
)

const RIGHT_LEG = (
    <div className={"h-20 w-2 bg-black -rotate-45 absolute top-44 -right-7"}/>
)

const LEFT_LEG = (
    <div className={"h-20 w-2 bg-black rotate-45 absolute top-44 right-7"}/>
)

const BODY_PARTS = [
    HEAD,
    BODY,
    RIGHT_ARM,
    LEFT_ARM,
    RIGHT_LEG,
    LEFT_LEG

]

export function HangmanDrawing({numberOfGuesses}:{ numberOfGuesses: number }) {
    return (
        <div className={"relative"}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className={"h-8 w-2 bg-black absolute top-0 right-0"}/>
            <div className={"w-48 h-2 bg-black ml-28"}/>
            <div className={"h-96 w-2 bg-black ml-28"}/>
            <div className={"w-56 h-2 bg-black "}/>
        </div>
    )
}