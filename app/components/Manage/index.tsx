"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';


const names = [
    {
        heading: "1 AYLIK",
        price: 150,
        user: 'Aylık',
        button: "1 Günlük Deneme Süresi",
        profiles: 'Sınırsız İzleme',
        posts: '1 Kullanıcı',
        templates: "4K Çözünürlük",
        view: "Özel Film Dizi Arsivi ",
        support: '7/24 Destek',
        category: 'yearly'
    },
    {
        heading: "3 AYLIK",
        price: 300,
        user: 'Aylık',
        button: "1 Günlük Deneme Süresi",
        profiles: 'Sınırsız İzleme',
        posts: '1 Kullanıcı',
        templates: "4K Çözünürlük",
        view: "Özel Film Dizi Arsivi ",
        support: '7/24 Destek',
        category: 'yearly'
    },
    {
        heading: "6 AYLIK",
        price: 420,
        user: 'Aylık',
        button: "1 Günlük Deneme Süresi",
        profiles: 'Sınırsız İzleme',
        posts: '1 Kullanıcı',
        templates: "4K Çözünürlük",
        view: "Özel Film Dizi Arsivi ",
        support: '7/24 Destek',
        category: 'yearly'
    },
    {
        heading: "12AY",
        price: 420,
        user: 'Yıllık',
        button: "1 Günlük Deneme Süresi",
        profiles: 'Sınırsız İzleme',
        posts: '1 Kullanıcı',
        templates: "4K Çözünürlük",
        view: "Özel Film Dizi Arsivi ",
        support: '7/24 Destek',
        category: 'monthly'
    },
    {
        heading: "15 AY",
        price: 650,
        user: 'Yıllık',
        button: "1 Günlük Deneme Süresi",
        profiles: 'Sınırsız İzleme',
        posts: '1 Kullanıcı',
        templates: "4K Çözünürlük",
        view: "Özel Film Dizi Arsivi ",
        support: '7/24 Destek',
        category: 'monthly'
    },
    {
        heading: "24 AY",
        price: 1000,
        user: 'Yıllık',
        button: "1 Günlük Deneme Süresi",
        profiles: 'Sınırsız İzleme',
        posts: '1 Kullanıcı',
        templates: "4K Çözünürlük",
        view: "Özel Film Dizi Arsivi ",
        support: '7/24 Destek',
        category: 'monthly'
    },


]

const Manage = () => {
    
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'> FİYATLAR </h3>


                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>7/24 DESTEK</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>UYGUN FIYAT</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>HIZLI SUNUCULAR</h4>
                    </div>
                </div>


                <div className='mt-6 relative'>
                    <div className='dance-text mb-5'>🥇 Getirdiğiniz üye en az  <br /> 12 ay üye olursa siz +3 AY kazanırsınız. </div>
                    <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="toggleImage" />
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>YILLIK</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`${enabled ? 'bg-darkpurple' : 'bg-darkpurple'
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only text-black">Enable notifications</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>AYLIK</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>{items.price}TL</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <button className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'>{items.button}</button>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.posts}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.templates}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.view}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.support}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;
