import logo from "../../assets/spotify-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white">

                <div className="pt-14 px-8 py-8 flex flex-col">

                    <div className="lg:flex lg:gap-4">


                        <img src={logo} alt="logo spotify" className="w-24 h-8 xl:w-32 xl:h-10" />


                        <div className="flex flex-col gap-20 mt-12 md:flex-row lg:mt-4 xl:justify-around xl:w-full xl-gap-0">

                            <div className="flex flex-col gap-4">
                                <h3 className="text-grayParagraphSpotify font-semibold text-sm">EMPRESA</h3>
                                <ul className="flex flex-col gap-4 mt-4">
                                    <li>Sobre</li>
                                    <li>Empregos</li>
                                    <li>For the Record</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-grayParagraphSpotify font-semibold text-sm">COMUNIDADES</h3>
                                <ul className="flex flex-col gap-4 mt-4">
                                    <li>Para artistas</li>
                                    <li>Desenvolvedores</li>
                                    <li>Plubicidade</li>
                                    <li>Investidores</li>
                                    <li>Fornecedores</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-grayParagraphSpotify font-semibold text-sm">LINKS ÚTEIS</h3>
                                <ul className="flex flex-col gap-4 mt-4">
                                    <li>Suporte</li>
                                    <li>Player da Web</li>
                                    <li>Plubicidade</li>
                                    <li>Aplicativos móvel grátis</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-24 flex gap-5 lg:mt-6 lg:ml-28">
                            <FaInstagram size={44} className="bg-grayIconSpotify p-2 rounded-full text-white lg:w-12 lg:h-12" />
                            <FaTwitter size={44} className="bg-grayIconSpotify p-3 rounded-full text-white lg:w-12 lg:h-12" />
                            <FaFacebookF size={44} className="bg-grayIconSpotify p-3 rounded-full text-white lg:w-12 lg:h-12" />
                        </div>
                    </div>

                    <div className="flex text-10px text-grayParagraphSpotify gap-8 md:text-xs">

                        <ul className="grid grid-cols-3 w-full grid-rows-2 mt-8 gap-2 md:grid-cols-5 md:mt-16 lg:grid-cols-6 lg:text-center">
                            <li>Legal</li>
                            <li>Centro de privacidade</li>
                            <li>Política de privacidade</li>
                            <li>Cookies</li>
                            <li>Sobre anúncios</li>
                            <li>Acessibilidade</li>
                        </ul>


                        <div className="flex flex-col">
                            <div className="flex flex-1 items-center gap-2">
                                <FaGlobeEurope />
                                <p> Brasil(português)</p>
                            </div>

                            <div className="flex flex-1 items-start gap-2 ml-2">
                                <FaRegCopyright />
                                <p>2023 Spotify AB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}