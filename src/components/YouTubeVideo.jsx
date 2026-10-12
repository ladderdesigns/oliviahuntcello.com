'use client'

import { useState } from 'react'
import Image from 'next/image'

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 68 48" aria-hidden="true" {...props}>
      <path
        d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26Z"
        className="fill-zinc-900/80 transition group-hover:fill-red-600"
      />
      <path d="M45 24 27 14v20" className="fill-white" />
    </svg>
  )
}

export function YouTubeVideo({ id, title, priority = false }) {
  let [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play ${title}`}
      className="group relative block h-full w-full"
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        unoptimized
        priority={priority}
        className="object-cover"
      />
      <PlayIcon className="absolute top-1/2 left-1/2 h-12 w-16 -translate-x-1/2 -translate-y-1/2" />
    </button>
  )
}
