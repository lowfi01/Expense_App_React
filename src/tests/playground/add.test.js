const add = (a,b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('adding 3 and 4 equals 7', () => {

  const result = add(3,4);

  expect(result).toBe(7);

});

test('should generate greeting from name', () => {

  const result = generateGreeting('Mahal');

  expect(result).toBe('Hello Mahal!');

});
