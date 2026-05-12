class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();

        nums.forEach((num) => {
            if (freq.has(num)) {
                freq.set(num, (freq.get(num) + 1));
            } else {
                freq.set(num, 1);
            }
        })

        return [...freq.entries()]
        .sort((a, b) => {
            return b[1] - a[1]
        })
        .slice(0, k)
        .map(([el]) => el)
    }
}
