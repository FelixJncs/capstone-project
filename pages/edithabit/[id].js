import EditHabitForm from "@/components/EditHabitForm";
import useStore from "@/store";
import { useRouter } from "next/router";

export default function EditHabitPage() {
  const router = useRouter();
  const { id } = router.query;
  const habit = useStore((State) => State.habits.find((h) => h.id === id));
  const updateHabit = useStore((state) => state.updateHabit);

  const handleSubmit = (updatedHabit) => {
    updateHabit(updatedHabit);
  };

  if (!habit) {
    return <p>Habit not found </p>;
  }

  return (
    <div>
      <EditHabitForm habit={habit} onSubmit={handleSubmit} />
    </div>
  );
}
