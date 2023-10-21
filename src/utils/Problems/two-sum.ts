import assert from 'assert';

import { Problem } from './types/problem';

const problemStatement = `<p>
Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return{' '}
<em>
	indices of the two numbers such that they add up to <code>target</code>
</em>
.
</p>
<p>
You may assume that each input would have{' '}
<strong>
	<em>exactly</em> one solution
</strong>
, and you may not use the <em>same</em> element twice.
</p>
<p>You can return the answer in any order.</p>
<p>
<strong className="example">Example 1:</strong>
</p>
<pre>
<strong>Input:</strong> nums = [2,7,11,15], target = 9 {'\n'}
<strong>Output:</strong> [0,1] {'\n'}
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>
<p>
<strong className="example">Example 2:</strong>
</p>
<pre>
<strong>Input:</strong> nums = [3,2,4], target = 6 {'\n'}
<strong>Output:</strong> [1,2]
</pre>
<p>
<strong className="example">Example 3:</strong>
</p>
<pre>
<strong>Input:</strong> nums = [3,3], target = 6{'\n'}
<strong>Output:</strong> [0,1]
</pre>
<p>&nbsp;</p>
<p>
<strong>Constraints:</strong>
</p>
<ul>
<li>
	<code>
		2 &lt;= nums.length &lt;= 10<sup>4</sup>
	</code>
</li>
<li>
	<code>
		-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
	</code>
</li>
<li>
	<code>
		-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
	</code>
</li>
<li>
	<strong>Only one valid answer exists.</strong>
</li>
</ul>
<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than{' '}
<code>
O(n<sup>2</sup>)
</code>
&nbsp;time complexity?`;

const starterCodeTwoSum = `/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {

};`;

// check if the user has the correct code
function handlerTwoSum(fn: (arg0: number[], arg1: number) => any) {
  try {
    const nums = [
      [2, 7, 11, 15],
      [3, 2, 4],
      [3, 3],
    ];

    const target = [9, 6, 6];
    const answers = [
      [0, 1],
      [1, 2],
      [0, 1],
    ];

    for (let i = 0; i < nums.length; i++) {
      // result is output of the callback from user code
      const result = fn(nums[i], target[i]);
      assert.deepStrictEqual(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log('twosum handler function error');
    throw new Error(error);
  }
}

export const twoSum: Problem = {
  id: 'two-sum',
  title: 'Two sum',
  problemStatement,
  examples: [
    {
      id: 1,
      inputText: 'nums = [2,7,11,15], target = 9',
      outputText: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    },
    {
      id: 2,
      inputText: 'nums = [3,2,4], target = 6',
      outputText: '[1,2]',
      explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].',
    },
    {
      id: 3,
      inputText: ' nums = [3,3], target = 6',
      outputText: '[0,1]',
    },
  ],
  constraints: [
    '2 <= nums.length <= 104',
    '-109 <= nums[i] <= 109',
    '-109 <= target <= 109',
    'Only one valid answer exists',
  ],
  handlerFunction: handlerTwoSum,
  starterCode: starterCodeTwoSum,
  order: 1,
  starterFunctionName: 'function twoSum(',
};
