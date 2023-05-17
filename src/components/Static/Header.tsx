import React from 'react';
import img from "../../assets/logo.jpg"
import Button from '../common/Button';

const Header = () => {
  return (
    <div className='w-screen h-[70px] bg-[rgba(0,0,0,0.3)] flex justify-center items-center'>
       <div className='w-11/12 flex justify-between'>
        <img src={img} alt="logo" className='h-14'/>

        <div className="flex items-center  gap-5 m-4 text-base text-white">
            <p className='' >Home</p>
            <p  className=''>About</p>
            <p  className=''>Route</p>
            <p  className=''>Contact</p>
            <div className='flex'>
                <Button content='Sign In'/>
                <Button content='Sign Up'/>
            </div>
        </div>
       </div>
    </div>
  );
}

export default Header;
