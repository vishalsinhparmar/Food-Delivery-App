import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsArrowDownCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { FaClock, FaShoppingBasket } from 'react-icons/fa'
import { MdDeleteForever, MdStorage, MdStore } from 'react-icons/md'
import { RiEBike2Fill } from 'react-icons/ri'
import { useParams } from 'react-router-dom'

export default function MyBasket() {

  const [data,setdata]=useState([]);
  // const {id}=useParams();

  useEffect(()=>{
  axios.get(`http://localhost:4000/BaketData`).then((res)=>{
         setdata(res.data)
  })
},[data])
  const handelDelete = (id)=>{
  axios.delete(`http://localhost:4000/BaketData/${id}`).then(()=>{
       
      
  });
  
}
const subtotal = data.reduce((total, item) =>   total + item.pricing * item.qty, 0);
// console.log(Number(subtotal));
  return (
    <div>
        <div className='bg-orange-500 p-4 my-4' >
           <div className='flex items-center justify-around text-white'>
             <FaClock className='text-2xl'/>
             <p>
             Open until 3:00 AM
             </p>
             </div>
        </div>
             {/* Main basket */}
           <div className='border rounded-md '>
                 <div className=' bg-green-600 rounded-t-md px-10 py-4'>
                      <div className='flex items-center '>
                        <FaShoppingBasket className='text-white text-4xl mr-5'/>
                        <p className=' text-white text-2xl font-semibold'>My Basket</p>
                      </div>
                 </div>
                 <div className='py-4'>
                  {data.map((item)=>(

                  
                     <div className='grid grid-flow-col gap-2 border-b items-center px-4 py-4' > 
                      <div className='col-auto'>
                       <div className='bg-orange-500 rounded-full  flex items-center justify-center px-3 w-5' >
                           <p className='font-bold text-md text-white' >{item.qty}x</p>
                       </div>
                       </div>

                        <div className='ml-3' >
                          <h1 className='font-bol text-green-600 '>&#8377;{item.pricing}</h1>
                          <p className='font-bold'>12” {item.Categorey_Name} </p>
                          <p>{item.Categorey_Details}</p>
                        </div>

                        <div className='col-auto' >
                          <button onClick={()=>{handelDelete(item.id)}}>
                          <MdDeleteForever className='text-xl text-red-400 ' />
                          </button>
                        </div>
                       </div>
                       ))}
                       
                       {/* total */}
                         
                         <div className='px-4 py-6 border-b'>
                             <div className='flex items-center justify-between'>
                                 <p className='font-bold'>Sub Total:</p>
                                  <span className=' text-sm'>&#8377;&nbsp;{subtotal.toFixed(1)}</span>
                             </div>

                             <div className='flex items-center justify-between py-2'>
                                 <p className='font-bold'>Discounts:</p>
                                  <span>-3.00</span>
                             </div>

                             <div className='flex items-center justify-between'>
                                 <p className='font-bold'>Delivery Fee:</p>
                                  <span>2.50</span>
                             </div>
                             
                         </div>

                       {/* total-end */}

                       {/* button-start */}
                       <div className='border-b'>
                       <div className='flex flex-col  py-4 mx-auto w-64 space-y-3 '>
                           <button className='flex items-center justify-between bg-orange-500 text-white font-bold rounded-lg'>
                             <div className='flex items-center px-4 py-3' >
                                <p className='mr-4'>Total to pay</p> 
                                <p className='text-xl' >&#8377;&nbsp;{subtotal.toFixed(2)}</p>
                               </div>
                             </button>
                       {/* button-2 */}
                             <button className='border rounded-full w-full'>
                               <div className='flex items-center  justify-between  px-4 py-3' >
                                <p className='mr-4'>Choose your free item..</p> 
                                <BsArrowDownCircleFill className='text-gray-400' />
                               </div>
                             </button>
                        {/* button-3 */}
                               
                            <button className='border rounded-full w-full '>
                               <div className='flex items-center  px-3  py-3' >
                                <p className='mr-3'>Apply Coupon Code here</p> 
                                <BsArrowRightCircleFill className='text-green-600' />
                               </div>
                             </button>


                       </div>

      
                       
                        </div>
                    {/* button-end */}
                    <div className='grid grid-flow-col mx-4 py-2'>
                                  <div className='flex flex-col justify-center items-center py-3 px-2  border rounded-md bg-Customgray1 mr-3 '>
                                    <RiEBike2Fill className='text-green-600 text-2xl mb-1'/>
                                    <p className='font-bold' >Delivery</p>
                                    <span className='text-sm'>Starts at 17:50</span>
                                  </div>

                                  <div className='flex flex-col justify-center items-center opacity-40 border-l-2'>
                                    <MdStore className='text-green-600 text-2xl'/>
                                    <p className='font-bold' >Collection</p>
                                    <span className='text-sm'>Starts at 16:50</span>
                                  </div>
                        </div>


                    {/*  */}
                 <div className='flex flex-col  py-4 mx-auto w-64 '>
                         <button className='flex items-center justify-between bg-green-600 text-white font-bold  rounded-lg'>
                             <div className='flex items-center px-4 py-3' >
                                <p className='mr-10 text-2xl'><BsArrowRightCircleFill/></p> 
                                <p className='text-xl' >Checkout!</p>
                               </div>
                          </button>
                  </div>
                  
                 </div>
           </div>
           {/* my  basket-end */}
    
    </div>
  )
}
