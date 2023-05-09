import styled from "styled-components";

export default function HabitCard({ habit }) {
  const StyledHabitCard = styled.li`
    background-color: beige;
    border-radius: 2rem;
    padding: 1rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    h3 {
      margin: 0;
    }
  `;

  return (
    <StyledHabitCard>
      <h3>{habit.name}</h3>
      <p>{habit.reason}</p>
      <p>{habit.feeling}</p>
    </StyledHabitCard>
  );
}
