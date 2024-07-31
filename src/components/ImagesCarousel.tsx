import { useStore } from "@nanostores/react";
import React, { useEffect, useState } from "react";
import { hoverActive, setHoverActive } from "../productStore";

const ImagesCarousel = () => {
  const [mainImage, setMainImage] = useState("/images/image-product-1.jpg");

  const [thumbnailIndex, setThumbnailIndex] = useState(1);

  const handleImageSelected = (index: number, src: string) => {
    setThumbnailIndex(index);
    setMainImage(src);
  }

  const $hoverActive = useStore(hoverActive);

  return (
    <div className="basis-0 grow-[2] shrink flex-wrap">
      <div className="flex grow-0 flex-shrink basis-auto">
        <div className="flex basis-0 grow-[2] shrink flex-wrap w-full">
          <div className="basis-0 grow shrink flex-wrap">
            <div className="w-full h-full min-h-[570px] relative px-[85px]">
              <div className="gallery-column bottom-0 flex gap-[30px] h-auto absolute z-0">
                <ImageItem
                  index={1}
                  thumbnail="/images/image-product-1-thumbnail.jpg"
                  picture="/images/image-product-1.jpg"
                  alt="product 1"
                  active={thumbnailIndex === 1}
                  onHover={handleImageSelected}
                />

                <ImageItem
                  index={2}
                  thumbnail="/images/image-product-2-thumbnail.jpg"
                  picture="/images/image-product-2.jpg"
                  alt="product 2"
                  active={thumbnailIndex === 2}
                  onHover={handleImageSelected}
                />

                <ImageItem
                  index={3}
                  thumbnail="/images/image-product-3-thumbnail.jpg"
                  picture="/images/image-product-3.jpg"
                  alt="product 3"
                  active={thumbnailIndex === 3}
                  onHover={handleImageSelected}
                />

                <ImageItem
                  index={4}
                  thumbnail="/images/image-product-4-thumbnail.jpg"
                  picture="/images/image-product-4.jpg"
                  alt="product 4"
                  active={thumbnailIndex === 4}
                  onHover={handleImageSelected}
                />
              </div>

              <div className="main-image" onClick={() => setHoverActive(true)}>
                <img
                  src={mainImage}
                  alt="Main product"
                  className="cursor-zoom-in h-auto object-contain w-full rounded-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageItem = ({index, thumbnail, active, picture, alt, onHover }: {index:number; thumbnail: string; active: boolean; picture: string; alt: string; onHover: (index:number, src: string) => void }) => {


  useEffect(() => {
    
  }, [active])
  

  return (
    <span className="block">
      <label htmlFor="" className="relative">
        <div className="z-[5] relative">
          <button
            className={`${active ? "border-[2px] border-orange" : ""} rounded-[20px] overflow-hidden bg-white cursor-pointer outline-none h-[90px] w-[90px]`}
            onMouseEnter={() => onHover(index, picture)}
          >
            <img
              src={thumbnail}
              alt={alt}
              className={`${active ? "thumbnail-filter" : ""} h-full w-full object-contain`}
            />
          </button>
        </div>
      </label>
    </span>
  );
};

export default ImagesCarousel;
