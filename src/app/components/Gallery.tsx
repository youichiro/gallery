import Image from "next/image";

export default function Gallery ({ images, onImageClick }: { images: string[], onImageClick: (image: string) => void }) {
  return (
    <div id="gallery" className="columns-1 gap-4 px-4 my-16 py-16 min-[440px]:columns-2 lg:columns-3 space-y-4">
      {images.map((image, index) => (
        <div key={index} className="relative w-full overflow-hidden group break-inside-avoid mb-4">
          <Image
            src={image}
            alt={image}
            priority={false}
            width={800}
            height={600}
            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
            onClick={() => onImageClick(image)}
          />
        </div>
      ))}
    </div>
  )
}