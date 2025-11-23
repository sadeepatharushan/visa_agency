'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { heroImages as rawHeroImages } from '@/consts';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // ✅ Fixed: Removed unnecessary dependency from useMemo
  const heroImages = useMemo<string[]>(() => {
    if (!rawHeroImages) return [];
    return rawHeroImages
      .map((item) => {
        const typed = item as string | { url?: string };
        const url = typeof typed === 'string' ? typed : typed?.url ?? '';
        return url.startsWith('/') ? url : `/${url}`;
      })
      .filter(Boolean) as string[];
  }, []); // <-- only runs once since rawHeroImages is static

  useEffect(() => {
    console.log('Hero: images', heroImages);
  }, [heroImages]);

  // Auto rotate every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false);
      setError(false);
      setCurrentImage((p) => (heroImages.length ? (p + 1) % heroImages.length : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleNextImage = () => {
    setLoaded(false);
    setError(false);
    setCurrentImage((p) => (heroImages.length ? (p + 1) % heroImages.length : 0));
  };

  const handlePrevImage = () => {
    setLoaded(false);
    setError(false);
    setCurrentImage((p) =>
      heroImages.length ? (p === 0 ? heroImages.length - 1 : p - 1) : 0
    );
  };

  const currentSrc = heroImages[currentImage] ?? null;

  useEffect(() => {
    console.log('Hero: currentImage index ->', currentImage, 'src ->', currentSrc);
  }, [currentImage, currentSrc]);

  if (!heroImages.length) {
    return (
      <section className="relative h-[70vh] sm:h-screen w-full overflow-hidden bg-neutral-800 flex items-center justify-center">
        <p className="text-zinc-100">
          No hero images found — check <code>/consts</code>
        </p>
      </section>
    );
  }

  return (
    <section className="relative h-[70vh] sm:h-screen w-full overflow-hidden">
      {/* Background placeholder */}
      <div
        aria-hidden
        className={`absolute inset-0 transition-colors duration-500 ${
          loaded ? 'bg-transparent' : 'bg-zinc-800'
        }`}
      />

      {/* Next.js Image */}
      {currentSrc && (
        <div className="absolute inset-0">
          <Image
            key={currentSrc + `-${currentImage}`}
            src={currentSrc}
            alt={`Hero ${currentImage}`}
            fill
            unoptimized={true}
            priority
            style={{ objectFit: 'cover', opacity: loaded ? 1 : 0, transition: 'opacity 600ms ease' }}
            onLoad={() => {
              console.log('Hero: image loaded ->', currentSrc);
              setLoaded(true);
              setError(false);
            }}
            onError={(e) => {
              console.error('Hero: image error ->', currentSrc, e);
              setError(true);
              setLoaded(false);
            }}
          />
        </div>
      )}

      {/* Fallback <img> */}
      {error && currentSrc && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={currentSrc}
            alt="fallback hero"
            className="w-full h-full object-cover"
            onLoad={() => {
              console.log('Fallback <img> loaded', currentSrc);
              setLoaded(true);
              setError(false);
            }}
            onError={(e) => {
              console.error('Fallback <img> failed', currentSrc, e);
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Hero content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-4"
        >
          Study In Russia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl sm:text-2xl text-zinc-200 mb-8"
        >
          Join with us to make your life successful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild className="text-zinc-200 bg-[#002244] hover:bg-[#0a2351]">
            <Link href="#Consultation">Get Free Consultation</Link>
          </Button>
        </motion.div>
      </div>

      {/* Controls */}
      <button
        onClick={handlePrevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-zinc-200 p-3 rounded-full hover:bg-black/70 transition"
        aria-label="Previous image"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-zinc-200 p-3 rounded-full hover:bg-black/70 transition"
        aria-label="Next image"
      >
        <ChevronRight />
      </button>

      {/* Loading debug */}
      {!loaded && (
        <div className="absolute bottom-4 left-4 bg-black/60 text-zinc-100 px-3 py-1 rounded">
          <span className="text-sm">
            Loading image {currentImage + 1}/{heroImages.length}
          </span>
        </div>
      )}
    </section>
  );
};

export default Hero;
