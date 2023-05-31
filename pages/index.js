import HabitList from "@/components/HabitList";
import styled from "styled-components";
import { StyledTitle } from "@/components/StyledTitle";

const StyledHabitListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export default function Home() {
  return (
    <>
      <StyledTitle>Unhabit</StyledTitle>
      <StyledHabitListContainer>
        <HabitList />
      </StyledHabitListContainer>
    </>
  );
}
