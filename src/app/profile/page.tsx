import HeroContainer from '@/components/HeroContainer'
import Image from 'next/image';
import userImg from '../../../public/user.png'
import { FaShareAlt } from 'react-icons/fa';
import FavoriteCard from '@/app/profile/components/favorite/index'
import { Metadata } from 'next';

export const metadata: Metadata = {

    title: 'Meu perfil - Daly games sua plataforma de jogos',
    description: 'Perfil sujeito programdor | Daly Games sua plataforma de jogos!'
}
function page() {
    return (
        <main className="w-full text-black">
            <HeroContainer>
                <section className='mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row'>
                    <div className='w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal '>
                        <Image
                            src={userImg}
                            alt='Imagem de perfil do usuario'
                            className='rounded-full w-56 h-56 object-cover'
                        />
                        
                        <h1 className='font-bold text-2xl'>André Simão</h1>
                    </div>

                    <div className='sm:flex sm:absolute top-0 right-0 gap-3 justify-center items-center'>
                        <button className='bg-gray-700 px-4 py-3 rounded-lg text-white'>Configuraçoes</button>
                        <button className='bg-gray-700 px-4 py-3 rounded-lg'><FaShareAlt size={24} color='#FFF'/></button>
                    </div>
                </section>


                <section className='flex flex-wrap gap-5 flex-col md:flex-row'>

                    <div className='flex-grow flex-wrap'>
                        <FavoriteCard/>
                    </div>

                    <div className='flex-grow flex-wrap'>
                        <FavoriteCard/>
                    </div>

                    <div className='flex-grow flex-wrap'>
                        <FavoriteCard/>
                    </div>

                </section>
            </HeroContainer>
            
        </main>
    );
}

export default page;