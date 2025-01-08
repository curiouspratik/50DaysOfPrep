// Link - https://neetcode.io/problems/is-anagram

/* Approach - 
here two approach comes to mind 
1. you try to sort the string and then compare the value
2. or you try to create a dictionary and then add count of each letter and in second pass remove the letters

Here --
Approach    - TC   - SC
Sorting     - O(nlogn) (best case) - o(1)
Dictionary  - o(n) - o(n)

So now it depends on what we want to do, whether we want to have low time complexity 
or low space complexity.

Let's try to implement both to understand more about JS language.

*/

// Solution 1 -

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const firstArr = Array.from(s);
    const secondArr = Array.from(t);
    firstArr.sort();
    secondArr.sort();
    return JSON.stringify(firstArr) === JSON.stringify(secondArr);
  }
}

// to compare array in JS you have to stringify them, or then there has to some sort of
// external method to compare arrays. (DOUBT) Shouldn't this be resolved by now?
// Also the stringify method is not recommended in long run as it will try to convert
// null and undefined values as same. So basically you have to loop over all the values
// and then compare arrays.

// Solution 2 -
// Now here instead of creating dictionary we can create an array of length 26 with all zeros and later at position of each element we can add 1 or subtract 1, and finally just sum the array
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const letterCount = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      const pos = s[i].charCodeAt(0) - 97;
      letterCount[pos] += 1;
    }

    for (let i = 0; i < t.length; i++) {
      const pos = t[i].charCodeAt(0) - 97;
      if (letterCount[pos] > 0) {
        letterCount[pos] -= 1;
      } else {
        return false;
      }
    }

    return letterCount.reduce((sum, a) => sum + a, 0) === 0;
  }
}

/* Learnings and Tips - 
In JS while declareing a new array we can pass iterable to convert it to array.
But unlike python, string is not iterable in JS??? - (DOUBT)
same thing while creating sets from an array, since array is iterable you can just pass it while declaring set.

NOTE - majorly look into Data Types in JS to understand what exactly is going on here.

Now this is a nice solution, but you have to remember how to convert text to number here
That is the part you need to remember.
*/
