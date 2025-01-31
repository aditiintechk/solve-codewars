/* 
You and your best friend Stripes have just landed your first high school jobs! You'll be delivering newspapers to your neighbourhood on weekends. For your services you'll be charging a set price depending on the quantity of the newspaper bundles.

The cost of deliveries is:

$3.85 for 40 newspapers
$1.93 for 20
$0.97 for 10
$0.49 for 5
$0.10 for 1
Stripes is taking care of the footwork doing door-to-door drops and your job is to take care of the finances. What you'll be doing is providing the cheapest possible quotes for your services.

Write a function that's passed an integer representing the amount of newspapers and returns the cheapest price. The returned number must be rounded to two decimal places.
*/

function cheapestQuote(newspapers) {
	let absoluteCost = {
		1: 0.1,
		5: 0.49,
		10: 0.97,
		20: 1.93,
		40: 3.85,
	}

	let sum = 0
	for (const bundle of [40, 20, 10, 5, 1]) {
		if (newspapers >= bundle) {
			const count = Math.floor(newspapers / bundle)
			sum = sum + count * absoluteCost[bundle]
			newspapers = newspapers % bundle
		}
	}

	return Number(sum.toFixed(2))
}
