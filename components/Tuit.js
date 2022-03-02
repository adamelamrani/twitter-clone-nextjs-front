import React, { useState } from "react";


const Tuit = () => {
  const blankTuit = "";

  const [tuit, setTuit] = useState(blankTuit);

  const tuitInput = (event) => {
    setTuit({
      ...tuit, 
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form onSubmit={}>
      <label htmlFor="tuit-box">Writte your tuit</label>
      <input type="text" onChange={tuitInput} maxLength={200} placeholder="Say something..."/>
      <button type="submit">Tuit</button>
    </form>
  )
}

export default Tuit;
