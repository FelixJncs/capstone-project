import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../Data/store";

function AddHabitForm() {
  const addHabit = useStore((state) => state.addHabit);
  const [habit, setHabit] = useState({
    id: uuidv4(),
    name: "",
    reason: "",
    feeling: "",
    overcome: "",
  });

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={habit.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="reason">Reason</label>
        <input
          type="text"
          id="reason"
          name="reason"
          value={habit.reason}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="feeling">Feeling</label>
        <input
          type="text"
          id="feeling"
          name="feeling"
          value={habit.feeling}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="overcome">Overcome</label>
        <input
          type="text"
          id="overcome"
          name="overcome"
          value={habit.overcome}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default AddHabitForm;
