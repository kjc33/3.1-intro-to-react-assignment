import React from "react";

function About({ heading, description }) {
  return (
    <>
      <h3>{heading}</h3>
      <hr />
      <p>{description}</p>
    </>
  );
}

export default About;
