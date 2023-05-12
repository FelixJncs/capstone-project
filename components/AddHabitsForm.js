import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../store";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { StyledTitle } from "./StyledTitle";

const StyledBacklink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: beige;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  border: none;
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin: 1rem 0 2rem 2rem;
  cursor: pointer;
`;
const StyledAddButton = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: beige;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  border: none;
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;

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
        <StyledAddButton type="submit">Add Habit</StyledAddButton>
      </StyledFormContainer>

      <StyledBacklink href="/">Back</StyledBacklink>
    </>
  );
}

export default AddHabitForm;
