import React , { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


const DayliNews = () => {

  const handleControl = () => {

  };

  return (
    <div>
      <div className='flex mx-20 my-4 w-full justify-items-center'>
        <div className='items-news items-start left-item w-3/5'>
          <div className='flex justify-between items-center md:max-w-7xl mx-2 border-b-2 mb-2'>
            <button className='border-b-2 border-sky-500'>abc</button>
            <button>abc</button>
            <button>abc</button>
            <button>abc</button>
            <button>abc</button>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1'>
              <img  src='https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' 
                    alt=''/>
            </div>
            <div className='col-span-2'>
              <h3>Title</h3>
              <p>Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. </p>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1 mb-4'>
              <img  src='https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' 
                    alt=''
                    className='w-full h-full mb-2'/>
            </div>
            <div className='col-span-2'>
              <h3 className='font-bold '>Title</h3>
              <p>Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. </p>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1'>
              <img  src='https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' 
                    alt=''/>
            </div>
            <div className='col-span-2'>
              <h3>Title</h3>
              <p>Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. </p>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1'>
              <img  src='https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' 
                    alt=''/>
            </div>
            <div className='col-span-2'>
              <h3>Title</h3>
              <p>Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. </p>
            </div>
          </div>
          <h1 className="flex font-bold items-end">Xem them</h1>
        </div>

        <div className='items-news items-end right-item w-1/4'>
          <div>
            <img  src='https://plus.unsplash.com/premium_photo-1674681683212-39a533203ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' 
                  alt=''/>
            <h3>Title</h3>
            <p>abcdefghijklmn</p>
          </div>
          <div>
            <img  src='https://plus.unsplash.com/premium_photo-1674681683212-39a533203ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' 
                  alt=''/>
            <h3>Title</h3>
            <p>abcdefghijklmn</p>
          </div>
          <div>
            <img  src='https://plus.unsplash.com/premium_photo-1674681683212-39a533203ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' 
                  alt=''/>
            <h3>Title</h3>
            <p>abcdefghijklmn</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayliNews;