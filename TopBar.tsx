import React, { useEffect, useState } from 'react';
import { MenuIcon } from "lucide-react";

const TopBar: React.FC = () => {
  
  //* HANDLERS 
  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  //* RENDER
  return (
   <header className="px-5 py-2 w-full flex flex-row items-center gap-4 bg-[#2D2B55] text-white bg-black">
      <button onClick={handleMenuClick}>
        <MenuIcon className='w-5 h-5' />
      </button>
      <p className='text-lg font-medium'>Header</p>
    </header>
  );
};

export default TopBar;