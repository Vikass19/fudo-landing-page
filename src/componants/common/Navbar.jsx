import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import LoginRegister  from './LoginRegister';
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlus,
  HiPlayCircle,
  HiTv,
  HiShoppingCart,
  HiUser
} from 'react-icons/hi2';

const Navbar = () => {
  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCH LIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv }
  ];
  
  const [showLogin , setShowLogin] = useState(false);

  return (
    <> 
    <nav className='flex items-center justify-between px-6 py-4 bg-[#040714] shadow-md'>
      {/* Logo + Menu */}
      <div className='flex items-center gap-10'>
        <img
          src={logo}
          alt='logo'
          className='w-[80px] md:w-[115px] object-cover'
        />

        <div className='hidden md:flex gap-6 text-white'>
          {menu.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href="#"
                className='flex items-center gap-1 text-sm font-medium hover:underline transition'
              >
                <Icon className='w-5 h-5' />
                {item.name}
              </a>
            );
          })}
        </div>
      </div>

      {/* Icons Right */}
      <div className='flex items-center gap-6 text-white'>
        <HiMagnifyingGlass className='w-6 h-6 hover:text-gray-300 cursor-pointer' />
        <HiShoppingCart className='w-6 h-6 hover:text-gray-300 cursor-pointer' />
        <HiUser onClick={() => setShowLogin(true)}  className='w-6 h-6 hover:text-gray-300 cursor-pointer' />
      </div>
    </nav>

    { showLogin && <LoginRegister onClose = {() => setShowLogin(false) } />  }

        </>
  );
};

export default Navbar;
