import { Carousel, IconButton } from "@material-tailwind/react";

import plane from "./assets/plane.svg"
import cup from "./assets/cup.svg"
import sky from "./assets/sky.jpeg"
import earth from "./assets/earth.svg"
 
export function SongCarousel() {
  return (
    <Carousel placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
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
        <IconButton placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
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
      <img
        src={ plane }
        alt="plane"
        className="h-full w-full object-cover"
      />
      <img
        src={ cup }
        alt="cup"
        className="h-full w-full object-cover"
      />
      <img
        src={ sky }
        alt="sky"
        className="h-full w-full object-cover"
      />
            <img
        src={ earth }
        alt="earth"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default SongCarousel;