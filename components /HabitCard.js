import styled from "styled-components";
import Link from "next/link";

const StyledHabitCard = styled.li`
  background-color: beige;
  border-radius: 2rem;
  padding: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  h3 {
    margin: 0;
  }
`;

export default function HabitCard({ habit }) {
  console.log(habit.id);
  return (
    <StyledHabitCard>
      <h1 key={habit.id}>
        <Link href={`/habits/${habit.id}`}>{habit.name}</Link>
      </h1>

      <p>Reason: {habit.reason}</p>
      <p>Feeling: {habit.feeling}</p>
    </StyledHabitCard>
  );
}
