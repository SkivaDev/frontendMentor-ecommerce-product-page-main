import { useStore } from "@nanostores/react";
import React, { useEffect } from "react";
import { hoverActive, setHoverActive } from "../productStore";

const Hover = () => {
  const $hoverActive = useStore(hoverActive);

  useEffect(() => {}, [$hoverActive]);

  return (
    <div
      className={`${
        $hoverActive ? "visible" : "invisible"
      } absolute z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center`}
    >
      Hover
      <button onClick={() => setHoverActive(false)} className="w-[10px] h-[10px] bg-orange rounded-full p-4">X</button>
    </div>
  );
};

export default Hover;
