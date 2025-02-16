import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { MdCancel, MdNoCell } from 'react-icons/md'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function ModalforListItem({handelModelIsclose,item}) {
    const Categorey_Name = useRef(null);
  const Categorey_Details = useRef(null);
  const Small_pricing = useRef(null);

  const HandelAddcart = ()=>{

    setTimeout(()=>{
   handelModelIsclose(true);
  },1500)

    const cart = {
      Categorey_Name:Categorey_Name.current.innerText,
      Categorey_Details:Categorey_Name.current.innerText,
      pricing:Small_pricing.current.innerText,

    }
  

    axios.post(`http://localhost:4000/BaketData`,cart).then(()=>{
      // passed message
      Swal.fire({
        position: "top-bottom",
        icon: "success",
        title: "Your item has been saved",
        showConfirmButton: false,
        timer: 1000
      });
    })
  }

  return (
    <>
   
    <div className=' inset-0   bg-black  w-450 rounded-md border shadow-xl  text-white relative px-3'>
                    <div className='absolute top-0 right-0 z-40 '>
                       <MdCancel  className='  text-2xl text-orange-500 cursor-pointer ' onClick={handelModelIsclose}/>
                    </div>
        <div className='grid grid-cols-2 gap-2   py-6 px-4   relative'>
                
                         <div className=' text-xs ' >
                          
                            <h1 className='font-bold text-sm' ref={Categorey_Name}>{item.Categorey_Name} </h1>
                              <p className='text-xs py-5' ref={Categorey_Details}>{item.Categorey_Details}</p>
                              <button className='bg-white px-5 py-1 rounded-md text-xl text-black'> &#8377; <span className='font-bold' ref={Small_pricing}>{item.Small_pricing}</span></button>
                         </div>

                          <div className='relative'>
                               <img src={item.Categorey_Img} className='relativev w-full h-full object-cover'/>     
                          </div>
                      
                   </div>

                       <div className=' flex justify-end pb-4  w-full  '>
                         <button className='flex items-center justify-between bg-green-600 text-white font-bold  rounded-lg' onClick={HandelAddcart} >
                             <div className='flex items-center px-4 py-2' >
                                <p className='mr-4 text-md'><BsArrowRightCircleFill/></p> 
                                <p className='text-md' >Add!</p>
                               </div>
                          </button>
                       </div>
                  
    </div> 
   
    </> 
  )
}
