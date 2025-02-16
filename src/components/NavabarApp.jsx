import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { BsBucket } from "react-icons/bs";
import { GoDesktopDownload, GoDownload } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import Logo from '../assets/png_logo/LOGO 1.png'
import profile from '../assets/png_logo/Male User.png'
import Avatar1 from '../assets/png_logo/Ellipse 9.png'
import { NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";

export default function NavabarApp(){
    const [toggelMenu,SetToggleMenu]=useState();

    const HandelToggleMenu = ()=>{
        SetToggleMenu(!toggelMenu);
    }
    const closeToggelmenu = ()=>{
        SetToggleMenu(false);
    }
    return (
        <>
           <header className='lg:bg-customgray lg:flex lg:flex-row  pt-0 lg:items-center lg:justify-between lg:ps-12 '>
            
{/* Mobile-NavBar */}
                <div className='flex justify-between items-center border-b border-gray-400 lg:hidden  ' >
                    <div className=' w-44 p-4' >
                         <img src={Logo} alt=""  className="object-cover"/>
                    </div> 
                    <div className="relative ">              
                          <FiAlignJustify className='text-3xl border-l border-gray-400 text-left cursor-pointer  h-16 w-20 ' onClick={HandelToggleMenu} />   
                          {toggelMenu && ( 
                      <nav className='lg:hidden w-auto '>
                      {/* <div className='' >
                          <NavLink to='/'><img src={Logo} className=''/></NavLink>
                      </div> */}
                      <ul className='flex flex-col items-center absolute top-16 rounded-xl text-white bg-slate-800 z-10 right-0 w-96 py-10 object-cover transition duration-200 ease-linear delay-400'>
                          <li className='my-4'><NavLink to='/'>Home</NavLink></li>
                          <li className='my-4'><NavLink to='/order'>Special Offers</NavLink></li>
                          <li className='my-4'><NavLink to='/restaurant'><button className=' bg-orange-400 p-2 px-6 rounded-full text-white' onClick={closeToggelmenu}> Restaurants</button></NavLink></li>
                          <li className='my-4'><NavLink to='/order'>Track Order</NavLink></li>
                          <li className='my-4'><NavLink to=''><button className='bg-white text-black p-3 px-5 rounded-full'><img src={profile} className='inline-flex items-center'/>Login/Signup</button></NavLink> </li>       
                      </ul>
                    </nav>
                )}  
                </div>                    
                </div>

                <div className="grid grid-flow-col lg:hidden w-full mb-10">
                    <div className="flex bg-AvatarColor h-14 justify-center items-center ">
                         <div className="mr-3">
                            <img src={Avatar1} alt="AvatarImg" />
                         </div>
                         <div className="">
                         <p className='text-orange-500 leading-3'> Aycan</p>
                         <NavLink className='leading-3 underline underline-offset-2'>My Account</NavLink>
                         </div>
                    </div>

                    <div className='bg-green-500 flex justify-center items-center h-14' >
                           <FaShoppingBasket className='text-2xl text-gray-200 mx-4' />
                           <p className='font-bold text-white text-xs' >GBP 79.89</p>
                    </div>
                </div>

   
{/* Mobile-NavBar-2 */}

            <div className='lg:flex items-center'>
              <p className='hidden lg:flex items-center'>Get 5% Off your first order,<span className='text-orange-400 m-3'>Promo:ORDER5, </span></p>
              
              </div>

              <div className='lg:flex items-center pl-5  hidden'>
              <p className='flex '><span><MdLocationPin className='inline-flex items-center'  /></span>Regent Street, A4, A4201, London 
              <span className='mx-3 underline text-orange-400'><a href="" className=' '>change location</a></span>
              </p>
              <div className='bg-customGreen  text-white py-4'>
                 <span className='w-28 border-r border-white p-5 px-5'> 
                <BsBucket className='inline-flex '  />
                </span >
                <span className='border-r border-white p-5 px-3'>23 items</span>   
                <span className="border-r border-white p-5 px-3">GBP 79.89</span>
                <span className="border-r border-white p-5 px-3">
                <GoDesktopDownload className='inline-flex text-xl'/>
                </span>
              </div>
              </div>
              
             

           </header>
           <nav className='lg:flex lg:justify-between lg:h-40 lg:items-center container'>
                <div className='hidden lg:flex' >
                    <NavLink to='/'><img src={Logo} className=''/></NavLink>
                </div>
                <ul className='lg:inline-flex items-center hidden'>
                    <li className='mx-5'><NavLink to='/'>Home</NavLink></li>
                    <li className='mx-5'><NavLink to='/order'>Special Offers</NavLink></li>
                    <li className='mx-5'><NavLink to='/restaurant'><button className=' bg-orange-400 p-2 px-6 rounded-full text-white'> Restaurants</button></NavLink></li>
                    <li className='mx-5'><NavLink to='/order'>Track Order</NavLink></li>
                    <li className='mx-5'><NavLink to=''><button className='bg-black text-white p-3 px-5 rounded-full'><img src={profile} className='inline-flex items-center'/>Login/Signup</button></NavLink> </li>       
                </ul>
              </nav>
        </>
    )
} 




