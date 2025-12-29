import Image from "next/image";

export default function Gallery ({ images, onImageClick }: { images: string[], onImageClick: (image: string) => void }) {
  return (
    <div id="gallery" className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mb-16">
      {images.map((image, index) => {
        const isVertical = image.includes("vertical") ? true : false;

        return (
          <div
            key={index}
            className={`relative w-full overflow-hidden group ${
              isVertical ? 'aspect-[2/3] lg:row-span-2' : 'aspect-[3/2]'
            }`}
          >
            <Image
              src={image}
              alt={image}
              priority={false}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
              onClick={() => onImageClick(image)}
            />
          </div>
        );
      })}
    </div>
  )
}