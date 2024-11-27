'use client'
import { useState, useEffect } from 'react';// Assuming Button is already defined
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const images = [
  "/hero1.png",
  "/hero2.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handlers for manual image navigation
  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <section className="relative sm:h-[100vh] h-[70vh] w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src={images[currentImage]}
        alt="Hero background"
        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay for text visibility */}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-4">
          Study In Russia
        </h1>
        <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-zinc-200 mb-8">
          Join with us to make your life successful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="text-zinc-200 bg-zinc-900">
            <Link href="#Consultation">Get Free Consultation</Link>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-zinc-200 p-3 rounded-full hover:bg-black/70 transition"
      >
        <ArrowLeft /> 
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-zinc-200 p-3 rounded-full hover:bg-black/70 transition"
      >
        <ArrowRight />
      </button>
    </section>
  );
};

export default Hero;
