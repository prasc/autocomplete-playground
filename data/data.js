const { faker } = await import('https://esm.sh/@faker-js/faker');

const listOfData = [];

for (let i = 0; i < 1000; i++) {
  const randomName = faker.person.fullName(); // Rowan Nikolaus}
  listOfData.push(randomName);
}

export default listOfData;
