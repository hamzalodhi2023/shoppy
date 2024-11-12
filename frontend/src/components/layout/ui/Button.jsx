export const Button1 = ({ text, onclick }) => {
    return (
        <button onClick={onclick} className={`btn w-fit text-white border-none inline-block transition duration-300 ease-in-out bg-[#e97730] hover:bg-[#ff8f34]`}>
            {text}
        </button>
    )
}
export const Button2 = ({ text, onclick }) => {
    return (
        <button onClick={onclick} className="btn w-fit text-white border-none inline-block transition duration-300 ease-in-out bg-[#383838] hover:bg-[#5e5e5e]">
            {text}
        </button>
    )
}
