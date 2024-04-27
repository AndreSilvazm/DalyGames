import Link from 'next/link'
import Image from 'next/image';
import { BiRightArrowCircle } from 'react-icons/bi';
import {GameProps} from '@/utils/types/game'

interface Props {

    key: number,
    data: GameProps
}
function index(props:Props) {
    return (

        <Link href={`/Game/${props.data.id}`}>
            <section className='w-full bg-slate-200 rounded-lg p-4 mb-5 overflow-x-hidden'>

                <div className='relative w-full h-56 hover:scale-105 transition-all duration-300'>
                    <Image src={props.data.image_url} alt={props.data.title} sizes="(max-width: 768px) 100vw, (max-width:1200px) 33vw" quality={100} fill={true} className='rounded-lg object-cover'/>
                </div>

                <h1 className='text-center text-lg text-sm font-bold px-2 mt-2 text-ellipsis truncate whitespace-nowrap overflow-hidden'>{props.data.title}</h1>


            </section>

        </Link>
    );
}

export default index;