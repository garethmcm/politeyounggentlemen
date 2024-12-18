import { Button } from "@material-tailwind/react"


function TopNav() {
    return (

<div className="flex justify-center items-center">
    <div className="row flex">
  <Button placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
    className="rounded-md rounded-r-none py-2 px-4">
    <span className="hover:animate-flash">About</span>
  </Button>
  <Button placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
    className="rounded-none border-l border-r border-slate-300 py-2 px-4">
    <span className="hover:animate-flash">Music</span>
  </Button>
  <Button placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
    className="rounded-md rounded-l-none py-2 px-4">
    <span className="hover:animate-flash">Gigs</span>
  </Button>
</div>

</div>
    )
};

export default TopNav;