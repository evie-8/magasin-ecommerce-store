"use client"

import { cn } from '@/lib/utils';
import { Category } from '@/types';
import { ChevronDownCircle, ChevronUpCircle, Menu } from 'lucide-react';
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
      className='flex  p-4 text-orange gap-4 text-xl max-lg:text-sm lg:hidden' onClick={categoryToggle}>
        Categories 
       {
        !showMenu ?  <ChevronDownCircle size={24} className='mt-1'/>
         :  <ChevronUpCircle size={24} className='mt-1'/>
       }
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