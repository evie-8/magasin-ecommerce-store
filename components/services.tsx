import Image from 'next/image'
import React from 'react'

const array  = [
    {
        name: 'Free Shipping',
        url: 'images/shipping.jpg',
        color: '#00DFC2'

    },
    {
        name: 'Money back',
        url: 'images/refund.jpg',
        color: '#E48DDE'

    },
    {
        name: '24/7 Support',
        url: 'images/support.jpg',
        color: '#BCEDF1'

    },
    {
        name: 'Easy Buy',
        url: 'images/easy.jpg',
        color: '#D6EEF2',

    },
    {
        name: 'Save Money',
        url: 'images/savings (2).jpg',
        color: '#007DFE'

    },
]

const Services = () => {
  return (
    <div className='flex items-center md:justify-center md:px-10 p-5 justify-between flex-wrap'>
        {
            array.map((data) => (
                <div key={data.name} className='text-center md:w-44 w-[150px] px-6 py-4 shadow-sm border border-light-grey rounded-md md:m-4 m-0 mb-2 ml-2 hover:shadow-xl'>
                    <Image src={`/${data.url}`} width={150} height={150} className='w-full mb-2 aspect-square' alt='services'/>
                    <h6 style={{ backgroundColor: data.color }} className='inline-block pt-[9px] pl-2 pr-[6px] pb-2 leading-none rounded-md text-black font-semibold'>{data.name}</h6>
 
                </div>
            ))
        }

    </div>
  )
}

export default Services