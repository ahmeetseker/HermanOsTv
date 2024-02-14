import { PlayIcon } from "@heroicons/react/20/solid";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                      <a href="#">  <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>HermanOStv</button></a>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='xs:text-[40px] lg:text-[80px] font-bold text-darkpurple'>
                        Binlerce kanal ve filmler  <br /> HermanOStv'de <br />
                        </h1>
                    </div>
                    <div className='my-7 text-center sm:justify-center sm:flex   xl:justify-start lg:text-start '>
                      <a href="#"> <button className='text-sm flex items-center  	 md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                        <img className="inline-block mr-1 " src="/images/button/telegram.svg" alt="" />
                          <span>Telegram</span>  

                    
                        </button>
                        </a> 
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-1 hidden lg:block'>
                    <video loop playsInline muted autoPlay src="/images/banner/banner.mp4" width={500} height={500} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
