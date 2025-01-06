// Link - https://neetcode.io/problems/duplicate-integer

/* Approach - 
We have find is some value in given array is repeating or not.
The solution for this problem would be to convert the array into set and check the length
This does gives recommended o(n) time complexity and o(n) space complexity
*/

// Solution -

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const uniqueNums = new Set(nums);
    return uniqueNums.size !== nums.length;
  }
}

/* Learnings and Tips - 
  Sets in JS are declared kinda like Java
  Also sets have .size property for length
  and array have .length property for length

  regarding == and === 
  Comparision and equality checks is a big topic in JS - we need to add more 
  notes and understand what happens behind the scenes later
  Also JS does not throw errors, the reason being it has 
*/
