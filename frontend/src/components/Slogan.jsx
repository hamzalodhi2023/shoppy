function Slogan() {
    return (
        <section className="w-full h-[540px] flex flex-col items-start justify-center px-4 py-16 bg-cover bg-center" style={{ backgroundImage: "url('/images/slogan-section.png')" }}>
            <div className="z-10 max-w-4xl">
                <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                    From Essentials to Extras, Shoppy has its all.
                </h1>
                <p className="max-w-3xl text-lg md:text-xl text-white/90">
                    Shoppy is here to make every shopping journey unique, with a diverse selection of items that cover both the basics and those special extras that add a touch of style and convenience to your life.
                </p>
            </div>
        </section>
    )
}

export default Slogan