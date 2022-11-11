const getRandomInt = require('./index');

test('Функция должна вернуть число', () => {
	const res = getRandomInt(1, 100);

	expect(typeof res).toBe('number');
});

test('Тест. min: 1, max: 1000, 30 итераций', () => {
	const numbers = [];

	for (let i = 0; i < 30; i++) {
		const res = getRandomInt(1, 1000, numbers);

		expect(res >= 1 && res <= 1000).toBeTruthy();
		expect(numbers.includes(res)).toBeFalsy();
		numbers.push(res);
	}
});

test('Тест. min: -1000, max: 1000, 30 итераций', () => {
	const numbers = [];

	for (let i = 0; i < 30; i++) {
		const res = getRandomInt(-1000, 1000, numbers);

		expect(res >= -1000 && res <= 1000).toBeTruthy();
		expect(numbers.includes(res)).toBeFalsy();
		numbers.push(res);
	}
});

test('Тест. min: 0, max: 50, 20 итераций', () => {
	const numbers = [];

	for (let i = 0; i < 30; i++) {
		const res = getRandomInt(0, 50, numbers);

		expect(res >= 0 && res <= 50).toBeTruthy();
		expect(numbers.includes(res)).toBeFalsy();
		numbers.push(res);
	}
});