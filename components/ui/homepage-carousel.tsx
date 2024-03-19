"use client";
import   Slider, {Settings}  from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import BillboardCard from "./billboard";

import { Billboard } from "@/types";

interface carouselProps {
    billboards: Billboard[]
}

export const HomePageCarousel: React.FC<carouselProps> =  ({billboards}) => {

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
   autoplaySpeed: 1700
   
  };
    return (
     <Slider {...settings}>
          {billboards.map((billboard) => (
           <BillboardCard key={billboard.id} data={billboard}/>
          ))}
   
     </Slider>
     
   
    )
}

