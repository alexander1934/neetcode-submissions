class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dublicates = new Map();

        nums.forEach((num) => {
            if (dublicates.has(num)) {
                dublicates.set(num, (dublicates.get(num) + 1))
            } else {
                dublicates.set(num, 1)
            }
        })

        for (let [key, value] of dublicates) {
            if (value > 1) {
                return true;
            }
        }

        return false;
    }
}
