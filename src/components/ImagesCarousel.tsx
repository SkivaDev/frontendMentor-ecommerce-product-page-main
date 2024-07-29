import React from "react";

const ImagesCarousel = () => {
  return (
    <div className="basis-0 grow-[2] shrink flex-wrap">
      <div className="flex grow-0 flex-shrink basis-auto">
        <div className="flex basis-0 grow-[2] shrink flex-wrap w-full">
          <div className="basis-0 grow shrink flex-wrap">
            <div className="w-full h-full min-h-[500px] relative">
              <div className="gallery-column h-auto ml-[16px] mt-[16px] absolute z-0">

                <ImageItem thumbnail="/images/image-product-1-thumbnail.jpg" picture="/images/image-product-1.jpg" alt="product 1" />

                <ImageItem thumbnail="/images/image-product-2-thumbnail.jpg" picture="/images/image-product-2.jpg" alt="product 2" />

                <ImageItem thumbnail="/images/image-product-3-thumbnail.jpg" picture="/images/image-product-3.jpg" alt="product 3" />

                <ImageItem thumbnail="/images/image-product-4-thumbnail.jpg" picture="/images/image-product-4.jpg" alt="product 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageItem = ({ thumbnail, picture, alt }: { thumbnail: string; picture: string; alt: string }) => {
  return (
    <>
      <span className="block mb-[8px]">
        <label htmlFor="" className="relative">
          <div className="rounded-[4px] mr-0 z-[5] cursor-pointer overflow-hidden relative">
            <button className="bg-white border-none cursor-pointer outline-none h-[48px] w-[48px] p-[2px]">
              <img
                src={thumbnail}
                alt={alt}
                className="h-full w-full object-contain"
              />
            </button>
          </div>
        </label>
        <figure className="left-[56px] w-[700px] flex m-0 opacity-100 z-[1] text-center visible h-full min-h-[500px] p-4 absolute top-0">
          <img
            src={picture}
            alt={alt}
            className="cursor-zoom-in h-auto object-contain pt-[24px] w-full"
          />
        </figure>
      </span>
      <input type="text" />
    </>
  );
};

export default ImagesCarousel;
