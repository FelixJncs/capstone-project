import { habits } from "@/Data/HabitsDB";
import HabitList from "@/components /HabitList";

export default function Home() {
  return (
    <div>
      <HabitList habits={habits} />
    </div>
  );
}
