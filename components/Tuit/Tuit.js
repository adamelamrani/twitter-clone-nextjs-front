import styled from "styled-components";

const Card = styled.div`
  border: 2px solid white;
  border-radius: 25px;
  background-color: #98c1d9;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const addLike = async (tuit) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TUITAH_API}${tuit.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: tuit.likes + 1 }),
    }
  );
  await response.json();
};

const Tuit = ({ tuit }) => {
  console.log(tuit);

  function timeSince(date) {
    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  return (
    <>
      <Card>
        <h3>Tuit from user nº: {tuit.id}</h3>
        <p>{tuit.text}</p>
        <Section>
          <p>{timeSince(new Date(tuit.date))} ago</p>
          <p>{tuit.likes}</p>
        </Section>
        <Section>
          <button type="button" onClick={() => addLike(tuit)}>
            Like
          </button>
        </Section>
      </Card>
    </>
  );
};

export default Tuit;
