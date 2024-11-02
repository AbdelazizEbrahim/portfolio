import React from 'react';
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className='h-full mb-20'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl mt-10 xl:mt-0'>Software Developer</span>
            <h1 className='h1'>
              Hello I am <br /> <span className='text-accent'>Abdelaziz Ebrahim</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital experiences and websites and I am proficient in different programming languages.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button 
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition all duration-500"
                />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;
