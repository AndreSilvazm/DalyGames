import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { GameProps } from "@/utils/types/game";
import HeroContainer from '@/components/HeroContainer/index'
import Input from "@/components/input";
import GameCard from '@/components/GameCard/index'

async function getData(title: string) {

    
    try {
        
        const decodeURL = decodeURI(title)
        const res = await fetch(`https://sujeitoprogramador.com/next-api/?api=game&title=${title}`)
        return res.json();
    } catch (error) {

        console.log('ocorreu algum erro inspereado ao tentar consumir a api' + error)

    }



}


async function page({ params }: { title: string, params?: any }) {

    const data: GameProps[] = await getData(params.title)

    return (
        <main className="w-full text-black">

            <HeroContainer>
                <Input />

                <h1 className="font-bold text-l mt-8 mb-5">Veja oque encontramos na nossa base: </h1>

                {!data && (
                    <p>Esse jogo nao foi encontrado...</p>
                )}


                <section className="grid gap-7 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">

                    {data && data.map((item) => (

                        <GameCard key={item.id} data={item} />
                    ))}

                </section>

            </HeroContainer>

        </main>
    );
}

export default page;