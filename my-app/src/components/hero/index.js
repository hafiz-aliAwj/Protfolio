import React from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="bg-[#040b14] text-[white] w-full h-screen flex flex-col items-start justify-center">
      <div className="w-3/4 mx-auto">
        <h1 className="text-4xl font-black ">Hafiz Ali Awj</h1>
        <div className="flex justify-start items-baseline">
          <pre className="text-sm">I'm a </pre>
          <div className="inline text-lg pb-1 border-b-2 border-[#149ddd]">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "Front End Developer",
                  "Freelancer",
                  "Next JS Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
