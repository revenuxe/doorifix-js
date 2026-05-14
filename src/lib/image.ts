import type { StaticImageData } from "next/image";

export function imageSrc(src: string | StaticImageData) {
  return typeof src === "string" ? src : src.src;
}
