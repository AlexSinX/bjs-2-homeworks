function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    var filtered = users.filter(function (user) {
        return user.gender === gender;
    });
    if (filtered.length === 0) return 0;

    var totalAge = filtered.reduce(function (sum, user) {
        return sum + user.age;
    }, 0);
    var averageAge = totalAge / filtered.length;

    return averageAge;
}