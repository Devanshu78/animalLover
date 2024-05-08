import React from "react";
import "remixicon/fonts/remixicon.css";
import ProfilePhoto from "../assets/ProfilePhoto.jpeg";

function About() {
  return (
    <div className="flex gap-10 justify-center mt-10 ">
      <div className="left h-[600px] w-[800px] relative">
        <h1 className="text-4xl font-bold text-[#4D869C] m-7">About Me</h1>
        <p className="mt-[30px] font-medium w-[589px] m-8">
          A passionate developer with a keen interest in end-to-end project
          development, I firmly believe that learning through hands-on projects
          is the most effective approach. Continuously seeking opportunities to
          expand my skills.
        </p>
        <div className="absolute bottom-0 h-[40px] w-[100%] list-none flex justify-end gap-3">
          <li className="text-3xl">
            <a href="https://github.com/Devanshu78/">
              <i class="ri-github-fill"></i>
            </a>
          </li>
          <li className="text-3xl">
            <a href="https://www.linkedin.com/in/devanshupandey07/">
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </li>
          <li className="text-3xl">
            <a href="https://www.linkedin.com/in/devanshupandey07/">
              <i class="ri-twitter-line"></i>
            </a>
          </li>
          <li className="text-3xl mr-[20px]">
            <a href="https://www.instagram.com/_devanshu_pandey/">
              <i class="ri-instagram-line"></i>
            </a>
          </li>
        </div>
      </div>
      <div className="right h-[600px] flex justify-center rounded-3xl overflow-hidden">
        <img className="h-[600px]" src={ProfilePhoto} alt="ProfilePhoto" />
      </div>
    </div>
  );
}

export default About;
