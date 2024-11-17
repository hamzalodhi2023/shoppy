export const Button1 = ({ text, onclick, size, type }) => {
    return (
        <button
            className={`btn w-${size} bg-gradient-to-b from-[#FF7E31] to-[#E62C03] text-white rounded-md shadow-md border-none hover:shadow-[rgba(253,76,0,0.5)_0_3px_8px] h-10 px-5`}
            role="button"
            onClick={onclick}
            type={type}
        >
            {text}
        </button>
    )
}
export const Button2 = ({ text, onclick, size }) => {
    return (
        <button
            onClick={onclick}
            className={`btn w-${size} bg-gradient-to-b from-[#747474] to-[#383838] text-white rounded-md shadow-md border-none hover:shadow-[rgba(56,56,56,0.5)_0_3px_8px] h-10 px-5`}>
            {text}
        </button>
    )
}
