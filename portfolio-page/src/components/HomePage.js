import React from "react";
import HEADSHOT_IMG from "../assets/mystery-man.png";
import About from "./About";
import Contact from "./About";
import Person from "./Person";
import Headshot from "./Headshot";

const HomePage = () => {
  return (
    <>
      <div className="profile-wrapper">
        <Headshot imgSrc={HEADSHOT_IMG} imgAlt="Mystery Man" imgWidth={250} imgHeight={250} />
        <Person name="John Smith" position="Software Engineer" />
      </div>
      <div className="card">
        <About heading="About Me" description="I am an advocate of self-improvement and I want to help people improve their lives through knowledge and application" />
      </div>
      <div className="card">
        <Contact heading="Contact Me" description="Email: sample_john_smith@mail.com | LinkedIn: https://www.linkedin.com/" />
      </div>
    </>
  );
};

export default HomePage;
