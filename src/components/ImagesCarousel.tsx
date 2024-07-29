import React from "react";

const ImagesCarousel = () => {
  return (
    <div className="basis-0 grow-[2] shrink flex-wrap">
      <div className="flex grow-0 flex-shrink basis-auto">
        <div className="flex basis-0 grow-[2] shrink flex-wrap w-full">
          <div className="basis-0 grow shrink flex-wrap">
            <div className="w-full h-full min-h-[500px] relative">
              <div className="gallery-column h-auto ml-[16px] mt-[16px] absolute z-0">
                <span className="block mb-[8px]">
                  <label htmlFor="" className="relative">
                    <div className="rounded-[4px] mr-0 z-[5] cursor-pointer overflow-hidden relative">
                      <button className="bg-white border-none cursor-pointer outline-none h-[48px] w-[48px] p-[2px]">
                        <img
                          src="/images/image-product-1-thumbnail.jpg"
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </button>
                    </div>
                  </label>
                  <figure className="left-[56px] w-[700px] flex m-0 opacity-100 z-[1] text-center visible h-full min-h-[500px] p-4 absolute top-0">
                    <img
                      src="https://http2.mlstatic.com/D_NQ_NP_685237-MPE75032805143_032024-O.webp"
                      alt=""
                      className="cursor-zoom-in h-auto object-contain pt-[24px] w-full"
                    />
                  </figure>
                </span>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesCarousel;
