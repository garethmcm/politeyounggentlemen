import { Card } from "@material-tailwind/react";

export function DescriptionCard() {
  return (
    <Card
      className="mt-6 w-96"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      placeholder=""
    >
      {/* Add children here */}
      <div className="p-4 text-gray-700">
        {/* Replace with your actual content */}
        This is a description card.
      </div>
    </Card>
  );
}

export default DescriptionCard;
