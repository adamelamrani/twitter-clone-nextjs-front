const Tuit = ({ tuit }) => {
  return (
    <>
      <h3>Tuit from user nº: {tuit.id}</h3>
      <p>{tuit.text}</p>
      <section>
        <p>{tuit.date}</p>
        <p>{tuit.likes}</p>
      </section>
    </>
  );
};

export default Tuit;
