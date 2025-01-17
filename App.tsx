import React from 'react';
import TopBar from './TopBar.tsx';
import Base from './Base.tsx';

export default function App() {
  return (
    <div className='w-full h-full overflow-hidden'>
      <TopBar />
      <Base />
    </div>
  )
}