import styled from "styled-components";
import HabitCard from "./HabitCard";

const StyledHabitList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

export default function HabitList({ habits }) {
  return (
    <StyledHabitList>
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </StyledHabitList>
  );
}
