import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.png'

import React from 'react';

import MainNav from '@/components/main-nav';
import getCategories from '@/actions/get-categories';
import NavbarActions from '@/components/navbar-actions';
import { FaShoppingBasket } from 'react-icons/fa';

export const revalidate = 0;
const NavBar =  async() => {
  const categories = await getCategories()
  return (
    <div className='relative'>
       <div className='sticky top-0 left-0 w-full border border-light-grey shadow-sm z-40'>
              <div className='navbar'>
              <Link href='/' className='nav-logo' >
                <p>SHOP</p>          
                <FaShoppingBasket className='text-orange'/>    
              </Link>
             
              <MainNav data={categories} />
              <NavbarActions/>
            
            </div>
  
            </div>
    </div>
           
            
  )
}

export default NavBar