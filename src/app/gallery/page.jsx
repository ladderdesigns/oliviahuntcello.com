import { SimpleLayout } from '@/components/SimpleLayout'

const videos = [
  {
    youtubeId: 'aPdSwPe9fTY',
    title: 'Rachmaninoff Sonata for Cello and Piano',
    description:
      'Performed at the Indiana University Jacobs School of Music, Ford Hall',
    date: 'November 4, 2023',
  },
  {
    youtubeId: 'hNGQZo5aumo',
    title: 'Bach Cello Suite no. 6 in D major',
    description:
      'Performed at the Indiana University Jacobs School of Music, Ford Hall',
    date: 'November 4, 2023',
  },
  {
    youtubeId: '1CJPfeHViUQ',
    title: 'Bach Cello Suite no. 3 in C major, Prelude',
    description:
      'Performed at the Indiana University Jacobs School of Music, Ford Hall',
    date: 'April 28, 2022',
  },
  {
    youtubeId: 'MT6FM0fDhRw',
    title: 'Bach Cello Suite no. 3 in C major, Sarabande',
    description:
      'Performed at the Indiana University Jacobs School of Music, Ford Hall',
    date: 'April 28, 2022',
  },
  {
    youtubeId: 'nroVvvNJwgo',
    title: 'Bach Cello Suite no. 3 in C major, Gigue',
    description:
      'Performed at the Indiana University Jacobs School of Music, Ford Hall',
    date: 'April 28, 2022',
  },
  {
    youtubeId: 'Yr-GkpLL8yw',
    title: 'Barber Cello Sonata op. 6',
    description:
      'Performed at the Indiana University Jacobs School of Music, Ford Hall',
    date: 'April 28, 2022',
  },
  {
    youtubeId: 'xAbfDTLZneE',
    title: 'Tchaikovsky Variations on a Rococo Theme op. 33',
    description:
      'Performed at the Indiana University Jacobs School of Music, Ford Hall',
    date: 'April 28, 2022',
  },
]

export const metadata = {
  title: 'Gallery',
  description:
    'Video performances by cellist Olivia Hunt, including Bach, Barber, Rachmaninoff, and Tchaikovsky.',
}

export default function Gallery() {
  return (
    <SimpleLayout
      title="Video performances"
      intro="Recordings of recent recitals and performances."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2"
      >
        {videos.map((video) => (
          <li key={video.youtubeId}>
            <div className="aspect-video overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <h2 className="mt-4 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              {video.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {video.description}
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
              {video.date}
            </p>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
