import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const about = () => {
  return (
    <div>
      <div className='grid grid-cols-1 px-24'>
        <img 
          src='https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' 
          className='object-cover col-span-1'
        />
        <div className='items-center'>
          <h2 className='font-bold uppercase'>abc</h2>
          <p>xyz</p>
        </div>
      </div>
      <div className='grid grid-cols-4' >
        {/* <div>
          <nav>
            <div>
              <h1 className='font-bold uppercase p-4 border-b border-gray-100'><a href="#">DMCS</a></h1>
            </div>
            <ul>
              <li className='text-gray-700 font-bold'>
                <a href="#" >
                  <span>Home</span>
                </a>
              </li>
              <li className=''>
                <a href="#" >
                  <span>About</span>
                </a>
              </li>
              <li className=''>
                <a href="#" >
                  <span>OcCho</span>
                </a>
              </li>
            </ul>
          </nav>
          <h4 className='font-bold uppercase border-b'>Tin tuc hom nay</h4>
        </div> */}
        <div className='col-span-3 mt-8 grid grid-cols-2 gap-4 px-24'>
            <div className='card col-span-2 '>
              <img 
                src='https://images.unsplash.com/photo-1674773751169-eebaf7d3e9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                className='w-full h-32 sm:h-48 object-cover'
              />
              <div className='m-4'>
                <span>abc </span>
                <span>xyz </span>
              </div>
              <div className='badge'>
                25 mins
              </div>
            </div>
            <div className='card'>
              <img 
                src='https://images.unsplash.com/photo-1674773751169-eebaf7d3e9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                className='w-full h-32 sm:h-48 object-cover'
              />
              <div className='m-4'>
                <span>abc </span>
                <span>xyz </span>
              </div>
              <div className='badge'>
                25 mins
              </div>
            </div>
            <div className='card'>
              <img 
                src='https://images.unsplash.com/photo-1674773751169-eebaf7d3e9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                className='w-full h-32 sm:h-48 object-cover'
              />
              <div className='m-4'>
                <span>abc </span>
                <span>xyz </span>
              </div>
              <div className='badge'>
                25 mins
              </div>
            </div>
            <div className='card'>
              <img 
                src='https://images.unsplash.com/photo-1674773751169-eebaf7d3e9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                className='w-full h-32 sm:h-48 object-cover'
              />
              <div className='m-4'>
                <span>abc </span>
                <span>xyz </span>
              </div>
              <div className='badge'>
                25 mins
              </div>
            </div>
            <div className='card'>
              <img 
                src='https://images.unsplash.com/photo-1674773751169-eebaf7d3e9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                className='w-full h-32 sm:h-48 object-cover'
              />
              <div className='m-4'>
                <span>abc </span>
                <span>xyz </span>
              </div>
              <div className='badge'>
                25 mins
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

//https://images.unsplash.com/photo-1674744874079-f3de324cd498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

export default about