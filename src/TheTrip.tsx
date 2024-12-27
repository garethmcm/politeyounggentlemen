import SongCarousel from "./SongCarousel";
import DescriptionCard from "./DescriptionCard";

function TheTrip() {

    return (
        <div className="text-left prose p-4 w-full max-w-none">
            {/* <h2>The Trip</h2> */}
            <div className="flex flex-wrap justify-around gap-4">
        {/* Left Column: Carousel */}
        <div
          className="flex-1 border border-white overflow-hidden aspect-square"
        >
          <SongCarousel />
        </div>

        {/* Right Column: Description Card */}
        <div
          className="flex-1 border border-white flex items-center justify-center"
        >
          <DescriptionCard />
        </div>
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
    )
}

export default TheTrip;