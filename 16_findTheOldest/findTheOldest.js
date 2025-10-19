const findTheOldest = function(people) {
    let age = people.map(person => {
        if (!person.hasOwnProperty('yearOfDeath')) {
            let currYear = new Date();
            person.yearOfDeath = currYear.getFullYear();
        }
        return { name: person.name, age: (person.yearOfDeath - person.yearOfBirth)}
    });
    let order = age.sort((a, b) => {
        return b.age - a.age;
    });
    return order[0];
};

// Do not edit below this line
module.exports = findTheOldest;
