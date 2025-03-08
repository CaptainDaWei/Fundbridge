"use client";

import { useState } from "react";
import Image from "next/image";

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function FallbackImage({ src, alt, className = "" }: FallbackImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {!hasError ? (
        <img 
          src={src} 
          alt={alt} 
          className={className}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className={`flex items-center justify-center ${className}`}>
          <div className="text-gray-400 text-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 mx-auto mb-2 opacity-30" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p className="text-sm">{alt}</p>
          </div>
        </div>
      )}
    </>
  );
} 