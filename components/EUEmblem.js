import Image from 'next/image'

// variant: 'pos' (blue text, for light bg) | 'neg' (white text, for dark bg) | 'white' | 'black'
export default function EUEmblem({ variant = 'pos', width = 220 }) {
  const src = `/eu-emblem/${variant}.png`
  const height = Math.round(width * 0.295) // aspect ratio ~3.39:1

  return (
    <Image
      src={src}
      alt="Co-funded by the European Union"
      width={width}
      height={height}
      style={{ width: width, height: 'auto' }}
      priority={false}
    />
  )
}
