import { Card, Button } from "@material-tailwind/react";
import { Spiels } from "./Spiels";
import { useState } from "react";

type DescriptionCardProps = {
  songTitle: "The Trip" | "Coffee Cup Baby" | "That Night" | "Weird Goodbye";
};

export function DescriptionCard({ songTitle }: DescriptionCardProps) {
  const [selectedPart, setSelectedPart] = useState<"Conception" | "Recording">("Conception");
  const spiel = Spiels[songTitle];

  return (
    <Card
      className="rounded-none bg-background text-white text-sm"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      placeholder=""
    >
      <div className="p-4">
        <div className="flex justify-center">
          <Button onClick={() => setSelectedPart("Conception")}
                  placeholder="" 
                  onPointerEnterCapture={() => {}} 
                  onPointerLeaveCapture={() => {}} 
                  variant="text"
                  size="sm"
                  ripple={false}
                  className="text-sm">
            Conception
          </Button>
          <Button onClick={() => setSelectedPart("Recording")}
                  placeholder="" 
                  onPointerEnterCapture={() => {}} 
                  onPointerLeaveCapture={() => {}} 
                  variant="text"
                  size="sm"
                  ripple={false}
                  className="text-sm">
            Recording
          </Button>
        </div>
        <div>
          <p className="">
          {spiel[selectedPart]}
          </p>
        </div>
      </div>

    </Card>
  );
}

export default DescriptionCard;
