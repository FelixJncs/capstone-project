import { useState } from "react";
import useStore from "@/store";
import { useRouter } from "next/router";

export default function EditHabitForm({ habit, onSubmit }) {
  const router = useRouter();
  const [name, setName] = useState(habit.name);
  const [reason, setReason] = useState(habit.reason);
  const [feeling, setFeeling] = useState(habit.feeling);
  const [overcome, setOvercome] = useState(habit.overcome);
  const updateHabit = useStore((state) => state.updateHabit);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedHabit = {
      ...habit,
      name,
      reason,
      feeling,
      overcome,
    };
    updateHabit(updatedHabit);
    onSubmit(updatedHabit);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="reason">Reason</label>
        <input
          type="text"
          id="reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="feeling">Feeling</label>
        <input
          type="text"
          id="feeling"
          name="feeling"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="overcome">Overcome</label>
        <input
          type="text"
          id="overcome"
          name="overcome"
          value={overcome}
          onChange={(e) => setOvercome(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
