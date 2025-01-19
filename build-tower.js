/* 
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
	if (nFloors === 1) return ['*']

	let lastOddNum = 2 * nFloors - 1
	let tower = []

	let i = 1
	while (nFloors > 0) {
		let splitNumber = (lastOddNum - i) / 2
		let currentString = `${' '.repeat(splitNumber)}${'*'.repeat(
			i
		)}${' '.repeat(splitNumber)}`
		tower.push(currentString)
		i += 2
		nFloors--
	}

	return tower
}

/* 
Test Cases
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});
 */
