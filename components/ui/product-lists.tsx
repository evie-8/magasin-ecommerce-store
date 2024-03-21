"use client";
import { Product } from '@/types'
import React, { useEffect, useState } from 'react'
import NoResults from './no-results';
import ProductCard from './product-card';

import   Slider, {Settings}  from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from './arrows';

interface ProductProps {
    data: Product[];
    title: string;
    slider?: boolean;
    pagination?: boolean;
}
const ProductLists: React.FC<ProductProps> = ({data, title, slider=false, pagination}) => {
  

  if (pagination) {

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const items = data.slice(firstIndex, lastIndex);
    const pages = Math.ceil(data.length / productsPerPage);
    //@ts-ignore
    const numbers = [...Array(pages).keys()].map((num) => num + 1);
  
    const prePage = () => {
      if (currentPage !== 1) {
          setCurrentPage((prevPage) => prevPage - 1);
      }
  
  }
  
  const changePage = (id: number) => {
      setCurrentPage(id);
  }
  
  const nextPage = () => {
      if (currentPage !== pages) {
          setCurrentPage((prevPage) => prevPage + 1);
      }
  }

 
    return (
    <div className='mt-6 lg:col-span-4 lg:mt-0'>
       <h3 className=' relative font-extrabold mb-12 text-3xl text-center after:bg-orange after:w-[100px] after:h-2 after:rounded-md after:absolute after:-bottom-0 after:left-[50%] after:translate-x-[-50%] leading-[60px]'>{title}</h3>
        {!items.length  ? <NoResults message='No products found'/>
          : (
            <>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {
            items.map((item) => (
                <ProductCard key={item.id} data={item}/>
            ))
        }
        </div>

          
        <div className='flex items-center justify-center my-6'>
        <div className="mx-auto mt-0 mb-20 flex justiy-center gap-4">
         <span className='flex items-center justify-center  border border-orange rounded-sm ml-1 w-9 h-9 text-center leading-[40px] cursor-pointer hover:text-white hover:bg-orange' 
        onClick={prePage}>←</span>
        {numbers.map((num, id) => (
            <span className={`flex items-center justify-center border border-orange rounded-sm ml-1 w-9 h-9 text-center leading-[40px] cursor-pointer hover:text-white hover:bg-orange ${currentPage === num && 'active'}`}
            key={id} onClick={() => changePage(num)}>{num}</span>
        ))}
        <span className='flex items-center justify-center border border-orange rounded-sm ml-1 w-9 h-9 text-center leading-[40px] cursor-pointer hover:text-white hover:bg-orange'
         onClick={nextPage}>→</span>
        </div>
        </div>
        </>
        )}
    </div>
  )
  } 


if (slider) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 923,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }; 

  return (
    <div className='space-y-4 '>
    <h3 className=' relative font-extrabold mb-12 text-3xl text-center after:bg-orange after:w-[100px] after:h-2 after:rounded-md after:absolute after:-bottom-0 after:left-[50%] after:translate-x-[-50%] leading-[60px]'>{title}</h3>
     {data.length === 0 && <NoResults message='No products found'/>}
      <Slider {...settings} className='flex items-center justify-center gap-6' >
    
     {
         data.map((item) => (
            
                <div key={item.id} className='slide-item'>
                  <ProductCard data={item} />
            
                </div>
             
         ))
     }
   
     </Slider>

 </div>
  )
}



    return (
    <div className='space-y-4 '>
       <h3 className=' relative font-extrabold mb-12 text-3xl text-center after:bg-orange after:w-[100px] after:h-2 after:rounded-md after:absolute after:-bottom-0 after:left-[50%] after:translate-x-[-50%] leading-[60px]'>{title}</h3>
        {data.length === 0 && <NoResults message='No products found'/>}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
            data.map((item) => (
              <>
                <ProductCard key={item.id} data={item}/>
              </>
                
            ))
        }
        </div>

    </div>
    )
  }

export default ProductLists