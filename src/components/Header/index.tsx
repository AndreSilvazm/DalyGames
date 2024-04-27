import logoImg from '../../../public/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";


function index() {
    return (
        <header className="w-full h-28 bg-slate-100 text-black px-2 ">

            <div className="max-w-screen-xl h-28 mx-auto flex items-center">

                <nav className='w-full flex justify-center sm:justify-between items-center  '>

                    <div className='flex items-center gap-7'>
                        <Link href='/'>
                            <Image src={logoImg} alt='Logo do site daly games' quality={100} priority={true} />
                        </Link>

                        <Link href='/'>
                            Games
                        </Link>

                        <Link href='/profile'>
                            Perfil
                        </Link>
                    </div>


                    <div className='hidden sm:block'>

                        <Link href='/Profile'>
                            <i className='text-3xl'>
                                <CgProfile />
                            </i>
                        </Link>
                    </div>

                </nav>

            </div>

        </header>
    );
}

//https://sujeitoprogramador.com/next-api/?api=games

export default index;