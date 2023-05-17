import React from 'react';
import img from "../../assets/logo.jpg"

const Header = () => {
  return (
    <div className='w-screen h-[70px] bg-[rgba(0,0,0,0.3)] flex justify-center items-center'>
       <div className='w-11/12 flex justify-between'>
        <img src={img} alt="logo" className='h-14'/>

        <div className="flex items-center  gap-5">
            <p className='flex items-center' >Home</p>
            <p  className=''>About</p>
            <p  className=''>Route</p>
            <p  className=''>Contact</p>
        </div>
       </div>
    </div>
  );
}

export default Header;
