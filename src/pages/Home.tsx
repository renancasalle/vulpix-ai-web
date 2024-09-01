import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLastPage } from '../hooks/useLastPage';
import { TypeAnimation } from 'react-type-animation';
import { Drawer } from '../components/Drawer';
import { Slider } from '../components/Slider';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
import Hamburger from 'hamburger-react';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
    useLastPage();

    const [isScrolled, setScrolled] = useState<Boolean>(false);
    useEffect(() => {
        window.addEventListener("scroll", () => window.scrollY > 0 ? setScrolled(true) : setScrolled(false));
        AOS.init();
    }, []);

    const [navBackgroundColor, setNavBackgroundColor] = useState<String>("transparent");
    useEffect(() => isScrolled ? setNavBackgroundColor("bg-gray/85 backdrop-blur-sm") : setNavBackgroundColor("transparent"), [isScrolled]);

    const [isMenuOpened, setMenuOpened] = useState(false);
    useEffect(() => { isMenuOpened ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto" }, [isMenuOpened]);

    return (
        <div className="h-screen bg-black max-w-full">
            <Drawer isMenuOpened={isMenuOpened} setMenuOpened={() => setMenuOpened(false)} />

            <header id="home" className="bg-header bg-cover h-full relative after:content-[''] after:bg-fade after:absolute after:bottom-0 after:w-full after:h-[160px]">
                <nav className={`fixed z-20 w-screen flex justify-center mobile:justify-between items-center h-20 top-0 transition-all duration-300 ${navBackgroundColor}`}>
                    <div className="w-1/4 flex items-center justify-end mobile:justify-start">
                        <a href="#home" className="flex items-center mobile:ml-4">
                            <img className="h-[4.5rem] pointer-events-none" src="/vulpixai-logo.jpeg" alt="Logo vulpix.AI" />
                            <h4 className="text-2xl text-white ml-[-8px] font-bold">vulpix.<span className="text-purple">AI</span></h4>
                        </a>
                    </div>

                    <ul className="text-white-gray text-[1.04rem] flex justify-center select-none w-1/2 mx-12 mobile:hidden">
                        <li className="mx-4 flex items-center"><a className="hover:text-purple transition-all" href="#home">Home</a></li>
                        <li className="mx-4 flex items-center"><a className="hover:text-purple transition-all" href="#galeria">Galeria</a></li>
                        <li className="mx-4 flex items-center"><a className="hover:text-purple transition-all" href="#planos">Planos</a></li>
                        <li className="mx-4 flex items-center text-nowrap"><a className="hover:text-purple transition-all" href="#perguntas">Perguntas Frequentes</a></li>
                    </ul>

                    <div className="w-1/4 flex items-center mobile:hidden">
                        <div className='flex items-center w-[172px]'>
                            <Link to="/login" className="h-8 mr-4 text-white-gray text-[1.04rem] hover:text-purple transition-all flex items-center">Entrar</Link>
                            <Link to="/signup" className="h-9 px-4 text-nowrap text-[1.04rem] bg-purple flex items-center text-white rounded-md hover:bg-purple-dark transition-all">Inscrever-se</Link>
                        </div>
                    </div>

                    <div className="hidden mobile:block mr-6">
                        <Hamburger direction="right" toggled={isMenuOpened} toggle={setMenuOpened} color="#5d5aff" />
                    </div>
                </nav>

                <div className="flex flex-col justify-center items-center text-white-gray h-full">
                    <div className="flex flex-col items-center mt-[-2rem]">
                        <h1 className="text-6xl text-center font-bold mt-20 animate-slideDown select-none mobile:text-4xl">Seu Agente de <span className="text-purple">Marketing</span>.</h1>
                        <span className="text-center mobile:text-base text-xl my-8 h-14 mobile:h-24 mobile:w-[20rem]">
                            <TypeAnimation
                                sequence={[1200, 'Impulsione seu negócio com IA: Desenvolva campanhas únicas e impactantes em poucos minutos, \nutilizando o poder da Inteligência Artificial.']}
                                speed={58}
                                repeat={1}
                                style={{ whiteSpace: 'pre-line' }}
                            />
                        </span>
                        <a href="#galeria" className="h-14 mobile:h-12 px-7 mobile:px-5 text-nowrap text-xl mobile:text-lg bg-purple flex items-center text-white rounded-md hover:px-9 duration-500 ease-in-out">Conheça Nossos Serviços</a>
                    </div>
                </div>

                <a href="#hero-section" className="animate-fadeIn delay-1000 opacity-0 absolute mobile:bottom-6 bottom-2 left-[50%] -translate-x-[50%] z-10">
                    <img className="h-12 mobile:h-10 animate-moveArrow direction-alternate select-none pointer-events-none" src="/arrow-down.svg" />
                </a>
            </header>


            <section id="hero-section" className="flex mobile:flex-col justify-center pt-24 pb-48 mobile:pb-32 text-white-gray text-[1.04rem] overflow-x-hidden">
                <div className="flex flex-col items-center -mr-12 mobile:mr-0" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                    <div className="w-24 h-24 rounded-full bg-purple"></div>
                    <h4 className="font-bold mt-10">1. Lorem Ipsum</h4>
                    <p className="w-64 text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem earum quos quisquam.</p>
                </div>

                <div className="flex flex-col items-center mobile:my-14" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <div className="w-24 h-24 mx-60 rounded-full bg-purple relative
                    before:content-[''] mobile:before:hidden before:absolute before:-left-[8.5rem] before:top-[50%] before:-translate-y-[50%] before:-translate-x-[50%] before:w-60 before:h-[2px] before:bg-white
                    after:content-[''] mobile:after:hidden after:absolute after:-right-[8.5rem] after:top-[50%] after:-translate-y-[50%] after:translate-x-[50%] after:w-60 after:h-[2px] after:bg-white">
                    </div>
                    <h4 className="font-bold mt-10">2. Lorem Ipsum</h4>
                    <p className="w-64 text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem earum quos quisquam.</p>
                </div>

                <div className="flex flex-col items-center -ml-12 mobile:ml-0" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                    <div className="w-24 h-24 rounded-full bg-purple"></div>
                    <h4 className="font-bold mt-10">3. Lorem Ipsum</h4>
                    <p className="w-64 text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem earum quos quisquam.</p>
                </div>
            </section>


            <section id="galeria" className="pb-40 flex flex-col justify-center items-center overflow-x-hidden">
                <h1 className="text-4xl text-center text-white-gray font-bold select-none mobile:text-2xl mobile:w-80" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Construído <span className="text-purple">exclusivamente</span> para você.</h1>
                <p className="mt-6 mb-24 text-white-gray w-[54rem] mobile:w-80 text-center mobile:text-base" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam velit quidem ipsa unde ex tenetur quia neque, nesciunt id quod necessitatibus modi sapiente nam earum cumque at? Quas, maxime illum.</p>
                <div data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                    <Slider />
                </div>
            </section>


            <section id="planos" className="pb-32 flex flex-col items-center overflow-x-hidden">
                <h1 className="text-4xl text-center text-white-gray font-bold select-none mobile:text-2xl" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Comece por nossos <span className="text-purple">planos</span>.</h1>
                <p className="mt-6 text-white-gray w-[54rem] mobile:w-80 text-center mobile:text-base" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam velit quidem ipsa unde ex tenetur quia neque, nesciunt id quod necessitatibus modi sapiente nam earum cumque at? Quas, maxime illum.</p>
                <div className="flex mobile:flex-col mt-20">
                    <div className="w-72 h-96 border-solid border-purple border-2 rounded-[1.6rem] cursor-pointer" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="150"></div>

                    <div className="w-72 h-96 border-solid border-purple border-2 rounded-[1.6rem] mx-16 mobile:mx-0 mobile:my-14 cursor-pointer" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="500"></div>

                    <div className="w-72 h-96 border-solid border-purple border-2 rounded-[1.6rem] cursor-pointer" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="750"></div>
                </div>
            </section>


            <section id="perguntas" className="flex flex-col items-center pb-16 select-none">
                <h1 className="text-4xl mobile:text-2xl text-center text-white-gray font-bold mb-6" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true"><span className="text-purple">Perguntas</span> Frequentes</h1>
                <div className="w-1/2 mobile:w-4/5" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                    <Faq />
                </div>
            </section>

            <Footer />
        </div>
    )
}