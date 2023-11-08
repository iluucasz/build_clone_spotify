import spotifyLogo from "../../assets/spotify-logo.png";
import { FaBars } from "react-icons/fa"

export const Header = () => {
    return (

        <header className="w-full h-14 bg-black text-white justify-center lg:h-20">
            <div className="flex w-full h-full items-center justify-between px-4 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">

                <div className="flex flex-1 items-center justify-between">
                    <img src={spotifyLogo} alt="logo spotify" className="w-24 lg:w-32 cursor-pointer" />
                    <FaBars className="text-white lg:hidden" size={25} />
                </div>

                <nav className="w-497px max-lg:hidden">
                    <ul className="flex justify-between font-bold">
                        <li>Premium</li>
                        <li>Suporte</li>
                        <li>Baixar</li>
                        <span className="font-thin">|</span>
                        <li>Inscrever-se</li>
                        <li>Entrar</li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}