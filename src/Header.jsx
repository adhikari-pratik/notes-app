// import React from 'react';

function Header() {

  return (
    
    <nav className='flex justify-around gap-3 w-full items-center bg-slate-500 h-24 text-white max-md:max-w-3xl lg:w-full min-w-[300px]'>
        <div className="p-2 flex justify-start max-md:w-fit min-w-32 w-1/4">
            <h1 className='text-2xl hover:cursor-pointer'> NOTES</h1>
        </div>

        <div className="max-md:w-fit p-2 w-1/2 ">
            <ul className='flex justify-around '>
                <li className="p-1 hover:cursor-pointer">Home</li>
                <li className="p-1 hover:cursor-pointer">About</li>
                <li className="p-1 hover:cursor-pointer">Contacts</li>
            </ul>
        </div>

        <div className="max-md:w-fit p-2 w-1/4">
            <ul className='flex justify-end gap-8 '>
                <li className="border-white border-2 p-1 rounded-md hover:cursor-pointer hover:scale-105 hover:shadow-md max-md:text-xs ">Sign in</li>
                <li className="bg-gradient-to-b from-purple-700 to-pink-600 p-1 rounded-md hover:scale-105 hover:cursor-pointer max-md:text-xs hover:shadow-md" >Get Started</li>

            </ul>
        </div>
    
    </nav>
  )
}

export default Header