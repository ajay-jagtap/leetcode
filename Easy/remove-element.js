// Question: https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === val){
            nums.splice(i, 1);
            i--;// decrement index if item is removed
        }
    }
    return nums.length;
    };