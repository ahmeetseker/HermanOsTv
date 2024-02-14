import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Hakkımızda', href: '#aboutus-section', current: true },
    { name: 'Hizmetler', href: '#services-section', current: false },
    { name: 'S.S.S', href: '#faq-section', current: false },


]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <a href="#"> <button className='text-sm flex items-center md:text-xl w-full font-semibold hover:shadow-xl mt-4 bg-blue text-white py-4 px-6 justify-center  rounded-full hover:bg-hoblue'>
                        <img className="inline-block mr-1 " src="/images/button/telegram.svg" alt="" />
                          <span>Telegram</span>  

                    
                        </button>
                        </a> 
                        {/* <Contactusform /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
