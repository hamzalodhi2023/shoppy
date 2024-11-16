import { Button1 } from "./layout/ui/Button"

function Hero({ heading, paragraph, img }) {
    return (
        <div className="relative flex items-center justify-center w-full min-h-screen">
            <div className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="absolute inset-0 bg-black/80"></div>
            <div className="relative w-full h-full px-4 py-24 mx-auto md:py-32">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl max-w-4xl md:text-6xl font-bold text-[#e97730] mb-6">
                        {heading}
                    </h1>
                    <p className="max-w-4xl mb-8 text-lg text-white md:text-xl">
                        {paragraph}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Hero