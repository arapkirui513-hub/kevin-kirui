import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export function Figure({
  src,
  alt,
  caption,
  width,
  height,
}: FigureProps) {
  return (
    <figure className="my-12">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
        />
      </div>

      <figcaption className="mt-4 text-sm leading-relaxed text-black/60">
        {caption}
      </figcaption>
    </figure>
  );
}