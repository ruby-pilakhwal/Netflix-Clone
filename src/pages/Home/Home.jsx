import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
const Home = () => {
  return (
    <div className=''>
            <Navbar/>
            
        {/* HERO */}
            <div className="hero relative ">
              <img className="banner-img w-[100%] "
                 style={{maskImage: 'linear-gradient(to right, transparent, black)'}}
                src={hero_banner} alt="hero_banner"/>
              <div className="hero-caption absolute w-[100%] bottom-[0] pl-[6%] ">
                <img className="caption-img w-[90%] max-w-[420px] mb-[30px] " src={hero_title} alt="" />
                <p className="caption-text max-w-[700px] mb-[20px] text-[17px] ">A group of teenagers from different cliques are forced to work together.</p>
                <div className="hero-btns">
                  <button><img src={play_icon} alt="" />Play</button>
                  {/* <button><img src={info_icon} alt="" />More Info</button> */}
                </div>
                
              </div>

            </div>
      
    </div>
  )
}

export default Home
