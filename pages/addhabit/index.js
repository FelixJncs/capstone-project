import AddHabitForm from "@/components /AddHabitsForm";
import useStore from "@/Data/store";
import { getServerSnapshot } from "@/Data/store";

function AddHabitPage() {
  const addHabit = useStore((state) => state.addHabit);

  const handleSubmit = (habit) => {
    addHabit(habit);
    // Redirect to the homepage or habit list page
  };

  return (
    <div>
      <AddHabitForm onSubmit={handleSubmit} />
    </div>
  );
}

export async function getServerSideProps() {
  const storeState = getServerSnapshot();
  const serializedState = JSON.parse(JSON.stringify(storeState));
  return {
    props: { initialState: serializedState },
  };
}

export default AddHabitPage;
