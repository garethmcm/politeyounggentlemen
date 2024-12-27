import { Link } from 'react-router-dom';

function Gigs() {
    return (
        <div className="text-left prose max-w-full p-4">
            <h2>About</h2>
            <p>
                Scottish duo performing and producing the melodic, elegiac songs of James Mawdsley<br />
                We are currently promoting our latest release, <Link to="/thetrip" className="text-white underline hover:text-primary">The Trip</Link>.<br />
                We previously released music under the name Mystics, with the EPs Gone Fishin' and Dream Suite highlighting his songs.
            </p>
            <br />

            {/* Spotify iframe for first album */}
            <div className="my-4">
                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/album/70XN00QwDVvTEAFPkUeWs6?utm_source=generator"
                    width="100%"
                    height="180"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>

            {/* Spotify iframe for second album */}
            <div className="my-4">
                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/album/2YOlYHC5f9dYlHPl4K2ARO?utm_source=generator"
                    width="100%"
                    height="180"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

export default Gigs;
