import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  return (
    <>
    <form>
      <input type="text" onChange={(event) => setFirstName(event.target.value)} value={firstName} />
      <input type="text" onChange={(event) => setLastName(event.target.value)} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <p>firstName: {firstName}</p>
    <p>lastName: {lastName}</p>
    </>
  );
}

export default Form; 
