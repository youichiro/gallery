import Image from "next/image";

export default function Gallery ({ images, onImageClick }: { images: string[], onImageClick: (image: string) => void }) {
  return (
    <div id="gallery" className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mb-16">
      {images.map((image, index) => {
        const isVertical = image.includes("vertical") ? true : false;

        return (
          <div
            key={index}
            className={`relative w-full overflow-hidden group bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_200%] animate-[gradient_2s_ease-in-out_infinite] ${
              isVertical ? 'aspect-[2/3] row-span-2' : 'aspect-[3/2]'
            }`}
          >
            <Image
              src={image}
              alt={image}
              priority={false}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
              onClick={() => onImageClick(image)}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iI2U1ZTdlYiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2YzZjRmNiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+"
            />
          </div>
        );
      })}
    </div>
  )
}