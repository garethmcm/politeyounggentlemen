import { Carousel, IconButton } from "@material-tailwind/react";

import plane from "./assets/plane.svg";
import cup from "./assets/cup3.svg";
import starmap from "./assets/starmap.svg";
import starrysky from "./assets/starry sky.svg";
import globe from "./assets/globe.svg";
import globe2 from "./assets/globe2.svg";
import globe4 from "./assets/globe4.svg";

export function SongCarousel() {
  return (
    <Carousel
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      loop
      className="rounded-xl overflow-hidden"
      style={{ backgroundColor: "rgb(0, 43, 22)" }}
      prevArrow={({ handlePrev }) => (
        <IconButton
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <img
          src={plane}
          alt="plane"
          className="object-contain invert"
          style={{ width: "65%", height: "auto", marginBottom: "10%"}}
        />
        <div className="absolute left-1 top-0 font-moon text-white text-2xl">The Trip</div>
      </div>
      <div
        className="relative flex items-center justify-center w-full h-full"
        style={{marginLeft: "4%"}}
      >
        <img
          src={cup}
          alt="cup"
          className="object-contain invert"
          style={{ width: "40%", height: "auto"}}
        />
        <div className="absolute right-7 top-0 font-moon text-white text-2xl">Coffee Cup Baby</div>
      </div>
      {/* <div
        className="relative flex items-center justify-center w-full h-full"
        style={{ marginTop: "13%" }}
      >
        <img
          src={starmap}
          alt="starmap"
          className="object-contain invert"
          style={{ width: "50%", height: "auto", marginBottom: "30%" }}
        />
        <div
          className="absolute right-2 bottom-[5.5rem] font-moon text-white text-2xl"
          style={{ zIndex: 10 }}
        >
          That Night
        </div>
      </div> */}
      <div
        className="relative flex w-full h-full"
      >
        <img
          src={starrysky}
          alt="starmap"
          className="object-cover"
          style={{ marginTop: "0", width: "100%", height: "100%"}}
        />
        <div
          className="absolute right-1 bottom-2 font-moon text-white text-2xl"
          style={{ zIndex: 10 }}
        >
          That Night
        </div>
      </div>
      {/* <div className="relative flex items-center justify-center w-full">
        <img
          src={globe}
          alt="earth"
          className="object-contain invert"
          style={{ width: "40%", height: "auto", marginTop: "25%" }}
        />
        <div
          className="absolute left-2 bottom-0 font-moon text-white text-2xl"
        >
          Weird Goodbye
        </div>
      </div> */}
      {/* <div className="relative flex items-center justify-center w-full">
        <img
          src={globe2}
          alt="earth"
          className="object-contain invert"
          style={{ width: "70%", height: "auto", marginTop: "14%" }}
        />
        <div
          className="absolute left-1 bottom-[1rem] font-moon text-white text-2xl"
          style={{ marginBottom: "-12%" }}
        >
          Weird Goodbye
        </div>
      </div> */}
      <div className="relative flex items-center justify-center w-full">
        <img
          src={globe4}
          alt="earth"
          className="object-contain invert"
          style={{ width: "70%", height: "auto", marginTop: "14%" }}
        />
        <div
          className="absolute left-1 bottom-[1rem] font-moon text-white text-2xl"
          style={{ marginBottom: "-12%" }}
        >
          Weird Goodbye
        </div>
      </div>
    </Carousel>
  );
}

export default SongCarousel;