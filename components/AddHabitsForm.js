import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../store";
import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledTitle } from "./StyledTitle";
import { StyledLink } from "./StyledLink";
import { StyledButton } from "./StyledButton";

const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin: 0 2rem 0 2rem;
  background-color: beige;
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
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledTextAreaField = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

function AddHabitForm() {
  const addHabit = useStore((state) => state.addHabit);
  const [habit, setHabit] = useState({
    id: uuidv4(),
    name: "",
    reason: "",
    feeling: "",
    overcome: "",
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
    setHabit({
      id: uuidv4(),
      name: "",
      reason: "",
      feeling: "",
      overcome: "",
    });
    router.push("/");
  };

  return (
    <>
      <StyledTitle>New habit</StyledTitle>
      <StyledFormContainer onSubmit={handleSubmit}>
        <StyledFormRow>
          <label htmlFor="name">Name</label>
          <StyledInputField
            type="text"
            id="name"
            name="name"
            value={habit.name}
            onChange={handleChange}
          />
        </StyledFormRow>
        <StyledFormRow>
          <label htmlFor="reason">Reason</label>
          <StyledTextAreaField
            type="text"
            id="reason"
            name="reason"
            value={habit.reason}
            onChange={handleChange}
          />
        </StyledFormRow>
        <StyledFormRow>
          <label htmlFor="feeling">Feeling</label>
          <StyledTextAreaField
            type="text"
            id="feeling"
            name="feeling"
            value={habit.feeling}
            onChange={handleChange}
          />
        </StyledFormRow>
        <StyledFormRow>
          <label htmlFor="overcome">Overcome</label>
          <StyledTextAreaField
            type="text"
            id="overcome"
            name="overcome"
            value={habit.overcome}
            onChange={handleChange}
          />
        </StyledFormRow>
        <StyledButton type="submit">Add Habit</StyledButton>
      </StyledFormContainer>

      <StyledLink href="/">Back</StyledLink>
    </>
  );
}

export default AddHabitForm;
