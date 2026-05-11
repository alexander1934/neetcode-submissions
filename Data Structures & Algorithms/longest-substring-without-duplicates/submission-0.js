class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0;
        let left = 0;
        let set = new Set();

        for(let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left])
                left++;
            }
            set.add(s[right]);
            result = Math.max(result, (right - left) + 1)
        }

        return result;
    }
}
