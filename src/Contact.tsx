import { useState } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Textarea,
  } from "@material-tailwind/react";

  interface FormData {
    name: string;
    email: string;
    query: string;
    joinMailingList: boolean;
  }
  
  function Contact() {
    const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      query: "",
      joinMailingList: false,
    });
  
    const [isValid, setIsValid] = useState(false);
  
    // Validation function
    const validateForm = (data: FormData): boolean => {
      const isNameValid = data.name.trim() !== "";
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      const isQueryValid = data.query.trim() !== "";
      return isNameValid && isEmailValid && isQueryValid;
    };
  
    // Handle field changes
    const handleChange = <K extends keyof FormData>(field: K, value: FormData[K]) => {
      const updatedFormData: FormData = { ...formData, [field]: value };
      setFormData(updatedFormData);
      setIsValid(validateForm(updatedFormData));
    };

    return (
        <div className="text-left prose max-w-full p-4">
        <h2>Contact us</h2>
        <p>Geez a shout

            <Card 
              placeholder="" 
              onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
              color="transparent" 
              shadow={false}>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Input
                                variant="static"
                                color="white" 
                                label="Name"
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                                size="lg"
                                placeholder="Jimmy-Bob"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                crossOrigin="anonymous"
                                labelProps={{
                                className: "before:content-none after:content-none",
                                }}
                                />
                                <Input
                                variant="static"
                                color="white" 
                                label="Email"
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                                size="lg"
                                placeholder="jimmy-bob@seawhale.com"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                crossOrigin="anonymous" // Default value for crossOrigin
                                labelProps={{
                                className: "before:content-none after:content-none",
                                }}
                                />
                                <Textarea
                                variant="static"
                                color="white" 
                                label="Query"
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                                size="lg"
                                placeholder="What do ye want"
                                value={formData.query}
                                onChange={(e) => handleChange("query", e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                className: "before:content-none after:content-none",
                                }}
                                />
                                <Checkbox
                                label={
                                    <div className="text-white">Join mailing list</div>}
                                    onChange={(e) => handleChange("joinMailingList", e.target.checked) }
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                                crossOrigin="anonymous"
                                />
                            <Button
                                className="mt-6"  
                                placeholder=""
                                disabled={!isValid}
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}>
                            Send
                            </Button>
                        </div>
                </form>
            </Card>
            </p>
        </div>
    )
}

export default Contact;