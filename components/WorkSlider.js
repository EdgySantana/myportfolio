//next link
import Link from 'next/link';

import { motion } from 'framer-motion';

//work slider data
export  const workSlider = {
  slides: [
    {
      images: [
        {
          id: 'project1',
          title: 'Title 1',
          path: '/thumb1.jpg',
          video: '/project/project1.mp4', // Add video path here
          logo: '/assets/project-logo1.png',  // Path to logo image
          description: 'This is the main description for Project 1.',
          subdescription: 'Additional details or highlights about Project 1.' 
        },
        {
          id: 'project2',
          title: 'title2',
          path: '/thumb2.jpg',
          video: '/project/project2.mp4',
          logo: '/assets/project-logo2.png',  // Path to logo image
          description: 'This is the main description for Project 2.',
          subdescription: 'Additional details or highlights about Project 2.'
        },
        {
          id: 'project3',
          title: 'title3',
          path: '/thumb3.jpg',
          video: '/project/project3.mp4',
          logo: '/assets/project-logo3.png',  // Path to logo image
          description: 'This is the main description for Project 3.',
          subdescription: 'Additional details or highlights about Project 3.'
        },
        {
          id: 'project4',
          title: 'title4',
          path: '/thumb4.jpg',
          video: '/project/project4.mp4',
          logo: '/assets/project-logo4.png',  // Path to logo image
          description: 'This is the main description for Project 4.',
          subdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitatio.',
          info:'Lorem ipsum dolor sit amet, consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim am ipsum dolor sit amet,adipiscing eli sed do eiusmodre magna aliqua.'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

// import swiper react components
import {Swiper, SwiperSlide}  from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image'

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[488px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <Link href={`/project/${image.id}`} key={index} passHref>
                    <div className='relative rounded-lg overflow-hidden flex
                      items-center justify-center group'
                      key={index}
                    >
                      <div className='flex items-center justify-center relative 
                      overflow-hidden group'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt='' />
                        <div className =' absolute inset-0 bg-gradient-to-l
                        from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                        group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full
                        group-hover:-translate-y-10 group-hover:xl-translate-y-20
                        transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-
                          [0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>LIVE</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0
                            transition-all duration-30 delay-150'>
                            Project
                            </div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%]
                            group-hover:translate-y-0 transition-all duration-300
                            delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
