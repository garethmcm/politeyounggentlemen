import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

function Contact() {
    return (
        <div className="text-left prose max-w-full p-4">
        <h2>Contact us</h2>
        <p>Geez a shout</p>

            <Card placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
                  color="transparent" shadow={false}>
                <Typography
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
                    color="gray" className="mt-1 font-normal">
                    Enter your details and your query below
                </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography
                                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
                                variant="h6" color="blue-gray" className="-mb-3">
                                    Your Name
                            </Typography>
                            <Input
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                                size="lg"
                                placeholder="name@mail.com"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                crossOrigin="anonymous" // Default value for crossOrigin
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                />
                            <Button 
                                className="mt-6"  
                                placeholder="" 
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}>
                            Send
                            </Button>
                        </div>
                </form>
            </Card>
        </div>
    )
}

export default Contact;