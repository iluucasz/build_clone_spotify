import visa from "../../assets/cards/visa.svg";
import mastercard from "../../assets/cards/mastercard_card.svg";
import amex from "../../assets/cards/amex_card.svg";
import elo from "../../assets/cards/elo.svg";
import hyper from "../../assets/cards/hyper.svg";
import { FaCheck } from "react-icons/fa";

export const Plans = () => {
    return (
        <>
            <section className="bg-graySpotify flex flex-col items-center justify-center text-center">
                <div className="w-full h-full ">

                    <div className="p-6 flex flex-col gap-3 xl:p-20">
                        <h1 className="text-3xl font-bold xl:text-4xl">Escolha seu plano Premium</h1>
                        <p>Ouça sem limites no seu celular, alto-falante e em outros dispositivos.</p>
                        <span className="flex items-center justify-center gap-2">
                            <img src={visa} alt="icon visa" className="w-7 h-5" />
                            <img src={mastercard} alt="icon mastercard" className="w-7 h-5" />
                            <img src={amex} alt="icon amex" className="w-7 h-5" />
                            <img src={elo} alt="icon elo" className="w-7 h-5" />
                            <img src={hyper} alt="icon hyper" className="w-7 h-5" />
                            <span className="underline font-medium">+ outros 11</span>
                        </span>
                    </div>


                    <ul className="w-full h-full grid grid-cols-1 justify-items-center gap-4 mx-auto xl:grid-cols-4 xl:max-w-6xl">

                        {/* INDIVIDUAL */}

                        <li className="min-w-0 h-497px p-4 flex flex-col gap-8 bg-white max-w-400px rounded-md shadow-shadowSpotify xl:h-780px">

                            <div className="flex flex-col text-start gap-5 xl:justify-around xl:h-213px">
                                <div className="flex flex-col gap-1">
                                    <span className="flex flex-row w-24 items-center h-7 p-1 justify-center rounded-md bg-blueSpotify text-white font-bold text-sm">1 mês grátis</span>
                                    <h3 className="text-xl font-bold">Individual</h3>
                                    <p>
                                        R$ 21,90/mês após o período da oferta
                                        <p>1 conta</p>
                                    </p>
                                </div>
                                <hr className="bg-black h-2px" />
                            </div>

                            <div className="flex flex-col gap-2 text-start font-semibold">
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Ouça músicas sem anúncios</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Ouça em qualquer lugar — até quando estiver offline</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Ouça músicas na ordem que quiser</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Faça um plano pré-pago ou uma assinatura</p>
                                </div>
                            </div>

                            <div className="items-center flex flex-col gap-4 xl:mt-28">
                                <button className="bg-blackSpotify hover:bg-black text-white font-bold w-full h-12 py-2 px-4 rounded-full border-2 border-blackSpotify transition duration-150 ease-in-out hover:scale-105">Comece agora</button>
                                <div className="text-xs text-start">
                                    <p><span className="underline">Sujeito a Termos e Condições.</span> O mês grátis não está disponível para usuários que já usaram o Premium.</p>
                                </div>
                            </div>


                        </li>

                        {/* DUO */}

                        <li className="min-w-0 h-497px p-4 flex flex-col gap-8 bg-white max-w-400px rounded-md shadow-shadowSpotify xl:h-780px">

                            <div className="flex flex-col text-start gap-5 xl:justify-around xl:h-213px">
                                <div className="flex flex-col gap-1">
                                    <span className="flex flex-row w-24 items-center h-7 p-1 justify-center rounded-md bg-blueSpotify text-white font-bold text-sm">1 mês grátis</span>
                                    <h3 className="text-xl font-bold">Duo</h3>
                                    <p>
                                        R$ 27,90/mês após o período da oferta
                                        <p>2 conta</p>
                                    </p>
                                </div>
                                <hr className="bg-black h-2px" />
                            </div>

                            <div className="flex flex-col gap-2 text-start font-semibold">
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>2 contas Premium para pessoas que moram juntas</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Música sem anúncios, no modo offline e na ordem que você quiser</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Faça um plano pré-pago ou uma assinatura</p>
                                </div>
                            </div>

                            <div className="items-center flex flex-col gap-4 xl:mt-28">
                                <button className="bg-blackSpotify hover:bg-black text-white font-bold w-full h-12 py-2 px-4 rounded-full border-2 border-blackSpotify transition duration-150 ease-in-out hover:scale-105">Comece agora</button>
                                <div className="text-xs text-start">
                                    <p><span className="underline">Sujeito a Termos e Condições.</span> O mês grátis não está disponível para usuários que já usaram o Premium.</p>
                                </div>
                            </div>

                        </li>

                        {/* FAMILIA */}

                        <li className="min-w-0 h-497px p-4 flex flex-col gap-2 bg-white max-w-400px rounded-md shadow-shadowSpotify xl:h-780px">

                            <div className="flex flex-col text-start gap-5 xl:justify-around xl:h-213px">
                                <div className="flex flex-col gap-1">
                                    <span className="flex flex-row w-24 items-center h-7 p-1 justify-center rounded-md bg-blueSpotify text-white font-bold text-sm">1 mês grátis</span>
                                    <h3 className="text-xl font-bold">Família</h3>
                                    <p>
                                        R$ 34,90/mês após o período da oferta
                                        <p>6 conta</p>
                                    </p>
                                </div>
                                <hr className="bg-black h-2px" />
                            </div>

                            <div className="flex flex-col gap-2 text-start font-semibold">
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>6 contas Premium para familiares que moram no mesmo endereço</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Bloqueie músicas com conteúdo explícito</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Música sem anúncios, no modo offline e na ordem que você quiser</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Spotify Kids: um app separado, feito especialmente para crianças</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Faça um plano pré-pago ou uma assinatura</p>
                                </div>
                            </div>

                            <div className="items-center flex flex-col gap-4">
                                <button className="bg-blackSpotify hover:bg-black text-white font-bold w-full h-12 py-2 px-4 rounded-full border-2 border-blackSpotify transition duration-150 ease-in-out hover:scale-105">Comece agora</button>
                                <div className="text-xs text-start">
                                    <p><span className="underline">Sujeito a Termos e Condições.</span> O mês grátis não está disponível para usuários que já usaram o Premium.</p>
                                </div>
                            </div>

                        </li>

                        {/* UNIVERSITÁRIO */}

                        <li className="min-w-0 h-497px p-4 flex flex-col bg-white max-w-400px rounded-md shadow-shadowSpotify xl:h-780px">

                            <div className="flex flex-col gap-1 h-60 text-start xl:gap-2">
                                <span className="flex flex-row w-40 items-center h-7 p-1 justify-center rounded-md bg-blueSpotify text-white font-bold text-sm">1 mês grátis ao assinar</span>
                                <span className="flex flex-row w-56 items-center h-7 p-1 justify-center rounded-md bg-white text-blueSpotify font-bold text-sm border border-blueSpotify">Pagamento único disponível</span>
                                <h3 className="text-xl font-bold">Universitário</h3>
                                <p>
                                    R$ 11,90/mês após o período da oferta
                                    <p>1 conta</p>
                                </p>
                                <hr className="bg-black h-2px mt-3" />
                            </div>

                            <div className="flex flex-col gap-1 text-start font-semibold">
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Desconto especial para estudantes universitários elegíveis</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Ouça músicas sem anúncios</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Ouça em qualquer lugar — até quando estiver offline</p>
                                </div>
                                <div className="flex flex-1 items-center gap-4">
                                    <span><FaCheck /></span><p>Ouça músicas na ordem que quiser</p>
                                </div>
                            </div>

                            <div className="items-center flex flex-col gap-4 mt-2 xl:mt-32">
                                <button className="bg-blackSpotify hover:bg-black text-white font-bold w-full h-12 py-2 px-4 rounded-full border-2 border-blackSpotify transition duration-150 ease-in-out hover:scale-105">Comece agora</button>
                                <div className="text-xs text-start">
                                    <p>Oferta disponível somente para estudantes de instituições de ensino superior credenciadas. O mês grátis não está disponível para usuários que já experimentaram o Premium. <span className="underline">Sujeito aos Termos e Condições</span> da oferta do Spotify de desconto para universitários.</p>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}