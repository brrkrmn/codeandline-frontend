import React from 'react';
import Image from '../../assets/images/undraw_programmer_re_owql.svg';
import { H1 } from '../Typography';

const ComingSoon = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-end">
      <div className="w-96 h-[400px] p-8 overflow-visible border-1 border-b-0 border-primary-light rounded-xl rounded-t-full flex items-center justify-between flex-col">
        <img src={Image} alt="Developer Illustration" className="w-80 h-auto border-1 rounded-full border-primary-light drop-shadow-md" />
      </div>
      <div className='w-96 border-1 border-t-0 px-8 pb-10 border-primary-light rounded-b-2xl flex flex-col items-center justify-center gap-4'>
          <H1 className="font-normal">Coming Soon</H1>
          <p className="text-center text-xl text-foreground-dark">I'm currently working on this page, thank you for the patience!</p>
        </div>
    </div>
  )
}

export default ComingSoon;
