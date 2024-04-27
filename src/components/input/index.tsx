'use client'

import {FiSearch} from 'react-icons/fi'
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';

function Input() {

    const [input, setInput] = useState('')
    const router = useRouter();

    function HandleSearch(event: FormEvent){

        event.preventDefault()

        if(input === "") return;

        router.push(`/Game/search/${input}`)


    }

    return (
        <form onSubmit={HandleSearch} className='w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2 shadow-md '>
            <input className='bg-slate-200 outline-none w-11/12' type="text" placeholder="Procurando algum jogo?" value={input} onChange={(e)=>{setInput(e.target.value)}}/>

            <button type="submit">
                <FiSearch size={24} color='#ea580c' />

            </button>
        </form>
    );
}

export default Input;