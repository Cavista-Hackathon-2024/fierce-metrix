import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import SelectOption from "./SelectOption";
import GenderSelect from "./GenderSelect";

const MedicalHistory = () => {
  const { setCurrentStep, stepData } = useContext(AppContext);

  return (
    <>
      <form className="flex w-full flex-col gap-10">
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="has-ailment">Any current Disorder or Ailment</Label>
            <SelectOption id="has-ailment" />
          </div>
          <div className="flex-1">
            <Label htmlFor="ailment-type">If yes , State it</Label>
            <Input id="ailment-type" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="hospitalised">
              Have you been previously/currently hospitalised
            </Label>
            <Input id="hospitalized" />
          </div>

          <div className="flex-1">
            <Label htmlFor="gender">Gender</Label>
            <GenderSelect id="gender" />
          </div>
        </div>

        <div className="flex w-full gap-3">
          <button
            className="primary_btn"
            type="button"
            onClick={() => setCurrentStep(stepData[0])}
          >
            go back
          </button>
          <button
            className="primary_btn"
            type="button"
            onClick={() => setCurrentStep(stepData[2])}
          >
            continue
          </button>
        </div>
      </form>
    </>
  );
};

export default MedicalHistory;
