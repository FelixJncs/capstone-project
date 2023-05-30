export function calculateHabitScore(progress, longestStreak) {
  let score = progress * 100; // Score increments by 100 for each progress increment

  if (longestStreak > 0) {
    score *= 2; // Double the score if longest streak is greater than 0
  }

  return score;
}
