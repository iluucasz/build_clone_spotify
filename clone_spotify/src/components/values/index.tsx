export const Values = () => {
    return (
        <section className="flex flex-col w-full h-415px bg-blueSpotify text-white md:h-80 xl:h-96">

            <div className="flex flex-col justify-between w-full h-full pt-12 pl-4 pb-6 pr-4 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">

                <div className="flex flex-col gap-7">
                    <h1 className="text-3xl font-bold md:text-4xl">Aproveite 1 mês grátis de Premium</h1>
                    <h2 className="text-lg font-semibold md:text-2xl">Depois, pague somente R$ 21,90/mês. Cancele quando quiser.</h2>
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                    <button className="h-12 py-2 px-4 bg-blackSpotify hover:bg-black text-white font-bold rounded-full border-2 border-blackSpotify transition duration-150 ease-in-out hover:scale-105 md:w-48">Comece agora</button>
                    <button className="h-12 py-2 px-4 bg-blueSpotify hover:bg-blueSpotifyHover text-white font-bold rounded-full border-2 border-sky-50 transition duration-150 ease-in-out hover:scale-105 md:w-48">Ver planos</button>
                </div>

                <div className="flex text-xs">
                    <p><span className="underline cursor-pointer">Sujeito a Termos e Condições.</span> O mês grátis não está disponível para usuários que já experimentaram o Premium.</p>
                </div>
            </div>

        </section>
    )
}