import React from "react";
import docsSvg from "../assets/doc.svg";
import docsImage from "../assets/image.jpg";
import PrimaryBtn from "@/components/PrimaryBtn";

const Home = () => {
  return (
    <>
      <main>
        <div className="border-green_light mt-3 flex flex-col items-center gap-5 border-y-[1px] py-5 md:mt-9 ">
          <h1 className="text-center font-Inter text-[32px] font-medium leading-snug md:text-left md:text-[65px]">
            Let us help you
            <span className="text-green_light font-bold"> remember</span> and
            stay consistent on your meds
          </h1>
          <img src={docsSvg} />
        </div>
        <div className="my-10 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <div className="w-full md:w-[45%]">
            <img
              src={docsImage}
              alt="image of a femal e doctor"
              className="rounded-[20px]"
            />
          </div>
          <div className="flex w-full flex-col gap-6 text-center font-Inter md:w-1/2 md:items-end md:text-left">
            <h3 className="flex flex-col text-xl">
              Are you worried about missing a dose or taking the wrong one? If
              so, you're not alone. Millions of people face challenges in
              managing their medications{" "}
              <span className="text-green_light font-semibold">
                efficiently.
              </span>
            </h3>
            <h3 className="text-lg">
              Disclaimer:{" "}
              <span className="text-green_light font-semibold">hREMIND</span> is
              intended for informational purposes only and should not be a
              substitute for professional medical advice. Always consult with
              your doctor or pharmacist before making any changes to your
              medication regimen.
            </h3>

            <PrimaryBtn />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
