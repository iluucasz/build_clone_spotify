import logo from "../../assets/spotify-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="flex flex-col pt-14 px-8 py-8 mx-auto xl:max-w-6xl">

                <div className="lg:flex lg:gap-4">
                    <img src={logo} alt="logo spotify" className="w-24 h-8 xl:w-32 xl:h-10" />

                    <div className="flex flex-col gap-20 mt-12 md:flex-row lg:mt-4 xl:justify-around xl:w-full xl-gap-0">

                        <div className="flex flex-col gap-4">
                            <h3 className="text-grayParagraphSpotify text-sm font-semibold ">EMPRESA</h3>
                            <ul className="flex flex-col gap-4 mt-4">
                                <li className="link">Sobre</li>
                                <li className="link">Empregos</li>
                                <li className="link">For the Record</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-grayParagraphSpotify text-sm font-semibold">COMUNIDADES</h3>
                            <ul className="flex flex-col gap-4 mt-4">
                                <li className="link">Para artistas</li>
                                <li className="link">Desenvolvedores</li>
                                <li className="link">Plubicidade</li>
                                <li className="link">Investidores</li>
                                <li className="link">Fornecedores</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-grayParagraphSpotify text-sm font-semibold">LINKS ÚTEIS</h3>
                            <ul className="flex flex-col gap-4 mt-4">
                                <li className="link">Suporte</li>
                                <li className="link">Player da Web</li>
                                <li className="link">Plubicidade</li>
                                <li className="link">Aplicativos móvel grátis</li>
                            </ul>
                        </div>

                    </div>

                    <div className="flex gap-5 mt-24 lg:mt-6 lg:ml-28">
                        <FaInstagram size={44} className="link p-2 bg-grayIconSpotify text-white rounded-full lg:w-12 lg:h-12" />
                        <FaTwitter size={44} className="link p-3 bg-grayIconSpotify text-white rounded-full lg:w-12 lg:h-12" />
                        <FaFacebookF size={44} className="link p-3 bg-grayIconSpotify text-white rounded-full lg:w-12 lg:h-12" />
                    </div>

                </div>

                <div className="flex gap-8 text-grayParagraphSpotify text-10px md:text-xs">

                    <ul className="grid grid-cols-3 grid-rows-2 gap-2 w-full mt-8 md:grid-cols-5 md:mt-16 lg:grid-cols-6 lg:text-center">
                        <li className="link">Legal</li>
                        <li className="link">Centro de privacidade</li>
                        <li className="link">Política de privacidade</li>
                        <li className="link">Cookies</li>
                        <li className="link">Sobre anúncios</li>
                        <li className="link">Acessibilidade</li>
                    </ul>

                    <div className="flex flex-col">
                        <div className="flex flex-1 gap-2 items-center">
                            <FaGlobeEurope />
                            <p className="link"> Brasil(português)</p>
                        </div>

                        <div className="flex flex-1 gap-2 ml-2 items-start">
                            <FaRegCopyright />
                            <p>2023 Spotify AB</p>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
}