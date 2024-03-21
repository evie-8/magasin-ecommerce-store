import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import Container from '@/components/ui/container';
import MainNav from '@/components/main-nav';
import getCategories from '@/actions/get-categories';
import NavbarActions from '@/components/navbar-actions';

export const revalidate = 0;
const NavBar =  async() => {
  const categories = await getCategories()
  return (
    <div className='bg-white sticky top-0 left-0  z-40'>
      <div className='border-b border-light-grey'>
        <Container>
            <div className='px-4 sm:px-6  lg:px-8 flex h-16 items-center'>
            <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2' >
            <p className='font-bold md:text-2xl  text-xl text-black'>magasin</p>
            </Link>
            <MainNav data={categories}/>
            <NavbarActions/>
           
            </div>
        
        </Container>
    </div>
    </div>
  )
}

export default NavBar