import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin: 40px;
`;

const StyledItem = styled.li`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blueviolet;
  font-size: bold;
  border: 1px solid gray;
  border-radius: 25px;
  background-color: #98c1d9;
  width: 100px;
  height: 50px;
  text-decoration: none;
`;

const Navigation = () => {
  return (
    <nav>
      <StyledList>
        <StyledItem>
          <Link href={"/"}>Home</Link>
        </StyledItem>
        <StyledItem>
          <Link href={"/tuit-page"}>Tuit page</Link>
        </StyledItem>
        <StyledItem>
          <Link href={"/new-tuit"}>New tuit</Link>
        </StyledItem>
      </StyledList>
    </nav>
  );
};

export default Navigation;
