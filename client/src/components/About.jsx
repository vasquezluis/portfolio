import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, i'm Luis, nice to meet you, please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              similique dolore quaerat id, eos aliquam quisquam, quidem ut
              reprehenderit saepe deleniti ipsa aliquid! Doloremque, autem.
              Optio eius laborum sequi in. Necessitatibus harum reiciendis nam
              ad, optio omnis laudantium, quidem accusamus nulla beatae id at
              voluptatibus in maxime laboriosam nemo eaque iure culpa eum
              tenetur minima. Ut ipsa minima architecto esse!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
