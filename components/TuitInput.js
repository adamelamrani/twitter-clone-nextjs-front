import React, { useState } from "react";

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

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        postTuit(tuit);
      }}
    >
      <label htmlFor="tuit-box">Writte your tuit</label>
      <input
        id="text"
        type="text"
        onChange={tuitInput}
        maxLength={200}
        placeholder="Say something..."
      />
      <button type="submit">Tuit</button>
    </form>
  );
};

export default TuitInput;
