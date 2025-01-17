import React, { useEffect, useState } from 'react';

const Base: React.FC = () => {
  
  //* HANDLERS 
  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  //* RENDER
  return (
   <div className="p-4 w-full h-full flex flex-col overflow-hidden">
      <p className='text-lg font-medium'>Hello World!</p>
    </div>
  );
};

export default Base;