export const Button1 = ({ text, onclick }) => {
    return (
        <button onClick={onclick} className={`inline-block w-fit px-4 py-2 mr-5 font-semibold text-white transition duration-300 ease-in-out bg-[#e97730] rounded hover:bg-[#ff8f34]`}>
            {text}
        </button>
    )
}
export const Button2 = ({ text, onclick }) => {
    return (
        <button onClick={onclick} className="inline-block px-4 py-2 mr-5 font-semibold text-white transition duration-300 ease-in-out bg-[#383838] rounded hover:bg-[#5e5e5e] w-fit">
            {text}
        </button>
    )
}
