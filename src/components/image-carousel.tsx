'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Carousel 
      className="w-full h-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <div className="relative aspect-video h-full">
                <Image
                  src={src}
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
