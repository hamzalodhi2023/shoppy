export const Button1 = ({ text, onclick, size, type }) => {
    return (
        <button
            class={`btn w-${size} bg-gradient-to-b from-[#FF7E31] to-[#E62C03] text-white rounded-md shadow-md border-none hover:shadow-[rgba(253,76,0,0.5)_0_3px_8px] h-10 px-5`}
            role="button"
            onClick={onclick}
            type={type}
        >
            {text}
        </button>
        // <button onClick={onclick} className="btn w-fit text-white border-none inline-block transition duration-300 ease-in-out bg-[#e97730] hover:bg-[#ff8f34]">
        //     {text}
        // </button>
    )
}
export const Button2 = ({ text, onclick, size }) => {
    return (
        <button onClick={onclick} className="btn w-fit text-white border-none inline-block transition duration-300 ease-in-out bg-[#383838] hover:bg-[#5e5e5e]">
            {text}
        </button>
    )
}
