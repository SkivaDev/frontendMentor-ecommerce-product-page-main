import React, { useEffect, useState } from "react";
import { hoverActive, setHoverActive } from "../productStore";

const ImagesGalleryHover = () => {
  const [mainImage, setMainImage] = useState("/images/image-product-1.jpg");

  const [thumbnailIndex, setThumbnailIndex] = useState(1);

  const handleImageSelected = (index: number, src: string) => {
    setThumbnailIndex(index);
    setMainImage(src);
  };

  const handleImageHover = (imageId: number) => {
    if (imageId < 1) {
      setThumbnailIndex(4);
      setMainImage(images[3].picture);
    } else if (imageId > 4) {
      setThumbnailIndex(1);
      setMainImage(images[0].picture);
    } else {
      setThumbnailIndex(imageId);
      setMainImage(images[imageId - 1].picture);
    }
  };

  const images = [
    {
      id: 1,
      thumbnail: "/images/image-product-1-thumbnail.jpg",
      picture: "/images/image-product-1.jpg",
      alt: "product 1",
    },
    {
      id: 2,
      thumbnail: "/images/image-product-2-thumbnail.jpg",
      picture: "/images/image-product-2.jpg",
      alt: "product 2",
    },
    {
      id: 3,
      thumbnail: "/images/image-product-3-thumbnail.jpg",
      picture: "/images/image-product-3.jpg",
      alt: "product 3",
    },
    {
      id: 4,
      thumbnail: "/images/image-product-4-thumbnail.jpg",
      picture: "/images/image-product-4.jpg",
      alt: "product 4",
    },
  ];

  return (
    <div className="w-full h-full px-[85px] flex flex-col-reverse justify-center items-center gap-[40px]">
      <div className="gallery-column flex gap-[30px] h-auto">
        <ImageItem
          index={1}
          thumbnail="/images/image-product-1-thumbnail.jpg"
          alt="product 1"
          active={thumbnailIndex === 1}
          onThumbnail={handleImageHover}
        />

        <ImageItem
          index={2}
          thumbnail="/images/image-product-2-thumbnail.jpg"
          alt="product 2"
          active={thumbnailIndex === 2}
          onThumbnail={handleImageHover}
        />

        <ImageItem
          index={3}
          thumbnail="/images/image-product-3-thumbnail.jpg"
          alt="product 3"
          active={thumbnailIndex === 3}
          onThumbnail={handleImageHover}
        />

        <ImageItem
          index={4}
          thumbnail="/images/image-product-4-thumbnail.jpg"
          alt="product 4"
          active={thumbnailIndex === 4}
          onThumbnail={handleImageHover}
        />
      </div>

      <div
        className="main-image relative w-[550px] h-[550px]"
        //   onClick={() => setHoverActive(true)}
      >
        <img
          src={mainImage}
          alt="Main product"
          className="cursor-zoom-in h-full object-contain w-full rounded-[18px]"
        />

        <div className="absolute top-[-55px] right-[-17px]">
          <button
            onClick={() => setHoverActive(false)}
            className="w-[55px] h-[55px] flex justify-center items-center"
          >
            <img
              src="/images/icon-close.svg"
              alt="icon-close"
              className="button-filter w-[20px]"
            />
          </button>
        </div>

        <div className="absolute top-[44%] translate-x-[-50%]">
          <button
            onClick={() => handleImageHover(thumbnailIndex - 1)}
            className="orange-filter w-[55px] h-[55px] flex justify-center items-center bg-white rounded-full"
          >
            <img src="/images/icon-previous.svg" alt="icon-previous" />
          </button>
        </div>
        <div className="absolute top-[44%] translate-x-[-50%] right-[-55px]">
          <button 
          onClick={() => handleImageHover(thumbnailIndex + 1)}
          className="orange-filter w-[55px] h-[55px] flex justify-center items-center bg-white rounded-full">
            <img src="/images/icon-next.svg" alt="icon-next" />
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
  alt,
  onThumbnail
}: {
  index: number;
  thumbnail: string;
  active: boolean;
  alt: string;
  onThumbnail: (index: number) => void;
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
            onClick={() => onThumbnail(index)}
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
