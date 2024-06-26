'use client'
import { Image as ImageType} from '@/types'
import React from 'react'
import { Tab } from '@headlessui/react'
import GalleryTab from '@/components/gallery/gallery-tab'
import Image from 'next/image'
interface GalleryProps {
  images: ImageType[];
  category: string;
  name: string
}
const Gallery: React.FC<GalleryProps> = ({images, name, category}) => {
  return (
      <Tab.Group as='div' className='flex flex-col-reverse'>
        <div className='mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none'>
            <Tab.List className='grid grid-cols-4 gap-6'>
                {
                  images.map((image) => (
                    <GalleryTab key={image.id} image={image}/>
                  ))
                }
            </Tab.List>
        </div>
        <Tab.Panels className='aspect-square w-full '>
         <h2 className='text-xl my-3 mx-4 p-4 font-semibold'>{`${category} > ${name}`}</h2>
          {
           images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
                <Image src={image.url} alt='selected image' fill className='object-cover object-bottom'/>
            </div>
    
          </Tab.Panel>
          )) 
          }
        </Tab.Panels>
      </Tab.Group>
  )
}

export default Gallery