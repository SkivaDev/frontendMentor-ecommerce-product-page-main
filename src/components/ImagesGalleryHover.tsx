import React, { useEffect, useState } from "react";
import { hoverActive, setHoverActive } from "../productStore";

const ImagesGalleryHover = () => {
  const [mainImage, setMainImage] = useState("/images/image-product-1.jpg");

  const [thumbnailIndex, setThumbnailIndex] = useState(1);

  const handleImageSelected = (index: number, src: string) => {
    setThumbnailIndex(index);
    setMainImage(src);
  };

  return (
    <div className="relative w-full max-w-[700px] h-full max-h-[700px] px-[85px] flex flex-col-reverse justify-center items-center">
      <div className="gallery-column flex gap-[30px] h-auto">
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

      <div
        className="main-image relative w-[500px] h-[500px]"
        //   onClick={() => setHoverActive(true)}
      >
        <img
          src={mainImage}
          alt="Main product"
          className="cursor-zoom-in h-auto object-contain w-full rounded-[18px]"
        />

        <div className="absolute top-0 right-0">
          <button
            onClick={() => setHoverActive(false)}
            className="w-[10px] h-[10px] bg-orange rounded-full p-4"
          >
            X
          </button>
        </div>

        <div className="absolute top-[50px] left-[50px]">
          <button className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full">
            <img src="/images/icon-previous.svg" alt="icon-previous" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ImageItem = ({
  index,
  thumbnail,
  active,
  picture,
  alt,
  onHover,
}: {
  index: number;
  thumbnail: string;
  active: boolean;
  picture: string;
  alt: string;
  onHover: (index: number, src: string) => void;
}) => {
  useEffect(() => {}, [active]);

  return (
    <span className="block">
      <label htmlFor="" className="relative">
        <div className="z-[5] relative">
          <button
            className={`${
              active ? "border-[2px] border-orange" : ""
            } rounded-[20px] overflow-hidden bg-white cursor-pointer outline-none h-[90px] w-[90px]`}
            // onMouseEnter={() => onHover(index, picture)}
          >
            <img
              src={thumbnail}
              alt={alt}
              className={`${
                active ? "thumbnail-filter" : ""
              } h-full w-full object-contain`}
            />
          </button>
        </div>
      </label>
    </span>
  );
};

export default ImagesGalleryHover;
