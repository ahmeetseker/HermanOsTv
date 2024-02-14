"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';


const Contactusform = () => {
  

    return (
        <>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                {/* <div className='lg:hidden'>
                    <button type="button" className='bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded' onClick={openModal}>
                        Contact Us
                    </button>
                </div> */}
                <div className='hidden lg:block'>
                <a href="#"> <button className='text-sm flex items-center md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                        <img className="inline-block mr-1 " src="/images/button/telegram.svg" alt="" />
                          <span>Telegram</span>  

                    
                        </button>
                        </a> 
                </div>
            </div>

      
        </>
    )
}

export default Contactusform;
