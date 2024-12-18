import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react"


function TopNav() {
    return (

<div className="flex justify-center items-center">
    <div className="row flex">
    <Link to="/thetrip">
  <Button placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
    className="rounded-md rounded-r-none py-2 px-4">
    <span className="hover:animate-flash">The Trip</span>
  </Button>
  </Link>
  <Link to="/gigs">
  <Button placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
    className="rounded-none border-l border-r border-slate-300 py-2 px-4">
    <span className="hover:animate-flash">Gigs</span>
  </Button>
  </Link>
  <Link to="/contact">
  <Button placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
    className="rounded-md rounded-l-none py-2 px-4">
    <span className="hover:animate-flash">Contact</span>
  </Button>
  </Link>
</div>

</div>
    )
};

export default TopNav;