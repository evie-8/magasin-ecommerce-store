"use client";
import   Slider, {Settings}  from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Header1  from "@/components/header1";

const arrays = [
   {
    title: "Shop Now",
    url: "images/slide1.png",
    slogan1: "All Your Needs",
    slogan2: "In one Place!",
    bg: 'images/bg1.jpg'
  },
  {
    title: "Explore Now",
    url: "images/woman2.png",
    slogan1: "Chic Choices",
    slogan2: "Endless Possibilities.",
    bg: "images/bg2.jpg"
    
  },
  {
    title: "Discover Now",
    url: "images/woman1.png",
    slogan1: "Shop the Latest",
    slogan2: "Be the Greatest",
    bg: "images/bg3.jpg"
    
  }, {
    title: 'Discover Trends',
    url: "images/woman3.png",
    slogan1: 'Elegant Style',
    slogan2: "Fashion, redefined",
    bg: "images/bg4.jpg"
  }
]



export const Header = () => {

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
          {arrays.map((item, i) => (
            <Header1 key={i} title={item.title} url={item.url} slogan1={item.slogan1} slogan2={item.slogan2} bg={item.bg}/>
          ))}
   
     </Slider>
     
   
    )
}

