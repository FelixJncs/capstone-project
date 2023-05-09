import styled from "styled-components";
import HabitCard from "./HabitCard";

export default function HabitList({ habits }) {
  const StyledHabitList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-center;
  `;

  return (
    <StyledHabitList>
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </StyledHabitList>
  );
}
