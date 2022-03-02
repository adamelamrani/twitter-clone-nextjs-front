import Tuit from "../../components/Tuit/Tuit";

const tuitPage = ({ tuits }) => {
  return (
    <>
      <h2>List of tuits</h2>
      {tuits.map((tuit) => {
        return <Tuit key={tuit.id} tuit={tuit} />;
      })}
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_TUITAH_API}list`);
  const tuits = await response.json();
  return {
    props: tuits,
  };
};
export default tuitPage;
