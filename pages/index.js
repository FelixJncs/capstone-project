import { habits } from "@/Data/HabitsDB";
import HabitList from "@/components /HabitList";
import styled from "styled-components";

export default function Home() {
  const StyledHabitListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  `;

  return (
    <StyledHabitListContainer>
      <HabitList habits={habits} />
    </StyledHabitListContainer>
  );
}
