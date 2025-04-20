import React from "react";
import { TypeAnimation } from "react-type-animation";

function MainContent() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-evenly mb-10">
      <img
        className="w-1/3 h-1/3 rounded-full"
        src="src\assets\ar_img.jpg"
        alt="my photo"
      />
      <div className="mx-10">
        <h1 className="text-4xl text-center font-serif -tracking-tighter mb-3">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I am a Frontend Developer",
              500, // wait 1s before replacing "Mice" with "Hamsters"
              "I am a Backend Developer",
              500,
              "I am a Full Stack Developer",
              500,
              "I am a Software Engineer",
              500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-sm md:text-4xl"
          />
        </h1>
        <h4 className="text-center md:text-left text-2xl border-b-2 mb-2 -tracking-tighter ">
          A bit about me
        </h4>
        <p className="font-mono text-justify text-sm">
          💻 Full-Stack <strong>Software Engineer</strong> with 1+ years of
          experience building scalable web applications. 🚀 Skilled in{" "}
          <strong>React.js, Java, and .NET</strong> — focused on clean
          architecture & robust <strong>RESTful APIs</strong>. 🌱 Committed to
          continuous learning, mentoring, and giving back to the developer
          community. 🤝 Open to challenges, collaborations, and building
          meaningful tech solutions.
        </p>
        <div className="flex gap-4 md:gap-0 justify-evenly mt-4">
          <button className="w-24 md:w-32 h-24 md:h-32 bg-yellow-500 border-2 border-black rounded-full hover:bg-white duration-300">
            <a
              className="font-mono text-lg md:text-2xl"
              target="_blank"
              href="https://drive.google.com/file/d/1aX_zJcrWOPAtwqb5YiL6E__VykDGH96q/view?usp=sharing"
            >
              Resume
            </a>
          </button>
          <button className="w-24 md:w-32 h-24 md:h-32 bg-red-600 border-2 border-black rounded-full hover:bg-white duration-300">
            <a className="font-mono text-lg md:text-2xl" href="#">
              Projects
            </a>
          </button>
          <button className="w-24 md:w-32 h-24 md:h-32 bg-cyan-200 border-2 border-black rounded-full hover:bg-white duration-300">
            <a className="font-mono text-lg md:text-2xl" href="#">
              Contact
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
