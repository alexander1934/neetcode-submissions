class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;

        let result = 0;

        for (let right = 1; right < prices.length; right++) {
            if (prices[right] < prices[left]) {
                left = right;
            }
            if ((prices[right] - prices[left]) > result) {
                result = prices[right] - prices[left];
            }
        }

        return result;
    }
}
