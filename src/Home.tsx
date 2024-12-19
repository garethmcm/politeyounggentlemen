import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="text-left prose">
        <h2>Home</h2>
            <p>Scottish duo performing and producing the melodic, elegiac songs of James Mawdsley<br/>
            We are currently promoting our latest release, <Link to="/thetrip" className="text-white">The Trip</Link>.</p>
       </div>
    )
}

export default Home;