import HabitList from "@/components/HabitList";
import styled from "styled-components";
import Link from "next/link";
import { StyledTitle } from "@/components/StyledTitle";

const StyledHabitListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledAddLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: beige;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  border: none;
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin: 0 2rem 2rem;
  cursor: pointer;
`;
export default function Home() {
  return (
    <>
      <StyledTitle>Unhabit</StyledTitle>
      <StyledHabitListContainer>
        <HabitList />

        <StyledAddLink href="/addhabit">Add New Habit</StyledAddLink>
      </StyledHabitListContainer>
    </>
  );
}
