'use client'

import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(
              "span",
              { opacity: 1 },
              {
                duration: 2,
                delay: stagger(0.1),
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animate]);

  const renderWords = () => (
    <motion.p ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="dark:text-zinc-100 opacity-0"
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.p>
  );

  return (
    <div className={cn("", className)}>
      <div className="mt-4" ref={elementRef}>
        <div className="dark:text-zinc-100 leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
