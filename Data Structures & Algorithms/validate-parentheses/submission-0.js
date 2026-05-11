class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (this.isPair(stack, s[i])) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }

        if (stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    isPair(arr, curr) {
        if (arr[arr.length - 1] === '(' && curr === ')') {
            return true;
        } else if (arr[arr.length - 1] === '{' && curr === '}') {
            return true;
        } else if (arr[arr.length - 1] === '[' && curr === ']') {
            return true;
        } else {
            return false;
        }
    }
}
