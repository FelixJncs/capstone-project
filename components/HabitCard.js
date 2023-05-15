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
  return (
    <StyledHabitCard>
      <h2 key={habit.id}>
        <Link href={`/habits/${habit.id}`}>{habit.name}</Link>
      </h2>

      <p>Reason: {habit.reason}</p>
      <p>Feeling: {habit.feeling}</p>
      <Link href={`/edithabit/${habit.id}`}>Edit</Link>
    </StyledHabitCard>
  );
}
