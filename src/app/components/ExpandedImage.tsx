import Image from "next/image";
import { imageUrl } from "../lib/imageUrl";

export default function ExpandedImage({ image, onClose }: { image: string, onClose: () => void }) {
  return (
    <div
      id="selected-image"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <div className="relative w-dvw h-dvh">
        <Image
          src={imageUrl(image)}
          alt="selected"
          quality={100}
          fill
          className="object-contain"
        />
        <button
          className="absolute top-0 right-0 text-slate-200 text-2xl p-4 cursor-pointer hover:text-slate-300"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}
