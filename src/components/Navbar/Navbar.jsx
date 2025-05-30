import React from 'react'
// import './navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import notification from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import dropdown from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='w-[100%] py-5 px-[6%] flex fixed justify-between  font-[16px] text-[#e5e5e5] bg-[linear-gradient(180deg,_rgba(0,0,0,0.7) 10%, transparent)] z-10'>
     
      {/* navbar left */}
      <div className='flex items-center gap-[50px]'>
        <img src={logo} alt="logo"className='w-[90px]' />
        <ul className='flex list-none gap-[20px]'>
          <li className='hover:text-yellow-200 cursor-pointer' >Home</li>
          <li className='hover:text-yellow-200 cursor-pointer' >TV Shows</li>
          <li className='hover:text-yellow-200 cursor-pointer' >Movies</li>
          <li className='hover:text-yellow-200 cursor-pointer' >New & Popular</li>
          <li className='hover:text-yellow-200 cursor-pointer' >My List</li>
          <li className='hover:text-yellow-200 cursor-pointer' >Browser by Languages</li>
        </ul>

      </div>
      {/* navbar right */}
      <div className='flex gap-[20px] items-center'>
        <img className='w-[20px]  cursor-pointer' src={search_icon} alt="search_icon" />
        <p className='cursor-pointer'>Children</p>
        <img className='w-[20px] cursor-pointer' src={notification} alt="notification" />

        <div className='relative group flex items-center cursor-pointer gap-[10px]'>
          <img className='w-[35px]  cursor-pointer rounded-[4px]' src={profile} alt="profile" />
          <img  src={dropdown} alt="dropdown" />
          <div className="absolute top-[100%] right-[0px] mt-2 w-max bg-[#191919] px-[20px] py-[18px] rounded-[2px] z-10 underline opacity-0 invisible group-hover:opacity-100 group-hover:visible translation-all duration-300">
            <p className='text-[14px] font-[500] cursor-pointer'>
              Sign out 
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
