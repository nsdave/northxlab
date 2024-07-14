"use client"

import React, { Fragment, useState } from 'react'
import Lottie from "lottie-react";
import ani from '@/shisan/animation/Animation_ai_circle.json'
import { cn } from '@/lib/utils';
import { poppins } from '@/shisan/utils/fonts';
import Botan from '@/components/shared/Botan';
import { navLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import po from '@/public/logo.png'
import { homeGallery } from '@/constants';
import { Transition } from '@headlessui/react'


const Home = () => {
  const [fullView, setFullView] = useState(false)
  const [fullImg, setFullImg] = useState("")

  function PhotoCard ({ img, tag }: { img: string, tag: string }) {
    return (
      <>
        <div className='w-[18rem] h-[16rem] overflow-hidden rounded-lg
        cursor-pointer relative' 
        onClick={() => {
          setFullImg(img);
          setFullView(true)
        }}
        >
          <img
          src={img}
          className='w-full h-full object-cover ' 
          />
    
          <div className='absolute px-4 py-2 bg-white bottom-2 right-2 
          rounded-md text-black dark:bg-kasutamu dark:text-white' > 
            <p>{tag}</p>
          </div>
    
        </div>
      </>
    )
  }

  return (
    <div className='flex flex-col' >
        <Transition
        appear
          as={Fragment}
          show={fullView}
        >
          <div className='w-[100vw] h-[100vh] fixed z-[99] top-0 left-0 
          flex items-center justify-center bg-white/15 backdrop-blur-sm
          dark:bg-black/15' 
          onClick={() => setFullView(false)}
          >
            <img
              src={fullImg}
              className='sm:h-[80vh] h-[60vh] object-cover shadow-md'
            />
          </div>
        </Transition>
      <section
      className='h-[80vh] flex fixed flex-col items-center self-center mr-[1.2%]'
      >

        <h1 className={cn( poppins.className, "text-8xl text-black font-semibold ",
        "sm:mt-20 mt-12 headtxt text-center")} >
          North <br className='flex sm:hidden' /> X Lab.
        </h1>
        <p className='mt-4 text-kasutamu-200 text-xl' >
          An AI image modification tool
        </p>

        <div className='sm:w-[12vw] w-[34vw] min-h-[14vh] sm:my-0 mt-6 mb-8' >
          <Lottie 
          animationData={ani}
          loop={true}
          />
        </div>
        
        <div className='flex flex-row sm:gap-3 gap-4 flex-wrap justify-center' >
          {navLinks.slice(1,6).map((link) => (
            <Link
            key={link.route}
            href={link.route}
            >
              <Botan 
              text={link.label}
              />
            </Link>
          ))}
        </div>
      </section>

      <section 
      className='min-h-[100vh] z-[60] sm:mt-[78vh] bg-white/30 backdrop-blur-sm
      rounded-2xl p-10 dark:bg-kasutamu/30 mt-[73vh] '
      >
        <h2 className={cn(poppins.className, "text-4xl text-kasutamu-300 font-semibold",
        "mb-10")} >
          Recents
        </h2>

        <div className='flex flex-row flex-wrap w-full gap-8 justify-center
        sm:gap-16 lg:gap-4' >
          {homeGallery.map((mon, idx) => (
            <PhotoCard 
            img={mon.img}
            tag={mon.tag}
            key={idx}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home