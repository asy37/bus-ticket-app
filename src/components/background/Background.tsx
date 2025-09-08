'use client';
import React from 'react';
import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import { Button } from '../ui/button';

import { mockBackgroundsData } from './mockData';

export const Background = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: 500,
      behavior: 'smooth',
    });
  };

  return (
    <div className="h-[760px] w-full">
      <Carousel
        className="absolute top-0 -z-10 w-full overflow-hidden"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {mockBackgroundsData.map((background) => (
            <CarouselItem key={background.id} className="relative h-[760px] w-full flex-shrink-0">
              <Image
                alt={background.alt}
                src={background.url}
                fill
                style={{ objectFit: 'cover' }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute top-0 flex h-[760px] w-full flex-col items-start justify-center gap-8 bg-black/20 px-20">
        <h1 className="w-52 text-2xl text-white lg:w-96 lg:text-6xl">
          Are you ready explore Türkiye with us?
        </h1>
        <Button onClick={handleScrollDown} type="button" variant="outline" className="w-32">
          Explore
        </Button>
      </div>
    </div>
  );
};
