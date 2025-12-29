import Image from "next/image";

export default function Gallery ({ images, onImageClick }: { images: string[], onImageClick: (image: string) => void }) {
  return (
    <div id="gallery" className="grid grid-cols-1 gap-4 px-4 my-16 py-16 min-[440px]:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div key={index} className="relative w-full aspect-video overflow-hidden group">
          <Image
            src={image}
            alt={image}
            priority={false}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
            onClick={() => onImageClick(image)}
          />
        </div>
      ))}
    </div>
  )
}