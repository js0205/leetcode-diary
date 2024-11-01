function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let num = nums[i];
    let prevIndex = map[target - num];
    if (prevIndex !== null) {
      return [prevIndex, i];
    }
    map[num] = i;
  }
  return [-1, -1];
}
