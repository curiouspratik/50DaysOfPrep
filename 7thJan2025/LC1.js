// Link - https://neetcode.io/problems/anagram-groups

/* Approach - 
Idea here is to create a dictionary and store sorted string 
and later using sorted string as identifier for anagrams to group them

*/

// Solution -
class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const sortedStr = new Map();
    for (let i = 0; i < strs.length; i++) {
      let temp = strs[i].split("").sort().join("");
      if (sortedStr.has(temp)) {
        let arr = sortedStr.get(temp);
        arr.push(strs[i]);
        sortedStr.set(temp, arr);
      } else {
        sortedStr.set(temp, new Array(strs[i]));
      }
    }

    return Array.from(sortedStr.values());
  }
}

/* Learnings and Tips - 
Arrays and Maps behave differently in JS
JS does not give errors rather it fills in the blanks with undefined value, 
this is wild. That might be a reason in random delays in crashing of the 
project/application that you are trying to build.
*/
