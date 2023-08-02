'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function BlurImage({ className, image, alt }) {

  const [isLoading, setLoading] = useState(true)

  return (
    <div className={`aspect-w-1 aspect-h-1 w-full h-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ${className}`}>
      <Image
        alt={alt}
        src={image}
        layout="fill"
        className={`
              duration-1000 ease-in-out group-hover:opacity-75 object-cover
              ${isLoading
            ? "scale-105 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
          })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}