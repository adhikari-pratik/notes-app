import React, { useState } from 'react'
import { Trash2, Pencil, Check, HandCoins } from 'lucide-react';

function Display(props) {

    const [isEdit, setEdit] = useState(false);
    const [input, setInput] = useState({
        id:props.index,
        title:props.title, 
        description:props.description

    })

   
    function handleChange(e) {
        const { name, value } = e.target;

        setInput({...input, [name]:value})
        console.log(input)
    }

    function handleUpdate(id) {
        props.setTodo(props.todo.map((todo,index) => {
          
          if(id === index) {
            return {...todo, id:index, title:input.title, description:input.description} 
          
          }else {
            return todo
          }
            
          
        }))
    }

    function toggleEdit(){
        setEdit(!isEdit)
        console.log(isEdit)
    }

    return (
    <div className='flex flex-col gap-4  w-full '>
        <div className='text-xl font-bold underline underline-offset-4 h-1/5 pl-2'>
            {!isEdit?<h1>{(props.title).toUpperCase()}</h1>:<textarea onChange={handleChange} name='title' className='bg-transparent border-none focus:outline-none w-full h-full' defaultValue={props.title} />  }

        </div>
        <div className='h-3/5 pl-5'>
            {!isEdit?<p>{props.description}</p>:<textarea onChange={handleChange} name='description' className='bg-transparent border-none focus:outline-none w-full h-full' defaultValue={props.description}  />  }
            
        </div>
        <div className='flex justify-between h-1/5 px-4 ' onClick={toggleEdit}>
            
            {!isEdit?   
                <button  onClick={toggleEdit} className='bg-slate-200 text-black hover:bg-slate-400 hover:text-white h-12 w-12 self-end px-2 rounded-full hover:scale-110 transition-transform flex justify-center items-center '>{<Pencil />}</button>
                :<button  onClick={()=>{handleUpdate(props.index)}} className='bg-slate-200 text-black hover:bg-slate-400 hover:text-white h-12 w-12 self-end px-2 rounded-full hover:scale-110 transition-transform flex justify-center items-center '>{<Check />}</button>
            }

            <button onClick={props.delete} className='bg-slate-200 text-black hover:bg-slate-400 hover:text-white h-12  w-12 self-end px-2 rounded-full hover:scale-110 transition-transform flex justify-center items-center' ><Trash2 /></button>
        </div>
    </div>
    )
}

export default Display