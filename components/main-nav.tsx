"use client"

import { Category } from '@/types';
import { ChevronDown, ChevronUp,  Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useState } from 'react';

interface MainNavProps {
    data: Category[]
};


const MainNav: React.FC<MainNavProps> = ({data}) => {
  const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
        
    }))

    const categoryToggle = () => {
      setShowMenu((prev) => !prev);
    };
    

  return (
    <>
     <p 
      className='flex items-center justify-center p-4 text-orange gap-2 text-[19px] max-md:text-sm lg:hidden' onClick={categoryToggle}>
        Categories <ChevronDown className={`${showMenu ? 'rotate-180': ''}`}/>
      </p>
    <ul className={`nav-menu ${showMenu ? 'max-lg:flex': ''}`}>
     {
        routes.map((route) => (
          <li key={route.href} className=''>
            <Link 
              href={route.href} 
              className=''>
                {route.label}
            </Link>
            {
              route.active ? <hr/>  : ''
            }
            </li>
        ))
      }
      
     
    </ul>
    </>
  )
}

export default MainNav