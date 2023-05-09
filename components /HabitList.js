import styled from "styled-components";

export default function HabitList({ habits }) {
  return (
    <StyledHabitList>
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </StyledHabitList>
  );
}
