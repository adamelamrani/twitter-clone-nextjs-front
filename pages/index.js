import Link from "next/link";
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  align-items: center;
  align-content: space-around;
  justify-content: space-around;
  color: Blue;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Section>
        <Title> Tuitah! </Title>
        <p>This is the fantastic ISDI tuitah! </p>
        <p>Welcome and enjoy </p>
      </Section>
    </>
  );
}
