import { useRouter } from "next/router";
import useStore from "@/store";
import HabitDetailsPage from "@/components /HabitDetailsPage";

export default function HabitDetails() {
  const router = useRouter();
  const { id } = router.query;
  const habits = useStore((state) => state.habits);
  const habit = habits.find((habit) => habit.id === id);

  if (!habit) {
    return <div>Habit not found</div>;
  }

  return <HabitDetailsPage habit={habit} />;
}
