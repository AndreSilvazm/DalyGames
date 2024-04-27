'use client'
import { FiEdit, FiX } from "react-icons/fi"; 
import { useState } from "react";

function index() {

    const[Input, setInput] = useState('')
    const[ShowInput, setShowInput] = useState(false)
    const[GameAdicionado, setGameAdicionado] = useState('')

    function handleButton(){

        setShowInput(!ShowInput)
        setInput("")

        if(Input !==''){

            setGameAdicionado(Input)

        }
    }

    return (
        <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">


            {ShowInput ? (
                <div className="flex items-center justify-center gap-3">
                    <input type='text' value={Input} onChange={(event)=>setInput(event.target.value)} className="w-full rounded-md h-8 text-black px-2"/>
                    <button onClick={handleButton}>
                        <FiX size={24} color='#FFF'/>
                    </button>
                </div>
            ): (

                <button className="self-start hover:scale-110 duration-200 transition-all" onClick={handleButton}><FiEdit size={24} color="#FFF"/></button>   
            )}


            {GameAdicionado !=='' ? (


            <p className="font-bold text-white">{GameAdicionado}</p>         
            ) :             <p className="font-bold text-white">Adicionar novo jogo</p>           }

        </div>
    );
}

export default index;