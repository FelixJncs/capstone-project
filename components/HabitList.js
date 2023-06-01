import styled from "styled-components";
import HabitCard from "./HabitCard";
import useHabitsStore from "@/store";

const StyledHabitList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding-left: 0;
`;
const StyledTextTitle = styled.h2`
  border: 1px solid #d6d3ab;
  padding: 1rem 8rem 1rem 8rem;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  border-radius: 0.5rem;
  text-align: center;
  font-size: medium;
  margin: 0rem 2rem 0 2rem;
  background-color: beige;
  font-size: large;
`;

export default function HabitList() {
  const habits = useHabitsStore((state) => state.habits);
  return (
    <>
      <StyledTextTitle>Habitlist</StyledTextTitle>
      <StyledHabitList>
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </StyledHabitList>
    </>
  );
}
