import styled from "styled-components";

const Card = styled.div`
  border: 2px solid white;
  border-radius: 25px;
  background-color: #98c1d9;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const addLike = async ({ tuit }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TUITAH_API}${tuit.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(() => tuit.likes + 1),
    }
  );
  await response.json();
};

const Tuit = ({ tuit }) => {
  return (
    <>
      <Card>
        <h3>Tuit from user nº: {tuit.id}</h3>
        <p>{tuit.text}</p>
        <Section>
          <p>{tuit.date}</p>
          <p>{tuit.likes}</p>
        </Section>
        <Section>
          <button type="button" onClick={addLike}>
            Like
          </button>
        </Section>
      </Card>
    </>
  );
};

export default Tuit;
