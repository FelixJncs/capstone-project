import { useState, useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware"; //Middelware: intercept state updates and perform actions before or after the update occurs
// Persist: the state of the store will be automatically persisted in localStorage whenever it changes

const useHabitsStore = createLocalStorageStore(
  (set) => ({
    habits: [
      {
        id: "1",
        name: "Procrastination",
        reason:
          "To avoid or delay completing tasks or responsibilities. Procrastination can stem from feelings of perfectionism, fear of failure, or lack of motivation.",
        feeling:
          "Feeling stressed or overwhelmed due to the mounting tasks and deadlines that have been put off.",
        overcome:
          "To overcome procrastination, break tasks into smaller pieces, set deadlines, prioritize tasks, and use a planner or task list to stay organized and focused. Additionally, addressing any underlying fears or perfectionism tendencies can help in combating procrastination.",
        progress: 0,
        streakCount: 0,
        longestStreak: 0,
        currentStreak: 0,
        lastUpdated: null,
        score: 0,
      },
      {
        id: "2",
        name: "Nail-biting",
        reason:
          "Nail-biting is a nervous or anxious habit that often occurs as a way to cope with stress, anxiety, or boredom.",
        feeling:
          "Feeling embarrassed or ashamed of the nail-biting habit, especially in social situations or when nails appear unsightly.",
        overcome:
          "To overcome nail-biting, it can be helpful to identify triggers and find alternative stress-reducing techniques such as exercise, meditation, or deep breathing. Keeping nails trimmed and polished, wearing gloves, or using bitter-tasting nail polish can also reduce temptation and break the habit.",
        progress: 0,
        streakCount: 0,
        longestStreak: 0,
        currentStreak: 0,
        lastUpdated: null,
        score: 0,
      },
      {
        id: "3",
        name: "Excessive Social Media Usage",
        reason:
          "Excessive social media usage can be driven by the desire for constant validation, fear of missing out (FOMO), or as a way to escape from reality.",
        feeling:
          "Feeling disconnected from real-life experiences, comparing oneself to others, or experiencing a decrease in productivity due to excessive time spent on social media.",
        overcome:
          "To reduce excessive social media usage, set boundaries by limiting screen time, engaging in offline activities, practicing digital detox, and being mindful of the impact of social media on mental well-being.",
        progress: 0,
        streakCount: 0,
        longestStreak: 0,
        currentStreak: 0,
        lastUpdated: null,
        score: 0,
      },
      {
        id: "4",
        name: "Negative Self-Talk",
        reason:
          "Negative self-talk refers to the habit of engaging in self-critical or self-defeating thoughts and beliefs. It can stem from low self-esteem, past experiences, or internalized criticism from others.",
        feeling:
          "Feeling down, demotivated, or self-conscious due to the negative thoughts and beliefs about oneself.",
        overcome:
          "To overcome negative self-talk, it is important to practice self-awareness and challenge negative thoughts with positive affirmations and realistic perspectives. Seeking support from a therapist or counselor can also be beneficial in addressing underlying issues and developing healthier self-talk patterns.",
        progress: 0,
        streakCount: 0,
        longestStreak: 0,
        currentStreak: 0,
        lastUpdated: null,
        score: 0,
      },
    ],
    overallScore: 0,
    addHabit: (newHabit) =>
      set((state) => ({ habits: [...state.habits, newHabit] })),
    updateHabit: (updatedHabit) =>
      set((state) => ({
        habits: state.habits.map((habit) =>
          habit.id === updatedHabit.id ? { ...habit, ...updatedHabit } : habit
        ),
      })),
    deleteHabit: (habitId) =>
      set((state) => ({
        habits: state.habits.filter((habit) => habit.id !== habitId),
      })),
    resetProgress: (habitId) =>
      set((state) => {
        const updatedHabits = state.habits.map((habit) => {
          if (habit.id === habitId) {
            return {
              ...habit,
              progress: 0,
            };
          }
          return habit;
        });
        return { habits: updatedHabits };
      }),

    incrementProgress: (habitId) =>
      set((state) => {
        const currentDate = new Date();
        let overallScore = 0;
        const updatedHabits = state.habits.map((habit) => {
          if (habit.id === habitId) {
            const updatedProgress = habit.progress + 1;
            // Check if the habit was updated today
            const lastUpdatedDate = new Date(habit.lastUpdated);
            const isSameDay =
              currentDate.toDateString() === lastUpdatedDate.toDateString();

            if (isSameDay) {
              // The habit was already updated today, no need to increment progress again
              return habit;
            } else {
              const updatedStreakCount =
                updatedProgress > 0 ? habit.streakCount + 1 : habit.streakCount;
              let updatedCurrentStreak = habit.currentStreak;

              if (updatedProgress > 0) {
                updatedCurrentStreak = habit.currentStreak + 1;
              } else {
                updatedCurrentStreak = 0;
              }

              let updatedScore =
                habit.score + 100 * (updatedProgress - habit.progress);

              if (updatedCurrentStreak > habit.longestStreak) {
                updatedScore += 100;
              }

              overallScore += updatedScore;

              const updatedLongestStreak = Math.max(
                habit.longestStreak,
                updatedCurrentStreak
              );

              return {
                ...habit,
                progress: updatedProgress,
                streakCount: updatedStreakCount,
                longestStreak: updatedLongestStreak,
                currentStreak: updatedCurrentStreak,
                lastUpdated: currentDate.toISOString(),
                score: updatedScore,
              };
            }
          }
          return habit;
        });
        return { habits: updatedHabits };
      }),
  }),
  "habits-store" // unique name
);

// A function that returns a custom hook that can be used to access the state.
function createLocalStorageStore(initialStore, name) {
  // Create a Zustand store without persistence.
  const useServerStore = create(initialStore);
  // Create a Zustand store with persistence to local storage.
  const useClientStore = create(persist(initialStore, { name }));

  // A custom hook that selects the appropriate store based on whether
  // the component is hydrated or not.
  function useStore(selector, compare) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
      setHydrated(true);
    }, []);

    const clientStore = useClientStore(selector, compare);
    const serverStore = useServerStore(selector, compare);

    return hydrated ? clientStore : serverStore;
  }

  return useStore;
}

export default useHabitsStore;
