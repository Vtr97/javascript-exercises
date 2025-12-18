const findTheOldest = function (array) {
  function getAge(person) {
    const deathDate = person.yearOfDeath ?? new Date().getFullYear();
    return deathDate - person.yearOfBirth;
  }
  function getOldest(personA, personB) {
    if (getAge(personA) >= getAge(personB)) return personA;
    return personB;
  }
  return array.reduce(
    (oldest, person) => {
      return getOldest(oldest, person);
    },
    { yearOfDeath: 0, yearOfBirth: 0 }
  );
};

// Do not edit below this line
module.exports = findTheOldest;

