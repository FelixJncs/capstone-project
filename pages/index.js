import { habits } from "@/Data/HabitsDB";
import HabitList from "@/components /HabitList";
import styled from "styled-components";

const StyledHabitListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export default function Home() {
  return (
    <StyledHabitListContainer>
      <HabitList habits={habits} />
    </StyledHabitListContainer>
  );
}
