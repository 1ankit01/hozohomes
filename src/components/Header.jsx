import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {FaMapMarker} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-blue-400 shadow-sm'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-serif text-sm sm:text-xl flex flex-wrap'>
            <FaMapMarker className='text-white'/>
            <span className='text-white'>Hozo</span>
            <span className='text-white'>Homes</span>
        </h1>
        </Link>
        <from className='bg-blue-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-blue-700'/>
        </from>
        <ul className='flex gap-9'>
            <Link to='/'>
            <li className='hidden sm:inline text-white hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-white hover:underline'>About</li>
            </Link>
            {/* <li className='hidden sm:inline text-white hover:underline'>Services</li> */}
                <select className='bg-blue-400 hidden sm:inline text-white hover:underline focus:outline-none w-24 sm:w-56'>
               
                    <option value="Maintanence">Maintenance</option>
                    
                    
                    <option value="Renovation">Renovation</option>
                   
                 
                    <option value="Visa & Immigration">Visa & Immigration</option>
                   
                    <option value="Tendany properties & Management">Tendany properties & Management</option>
                    
                </select>
                <Link to='/contact-us'>  
            <li className='hidden sm:inline text-white hover:underline'>contact us</li></Link>
            <Link to='/sign-in'>
            <li className='text-white hover:underline'>Sign In</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
