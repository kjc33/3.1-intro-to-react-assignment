import React from "react";

function Person({ name, position }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{position}</h2>
    </>
  );
}

export default Person;
