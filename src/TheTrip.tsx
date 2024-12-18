import { useState } from "react";
import DisplayCard from "./DisplayCard";
import SongCard from "./SongCard"
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
        <div className="text-left prose">
            <h2 className="mb-4 font-moon">The Trip</h2>
                <div className="flex">
                {/* Left side: 4 SongCards in a 2x2 grid */}
                <div className="grid grid-cols-2 gap-4 w-1/2">
                <SongCard
            song={{ title: "The Trip", imageSrc: "1bX5QH6" }}
            onClick={() => setSelectedSong("The Trip")} // Set selected song
          />
          <SongCard
            song={{ title: "Coffee Cup Baby", imageSrc: "2X7WQH8" }}
            onClick={() => setSelectedSong("Coffee Cup Baby")}
          />
          <SongCard
            song={{ title: "That Night", imageSrc: "3aY4KH9" }}
            onClick={() => setSelectedSong("That Night")}
          />
          <SongCard
            song={{ title: "Weird Goodbye", imageSrc: "4XZ9PH2" }}
            onClick={() => setSelectedSong("Weird Goodbye")}
          />
                </div>
        <div className="w-1/2 ml-4">
          <DisplayCard spiel={Spiels[selectedSong]} />
        </div>
            </div>
        </div>
    )
}

export default TheTrip;