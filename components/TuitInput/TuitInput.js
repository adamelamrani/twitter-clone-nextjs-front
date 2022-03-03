import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 70px;
    height: 30px;
    background-color: rgb(159 192 214);
    border-radius: 5px;
  }

  input {
    width: 400px;
    height: 150px;
    border-radius: 9px;
  }
`;

const TuitInput = () => {
  const blankTuit = { text: "" };

  const [tuit, setTuit] = useState(blankTuit);

  const tuitInput = (event) => {
    setTuit({
      [event.target.id]: event.target.value,
    });
  };

  const postTuit = async (tuit) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TUITAH_API}new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tuit),
    });
    await response.json();
  };

  const resetForm = () => {
    setTuit(blankTuit);
  };

  return (
    <Section>
      <form
        autoComplete="off"
        onSubmit={async (event) => {
          event.preventDefault();
          await postTuit(tuit);
          resetForm();
        }}
      >
        <label htmlFor="tuit-box">Writte your tuit</label>

        <input
          id="text"
          type="text"
          onChange={tuitInput}
          value={tuit.text}
          maxLength={200}
          placeholder="Say something..."
        />

        <button type="submit">Tuit</button>
      </form>
    </Section>
  );
};

export default TuitInput;
