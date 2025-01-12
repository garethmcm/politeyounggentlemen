import { useState } from "react";
import SongCarousel from "./SongCarousel";
import DescriptionCard from "./DescriptionCard";

function TheTrip() {

  const [currentSong, setCurrentSong] = useState<"The Trip" | "Coffee Cup Baby" | "That Night" | "Weird Goodbye">("The Trip");

  // Callback to update the current song
  const handleSongChange = (song: "The Trip" | "Coffee Cup Baby" | "That Night" | "Weird Goodbye") => {
    setCurrentSong(song);
  };

    return (
        <div className="text-left prose p-4 w-full max-w-none">
            <div className="flex flex-wrap justify-around gap-4">
        <div
          className="flex-1 border border-white overflow-hidden aspect-square"
        >
          <SongCarousel onSongChange={handleSongChange}/>
        </div>
        <div
          className="flex-1 border border-white"
        >
          <DescriptionCard songTitle={currentSong}/>
        </div>
      </div>
          <br/>
          <div className="flex justify-center items-center">
            <iframe
                style={{ border: 0, width: "500px", height: "274px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=414743476/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
                seamless
                title="Bandcamp Player">
              <a href="https://politeyounggentlemen.bandcamp.com/album/the-trip">
                The Trip by Polite Young Gentlemen
              </a>
            </iframe>
            </div>
        </div>
    )
}

export default TheTrip;