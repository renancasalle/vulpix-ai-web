import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export default function NotFound() {
    const [lastPage, setLastPage] = useState<String | null>();

    useEffect(() => {
        setLastPage(sessionStorage.getItem("lastPage"));
    }, []);

    return (
        <div className='h-screen bg-black overflow-hidden flex flex-col justify-center items-center relative'>
            <div className="flex mobile:flex-col-reverse mobile:justify-center items-center h-[70%] mobile:h-full -mt-28 mobile:mt-0">
                <div className="flex flex-col items-center mr-14 mobile:mr-0">
                    <h1 className="text-white-gray text-3xl mobile:text-2xl font-semibold">Ooops!</h1>
                    <h2 className="text-white-gray text-[1.6rem] mobile:text-base w-80 my-8 mobile:my-6 text-center">Parece que o monstrinho devorou a página que você estava procurando...</h2>
                    {
                        lastPage
                            ?
                            <Link to={`${lastPage}`} className="h-10 px-4 bg-purple flex items-center text-white text-xl rounded-md hover:bg-purple-dark transition-all">Voltar</Link>
                            :
                            <Link to="/" className="h-10 px-4 bg-purple flex items-center text-white text-xl rounded-md hover:bg-purple-dark transition-all">Ir Para a Home</Link>
                    }
                </div>

                <img className="h-[404px] mobile:h-[300px] ml-14 mobile:ml-0 pointer-events-none select-none" src="/monster-404.svg" alt="Monster 404" />
            </div>

            <Footer properties={"absolute -bottom-4 mobile:hidden"} />
        </div>
    )
}