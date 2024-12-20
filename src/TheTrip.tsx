import { useState } from "react";
import DisplayCard from "./DisplayCard";
import SongCard from "./SongCard"
import SongCarousel from "./SongCarousel";
import { Spiels } from "./Spiels";

type SongTitle = keyof typeof Spiels;

function TheTrip() {
    const [selectedSong, setSelectedSong] = useState<SongTitle>("The Trip");

//   const songs = [
//     { title: "The Trip", imageSrc: "1bX5QH6" },
//     { title: "Coffee Cup Baby", imageSrc: "2X7WQH8" },
//     { title: "That Night", imageSrc: "3aY4KH9" },
//     { title: "Weird Goodbye", imageSrc: "4XZ9PH2" },
//   ];

    return (
      <div>
        <div className="text-left prose p-4">
            <h2>The Trip</h2>
                <div className="flex">
                {/* Left side: 4 SongCards in a 2x2 grid */}
                  {/* <div className="grid grid-cols-2 gap-4 w-1/2">
                    <SongCard
                      song={{ title: "The Trip", imageSrc: "1bX5QH6" }}
                      onClick={() => setSelectedSong("The Trip")}/>
                    <SongCard
                      song={{ title: "Coffee Cup Baby", imageSrc: "2X7WQH8" }}
                      onClick={() => setSelectedSong("Coffee Cup Baby")}/>
                    <SongCard
                      song={{ title: "That Night", imageSrc: "3aY4KH9" }}
                      onClick={() => setSelectedSong("That Night")}/>
                    <SongCard
                      song={{ title: "Weird Goodbye", imageSrc: "4XZ9PH2" }}
                      onClick={() => setSelectedSong("Weird Goodbye")}/>
                  </div>
                  <div className="w-1/2 ml-4">
                    <DisplayCard spiel={Spiels[selectedSong]} />
                  </div> */}
                  <SongCarousel />
            </div>
          <br/>
          <div className="flex justify-center items-center">
            <iframe
                style={{ border: 0, width: "400px", height: "274px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=414743476/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
                seamless
                title="Bandcamp Player">
              <a href="https://politeyounggentlemen.bandcamp.com/album/the-trip">
                The Trip by Polite Young Gentlemen
              </a>
            </iframe>
            </div>
          </div>
          </div>
    )
}

export default TheTrip;