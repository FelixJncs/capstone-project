import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../store";
import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledTitle } from "./StyledTitle";
import { StyledButton } from "./StyledButton";

const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border: 1px solid #d6d3ab;
  border-radius: 4px;
  padding: 16px;
  margin: 0 2rem 5rem 2rem;
  background-color: #d6d3ab;
  border: 1px solid #d6d3ab;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
`;

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    margin-bottom: 8px;
  }
`;

const StyledInputField = styled.input`
  padding: 8px;
  border: 1px solid #d6d3ab;
  border-radius: 4px;
  font-size: 16px;
  background-color: beige;
  height: min-content;
  font-family: system-ui;
  box-shadow: 0.1rem 0.2rem 0.7rem #6f4e37;
`;

const StyledTextAreaField = styled.textarea`
  padding: 8px;
  border: 1px solid #d6d3ab;
  border-radius: 4px;
  font-size: 16px;
  background-color: beige;
  resize: vertical;
  overflow: show;
  font-family: system-ui;
  height: 10rem;
  box-shadow: 0.1rem 0.2rem 0.7rem #6f4e37;
`;

const StyledLabel = styled.label`
  background-color: beige;
  border-radius: 4px;
  box-shadow: 0.1rem 0.2rem 0.7rem #6f4e37;
  margin: 0.5rem 1rem 0.5rem 1rem;
  text-align: center;
`;

const StyledPageContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 1rem 2.2rem;
  width: 80%;
  box-shadow: 0 0.2rem 0.5rem #6f4e37;
  border-radius: 0.5rem;
  background-color: beige;
  font-weight: bold;
  font-size: large;
  padding: 0.4;
`;

function AddHabitForm() {
  const addHabit = useStore((state) => state.addHabit);
  const [habit, setHabit] = useState({
    id: uuidv4(),
    name: "",
    reason: "",
    feeling: "",
    overcome: "",
    progress: 0,
    streakCount: 0,
    longestStreak: 0,
    currentStreak: 0,
    lastUpdated: null,
    score: 0,
  });
  const router = useRouter();

  const handleChange = (e) => {
    setHabit((prevHabit) => ({
      ...prevHabit,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(habit);
    router.push("/");
  };

  return (
    <>
      <StyledTitle>Unhabit</StyledTitle>
      <StyledPageContainer>New habit</StyledPageContainer>
      <StyledFormContainer onSubmit={handleSubmit}>
        <StyledFormRow>
          <StyledLabel htmlFor="name">
            <strong>Name</strong>
          </StyledLabel>
          <StyledInputField
            type="text"
            id="name"
            name="name"
            value={habit.name}
            onChange={handleChange}
            required
            placeholder="What do you want to quit?"
            autoComplete="off"
          />
        </StyledFormRow>
        <StyledFormRow>
          <StyledLabel htmlFor="reason">
            <strong>Reasons</strong>
          </StyledLabel>
          <StyledTextAreaField
            type="text"
            id="reason"
            name="reason"
            value={habit.reason}
            onChange={handleChange}
            required
            placeholder="Why did that habit become a habit for you and why do you want to quit it ?"
            autoComplete="off"
          />
        </StyledFormRow>
        <StyledFormRow>
          <StyledLabel htmlFor="feeling">
            <strong>Feelings</strong>
          </StyledLabel>
          <StyledTextAreaField
            type="text"
            id="feeling"
            name="feeling"
            value={habit.feeling}
            onChange={handleChange}
            required
            placeholder="How do you feel when doing the bad habit and how would you feel if you would quit it? "
            autoComplete="off"
          />
        </StyledFormRow>
        <StyledFormRow>
          <StyledLabel htmlFor="overcome">
            <strong>How to overcome it?</strong>
          </StyledLabel>
          <StyledTextAreaField
            type="text"
            id="overcome"
            name="overcome"
            value={habit.overcome}
            onChange={handleChange}
            required
            placeholder="How do you plan to overcome the bad habit ? What can you do instead and who can help you? "
            autoComplete="off"
          />
        </StyledFormRow>
        <StyledButton type="submit">Add habit</StyledButton>
      </StyledFormContainer>
    </>
  );
}

export default AddHabitForm;
