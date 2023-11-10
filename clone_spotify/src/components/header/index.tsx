import spotifyLogo from "../../assets/spotify-logo.png";
import { FaBars } from "react-icons/fa";

export const Header = () => {
    return (
        <header className="w-full h-14 bg-black text-white lg:h-20">
            <div className="flex items-center w-full h-full px-4 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">

                <div className="flex flex-1 justify-between items-center">
                    <img src={spotifyLogo} alt="logo spotify" className="cursor-pointer w-24 lg:w-32" />
                    <FaBars className="text-white lg:hidden" size={25} />
                </div>

                <nav className="w-497px max-lg:hidden">
                    <ul className="flex justify-between font-bold">
                        <li className="link">Premium</li>
                        <li className="link">Suporte</li>
                        <li className="link">Baixar</li>
                        <span className="font-thin">|</span>
                        <li className="link">Inscrever-se</li>
                        <li className="link">Entrar</li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}