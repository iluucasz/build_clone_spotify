import music from "../../assets/proposal/music.png";
import song from "../../assets/proposal/song.png";
import warning from "../../assets/proposal/warning.png";
import fone from "../../assets/proposal/img.svg";

export const Proposal = () => {
    return (
        <section className="flex flex-col w-full h-full mx-auto bg-white md:items-center md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
            <h1 className="flex justify-center py-6 text-2xl font-bold md:text-4xl md:py-20">Por que ser Premium?</h1>

            <ul className="flex flex-col items-start gap-6 md:grid grid-cols-2 xl:grid-cols-4">

                <li className="flex gap-4 h-36 ml-4 md:w-360px lg:w-470px xl:flex-col xl:items-center xl:text-center xl:w-285px xl:h-285px xl:m-0">
                    <img src={music} alt="icone música" className="w-28 h-28 xl:w-36 xl:h-36" />
                    <div className="flex flex-col gap-4 py-4">
                        <h3 className="font-bold text-xl">Modo Offline.</h3>
                        <p className="font-medium">Ouça música onde estiver.</p>
                    </div>
                </li>

                <li className="flex gap-4 h-36 ml-4 md:w-360px lg:w-470px xl:flex-col xl:items-center xl:text-center xl:w-285px xl:h-285px xl:m-0">
                    <img src={warning} alt="icone de som" className="w-28 h-28 xl:w-36 xl:h-36" />
                    <div className="flex flex-col gap-4 py-4">
                        <h3 className="font-bold text-xl">Ouça músicas sem anúncios.</h3>
                        <p className="font-medium">Curta música sem anúncios.</p>
                    </div>
                </li>

                <li className="flex gap-4 h-36 ml-4 md:w-360px lg:w-470px xl:flex-col xl:items-center xl:text-center xl:w-285px xl:h-285px xl:m-0">
                    <img src={song} alt="icone de anuncio" className="w-28 h-28 xl:w-36 xl:h-36" />
                    <div className="flex flex-col gap-4 py-4">
                        <h3 className="font-bold text-xl">Ouça na ordem que quiser.</h3>
                        <p className="font-medium">Qualquer música em qualquer ordem.</p>
                    </div>
                </li>

                <li className="flex gap-4 h-36 ml-4 md:w-360px lg:w-470px xl:flex-col xl:items-center xl:text-center xl:w-285px xl:h-285px xl:m-0">
                    <img src={fone} alt="icone de fone" className="w-28 h-28 xl:w-36 xl:h-36" />
                    <div className="flex flex-col gap-4 py-4">
                        <h3 className="font-bold text-xl">Qualidade de som superior</h3>
                        <p className="font-medium">Sinta o som.</p>
                    </div>
                </li>

            </ul>
        </section>
    )
}