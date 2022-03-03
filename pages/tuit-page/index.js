import styled from "styled-components";
import Tuit from "../../components/Tuit/Tuit";

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TuitPage = ({ tuits }) => {
  return (
    <>
      <Title>List of tuits</Title>
      {tuits.reverse().map((tuit) => {
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
export default TuitPage;
