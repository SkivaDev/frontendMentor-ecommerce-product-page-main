import { useStore } from "@nanostores/react";
import React, { useEffect } from "react";
import { hoverActive, setHoverActive } from "../productStore";
import ImagesGalleryHover from "./ImagesGalleryHover";

const Hover = () => {
  const $hoverActive = useStore(hoverActive);

  useEffect(() => {}, [$hoverActive]);

  return (
    <div
      className={`${
        $hoverActive ? "visible" : "invisible"
      } hidden absolute z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 md:flex items-center justify-center`}
    >
      <ImagesGalleryHover />
    </div>
  );
};

export default Hover;
