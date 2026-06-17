import Image from "next/image";
import { imageUrl } from "../lib/imageUrl";
import { GalleryImage } from "../types";

export default function Gallery ({ images, onImageClick }: { images: GalleryImage[], onImageClick: (image: string) => void }) {
  return (
    <div id="gallery" className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mb-16">
      {images.map(({ src, vertical }) => (
        <div
          key={src}
          className={`relative w-full overflow-hidden group ${
            vertical ? 'aspect-[2/3] row-span-2' : 'aspect-[3/2]'
          }`}
        >
          <Image
            src={imageUrl(src)}
            alt={src}
            priority={false}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
            onClick={() => onImageClick(src)}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2UwZTBlMCIvPjwvc3ZnPg=="
          />
        </div>
      ))}
    </div>
  )
}
