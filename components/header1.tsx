"use client";

import Link from "next/link";

interface Headers {
  
    title: string;
    url: string;
    slogan1: string;
    slogan2: string;
    bg: string;

}


const Header1: React.FC<Headers> = ({
    title,
    url,
    slogan1,
    slogan2,
    bg
  }) => {
    return (
      <div className="flex flex-wrap items-center  h-full justify-center p-4 sm:p-6 lg:p-8 m-7 mt-6 rounded-xl overflow-hidden bg-light-grey aspect-square md:aspect-[2.4/1] bg-cover text-center lg:text-start" style={{backgroundImage: `url('/${bg}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className="basis-full lg:basis-1/2 lg:bg-none">
                  <h1 className="font-extrabold text-white text-3xl lg:text-5xl leading-[60px] sm:leading-normal my-6 mx-0">{slogan1}<br /><span>{slogan2}</span></h1>
                  <p className="mb-4 text-black2 font-normal text-xl hidden lg:block">
                    Shop with ease through our intuitive platform 
                  </p>
                  <Link href="/products" className="inline-block bg-orange text-white py-2 lg:px-6 px-4 rounded-full border border-transparent transition-all duration-200 hover:bg-transparent hover:text-orange hover:border-orange">{title} &#8594;</Link>
             </div>
  
         <div className="basis-full hidden lg:basis-1/2 lg:block ">
           <img src={`/${url}`}  className='w-full' alt="sliderimage"/>
         </div>
            </div>

       
         
    )
  
  }

  export default Header1; 