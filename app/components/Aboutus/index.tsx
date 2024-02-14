import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
   
}

const Aboutdata: datatype[] = [
    {
        heading: "HAKKIMIZDA.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'HermanOStv olarak, dijital eğlence dünyasına benzersiz bir perspektif sunuyoruz. Müşterilerimize kesintisiz yüksek kaliteli içerik deneyimi sağlama amacımızla, en üstün IPTV deneyimini sunmaya odaklanıyoruz.',
        
    },
    {
        heading: "HIZMETLER.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'En kaliteli sunucuları kullanarak ve müşteri memnuniyetini her zaman en üst düzeyde tutarak, müşterilerimize 7/24 kesintisiz destek sağlayarak, uygun fiyatlarla hizmet sunuyoruz. Kurumsal bir firma olarak, müşterilerimize en iyi deneyimi sunmayı hedefliyoruz ',
      
    },
    {
        heading: "ISLERMIZ.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'IPTV, internet üzerinden televizyon yayınlarını izlemenizi sağlayan bir teknolojiyi ifade eder. Geniş içerik yelpazesi ve kişiselleştirilebilir abonelikler sunarak çeşitli kanallara ve içeriklere erişim sağlariz',

    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>Hakkımızda</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Hakkımızda daha fazla bilgi edinin.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                  
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;