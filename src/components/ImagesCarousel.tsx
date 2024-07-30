import React from "react";

const ImagesCarousel = () => {
  return (
    <div className="basis-0 grow-[2] shrink flex-wrap">
      <div className="flex grow-0 flex-shrink basis-auto">
        <div className="flex basis-0 grow-[2] shrink flex-wrap w-full">
          <div className="basis-0 grow shrink flex-wrap">
            <div className="w-full h-full min-h-[570px] relative px-[85px]">
              <div className="gallery-column bottom-0 flex gap-[30px] h-auto absolute z-0">

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
      <span className="block">
        <label htmlFor="" className="relative">
          <div className="rounded-[20px] mr-0 z-[5] cursor-pointer overflow-hidden relative">
            <button className="bg-white border-none cursor-pointer outline-none h-[90px] w-[90px] p-[2px]">
              <img
                src={thumbnail}
                alt={alt}
                className="h-full w-full object-contain"
              />
            </button>
          </div>
        </label>
        <figure className="absolute left-[-13px] top-[-494px] w-[477px] flex m-0 opacity-100 z-[1] text-center visible h-full min-h-[480px] p-4">
          <img
            src={picture}
            alt={alt}
            className="cursor-zoom-in h-auto object-contain w-full rounded-[18px]"
          />
        </figure>
      </span>
      <input type="text" className="hidden"/>
    </>
  );
};

export default ImagesCarousel;
