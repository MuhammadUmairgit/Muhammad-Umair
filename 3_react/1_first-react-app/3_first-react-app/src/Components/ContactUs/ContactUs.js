import React, { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log({ name, email });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter your email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit Form</button>
      <br />
    </form>
  );
}

export default ContactUs;
