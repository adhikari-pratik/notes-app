import React, { useState } from 'react'
import Display from './display';
import { Plus } from 'lucide-react';

function Keeper() {

  const [input, setInput] = useState({
    id: 0,
    title: "",
    description: ""
  })

  const [todo, setTodo] = useState([]);

  const [isHidden, setHidden] = useState(true);


  function handleClick(e){

    e.preventDefault();

    setTodo([...todo, input])
    console.log(todo)
    setInput({...input, id:todo.length +1, title:"", description:""})
    setHidden(true)

  }

  function handleDelete(id) {
    setTodo(todo.filter((todo, index) => index !== id));
  }

  function handleChange(e) {
    const {name, value} = e.target;

    setInput({...input, [name]: value})
    console.log(input)

    
  }


  return (
    <div className='flex flex-col justify-center items-center gap-16  m-4'>
        <div className='w-3/4  bg-white p-8 shadow-lg rounded-lg'>
          <form className='w-full flex flex-col  gap-8' onSubmit={handleClick}>
            <div className='flex flex-col gap-4'>
              <input onChange={handleChange} value={input.title} className='font-bold text-xl border-none focus:outline-none' onClick={()=>setHidden(false)} type="text" name="title" id="todoHeading" placeholder={`${isHidden ?'Write here...' :'Title goes here..'}`} />
              <textarea onChange={handleChange} value={input.description} className={`min-h-32 text-black border-none focus:outline-none resize-none ${isHidden && 'hidden'}`} type="text" name="description" id="toDesc" placeholder='Description..'/>
            </div>

            <div className={`relative self-end ${isHidden && 'hidden'}`}> 
              <button className= "absolute top-2  text-white bg-slate-700 h-12 w-12 rounded-full flex justify-center items-center focus:outline-white hover:scale-110 hover:bg-slate-500 hover:text-black transition-transform" type="submit"> <Plus /></button>  
            </div>

          </form>
        </div>

      <div className='flex justify-center w-full flex-wrap gap-16 '>
      {
        todo.map((item, index) => {
          return ( 
            <div key={index} className='min-w-96 p-2 bg-slate-500 rounded-xl min-h-64 text-white flex shadow-xl'>
              <Display todo={todo} setTodo={setTodo} title={item.title} description={item.description}  index={index} delete={()=>handleDelete(index)} />
            </div>
          )
        })
      }
      </div>
    </div>


  )
}

export default Keeper
