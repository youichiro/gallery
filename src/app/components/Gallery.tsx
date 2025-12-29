import Image from "next/image";

export default function Gallery ({ images, onImageClick }: { images: string[], onImageClick: (image: string) => void }) {
  return (
    <div id="gallery" className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-16 py-16">
      {images.map((image, index) => {
        // 画像の向きを判定（実際のファイル名や属性で判定する場合は適宜変更）
        const isVertical = false; // 後で画像の実際のサイズに基づいて判定可能

        return (
          <div
            key={index}
            className={`relative w-full overflow-hidden group ${
              isVertical ? 'aspect-[3/4]' : 'aspect-[3/2]'
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