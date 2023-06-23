const twoSum = (nums: Array<number>, target: number): Array<number> => {
    let sumIdx1 = 0
    let sumIdx2 = 1

   while( nums[sumIdx1] + nums[sumIdx2] !== target) {
       if (sumIdx2 === nums.length) {
           sumIdx1++
           sumIdx2 = sumIdx1
       }
       sumIdx2++
   }

   return [sumIdx1, sumIdx2]
};