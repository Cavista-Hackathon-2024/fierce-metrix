import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import AgeCalculator from "./AgeCalculator";

const AboutUserForm = () => {
  const { setCurrentStep, stepData } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(stepData[1]);
  };
  return (
    <>
      <form className="flex w-full flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="firstname">Firstname</Label>
            <Input id="firstname" />
          </div>
          <div className="flex-1">
            <Label htmlFor="lastname">Lastname</Label>
            <Input id="lastname" />
          </div>
        </div>
        <div className="flex gap-4">
          <AgeCalculator />
          <div className="flex-1">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile" type="number" />
          </div>
        </div>
        <button
          className="primary_btn"
          type="button"
          onClick={() => setCurrentStep(stepData[1])}
        >
          continue
        </button>
      </form>
    </>
  );
};

export default AboutUserForm;
