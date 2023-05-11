import { habits } from "@/Data/HabitsDB";
import HabitList from "@/components /HabitList";
import styled from "styled-components";
import Link from "next/link";

const StyledHabitListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledAddLink = styled.a`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: beige;
  color: black;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 235, 205, 0.5);
  }
`;
export default function Home() {
  return (
    <StyledHabitListContainer>
      <HabitList habits={habits} />
      <Link href="/addhabit">
        <StyledAddLink>Add New Habit</StyledAddLink>
      </Link>
    </StyledHabitListContainer>
  );
}
