import React from 'react';

interface IProps{
    content:string;
}

const Button:React.FC<IProps> = ({content}) => {
  return (
    <div className='w-32 h-8 flex justify-center items-center bg-red-500 m-4 cursor-pointer hover:bg-yellow'>
      {content}
    </div>
  );
}

export default Button;
