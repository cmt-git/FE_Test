"use client";

import { useEffect, useState } from "react";
import { CommonImage } from "../common/common_image/common_image.component";

const images = ["banner-1.png", "banner-2.png", "banner-3.png"];

//region: Banner
export function Banner() {
  const [carrouselIndex, setCarrouselIndex] = useState(0);

  const moveCarrouselIndex = () => {
    if (carrouselIndex + 1 > images.length - 1) {
      setCarrouselIndex(0);
    } else {
      setCarrouselIndex((prev) => prev + 1);
    }
  };
  /**
   *
   *
   * SPACE
   *
   *
   */

  useEffect(() => {
    const interval = setInterval(() => {
      moveCarrouselIndex();
    }, 3000);

    return () => clearInterval(interval);
  }, [carrouselIndex]);

  /**
   *
   *
   * SPACE
   *
   *
   */

  return (
    <div className="flex flex-col gap-2 w-full px-3 pt-3 pb-2 relative">
      <div
        className={`w-full h-[180px] bg-black relative`}
        onClick={() => {
          moveCarrouselIndex();
        }}
      >
        <CarouselImage type="first" index={carrouselIndex} />
        <CarouselImage type="backdrop" index={carrouselIndex} />
        <div className="absolute z-20 flex flex-col justify-between w-[150px] h-full px-6 py-7">
          <b className="text-sm text-white">RESCUE</b>
          <b className="text-sm text-secondary">BONUS</b>
          <b className="text-sm text-white">WE ARE HERE FOR YOU</b>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-primary">
        <CommonImage type="svg" fileName="bell" className="w-4 h-4" />
        <span className="line-clamp-1">
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
        </span>
      </div>
    </div>
  );
}

/**
 *
 *
 * SPACE
 *
 *
 */

function CarouselImage(_props: { type: "first" | "backdrop"; index: number }) {
  const [animClass, setAnimClass] = useState<string>("");

  const [currentImage, setCurrentImage] = useState<string>("");
  const setImage = () =>
    setCurrentImage(images[_props.index - (_props.type == "first" ? 0 : 1)]);

  useEffect(() => {
    if (_props.type != "first") {
      setImage();
      return;
    }

    setAnimClass("");
    setImage();
    setTimeout(() => {
      setAnimClass("animate-carrousel-show");
    }, 100);
  }, [_props.index]);

  return (
    <>
      <div
        className={`${
          _props.type == "first"
            ? `z-10 ${animClass} opacity-0`
            : "z-0 opacity-100"
        } bg-[url('/png/${
          currentImage ?? images[images.length - 1]
        }')] rounded-lg bg-no-repeat bg-cover absolute top-0 left-0 w-full h-full`}
      />
    </>
  );
}
