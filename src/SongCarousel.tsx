import { Carousel, IconButton } from "@material-tailwind/react";
import { useState } from "react";

import plane from "./assets/plane.svg";
import cup from "./assets/cup3.svg";
import starrysky from "./assets/starry sky.svg";
import globe4 from "./assets/globe4.svg";

type SongCarouselProps = {
  onSongChange: (song: "The Trip" | "Coffee Cup Baby" | "That Night" | "Weird Goodbye") => void;
};

export function SongCarousel({ onSongChange }: SongCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const songs = ["The Trip", "Coffee Cup Baby", "That Night", "Weird Goodbye"];

  const handleSlideChange = (newIndex: number) => {
    setActiveIndex(newIndex);
    onSongChange(songs[newIndex] as "The Trip" | "Coffee Cup Baby" | "That Night" | "Weird Goodbye");
  };

  return (
    <Carousel
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      loop
      className="rounded-xl overflow-hidden"
      style={{ backgroundColor: "rgb(0, 43, 22)" }}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => {
                setActiveIndex(i);
                handleSlideChange(i);
              }}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="text"
          color="white"
          size="lg"
          onClick={() => {
            handlePrev();
            handleSlideChange((activeIndex - 1 + songs.length) % songs.length);
          }}
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
          onClick={() => {
            handleNext();
            handleSlideChange((activeIndex + 1) % songs.length);
          }}
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