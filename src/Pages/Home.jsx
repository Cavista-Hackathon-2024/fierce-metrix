import React from "react";
import docsSvg from "../assets/doc.svg";
import docsImage from "../assets/image.jpg";

const Home = () => {
  return (
    <>
      <main>
        <div className="border-green_light mt-9 flex items-center border-y-[1px] py-5">
          <h1 className="font-Inter text-[65px] font-medium leading-snug">
            Let us help you
            <span className="text-green_light font-bold"> remember</span> and
            stay consistent
          </h1>
          <img src={docsSvg} />
        </div>
        <div className="my-10 flex items-center justify-between">
          <div className="w-[45%]">
            <img
              src={docsImage}
              alt="image of a femal e doctor"
              className="rounded-[20px]"
            />
          </div>
          <div className="flex w-1/2 flex-col items-end gap-6 font-Inter">
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
            <button className="bg-green_dark rounded-md px-10 py-2 text-center font-bold text-white">
              Let's Get Started
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
