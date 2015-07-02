//fizzbuzz, 1-100 fizz if multiple of 3, buzz if multiple of 5, fizzbuzz if both

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('fizzbuzz');
	} else if (i % 3 === 0) {
		console.log('fizz');
	} else if (i % 5 === 0) {
		console.log('buzz');
	} else {
		console.log(i);
	}
} 