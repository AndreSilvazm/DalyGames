import { GameProps } from '@/utils/types/game';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';
import { redirect } from 'next/navigation'
import Image from 'next/image';
import HeroContainer from '@/components/HeroContainer/index'
import Label from './components/label/indext'
import GameCard from '@/components/GameCard/index'
import { Metadata } from 'next';

interface Repos {
    params?: any,
    id: string
}

interface PropParams {

    params:{
        id:string
    }
}

export async function generateMetadata({params}:PropParams):Promise<Metadata>{


    try {

        const response:GameProps = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`)
        .then((res)=>res.json())

        return{

            title: `${response.title} | Daly Games`,
            description: `${response.description}`,
            keywords: response.categories,
            openGraph: {
                title: response.title,
                images: [response.image_url]
            },
            robots: {

                index: true,
                follow: true,
                nocache: true,
                googleBot: {

                    index:true,
                    follow:true
                }
            }
            

        }
        
    } catch (error) {

        throw new Error('Deu erro na fetch')
        
    }

}


async function GetGameDetail(id: string) {

    try {

        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { next: { revalidate: 60 } })
        return res.json()

    } catch (error) {

        console.log(error)
    }

}

async function GetGameSorted() {

    try {

        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {cache: 'no-store'})
        return res.json()

    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}

async function page({ params }: Repos) {

    const GameDetail: GameProps = await GetGameDetail(params.id)
    const SortedGame: GameProps = await GetGameSorted()


    if (!GameDetail) {

        redirect("/")
    }

    return (
        <main className='w-full text-black'>
            <div className='bg-black h-80 sm:h-96 w-full relative'>
                <Image

                    className='object-cover w-full h-80 sm:h-96 opacity-80'
                    alt={GameDetail.title}
                    src={GameDetail.image_url}
                    priority={true}
                    fill={true}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width:1200px) 33vw"

                />


            </div>

            <HeroContainer>
                <h1 className='font-bold text-xl my-4'>{GameDetail.title}</h1>
                <p>{GameDetail.description}</p>

                <h2 className='font-bold text-lg mt-7 mb-2'>Categorias</h2>

                <div className='flex gap-2 flex-wrap'>
                    {GameDetail.categories.map((item) => (
                        <Label name={item} key={item} />
                    ))}

                </div>


                <h2 className='font-bold text-lg mt-7 mb-2'>Plataformas</h2>

                <div className='flex gap-2 flex-wrap'>
                    {GameDetail.platforms.map((item) => (
                        <Label name={item} key={item} />
                    ))}

                </div>


                <p className='mt-7 mb-2'><strong>Data de lançamento: {GameDetail.release}</strong></p>

                <h2 className='font-bold text-lg mt-7 mb-2'>Jogo recomendado:</h2>
                <div className='flex '>

                    <div className='flex-grow'>

                        <GameCard data={SortedGame} key={SortedGame.id} />
                    </div>
                </div>

            </HeroContainer>

        </main>
    );
}

export default page;