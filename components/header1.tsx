"use client";

import Link from "next/link";

interface Headers {
  
    title: string;
    url: string;
    slogan1: string;
    slogan2: string;

}


const Header1: React.FC<Headers> = ({
    title,
    url,
    slogan1,
    slogan2
  }) => {
    return (
      <div className="flex flex-wrap items-center  h-full justify-center p-4 sm:p-6 lg:p-8 m-7 mt-6 rounded-xl overflow-hidden bg-light-grey aspect-square md:aspect-[2.4/1] bg-cover text-center lg:text-start" >
              <div className="basis-full lg:basis-1/2 lg:bg-none">
                  <h1 className="font-extrabold text-4xl lg:text-5xl leading-[60px] my-6 mx-0">{slogan1}<br /><span>{slogan2}</span></h1>
                  <p className="mb-4">
                    Shop with ease through our intuitive platform <br />browse
                    high-quality items, and enjoy secure transactions.
                  </p>
                  <Link href="/user" className="inline-block bg-orange text-white py-2 px-6 rounded-full border border-light-grey transition-all duration-200 hover:bg-transparent hover:text-orange hover:border-orange">{title} &#8594;</Link>
             </div>
  
         <div className="basis-full hidden lg:basis-1/2 lg:block ">
           <img src={`/${url}`}  className='w-full' alt="sliderimage"/>
         </div>
            </div>

       
         
    )
  
  }

  export default Header1; 