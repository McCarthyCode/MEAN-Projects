let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

for (let student in students) {
    console.log("Name:", students[student].name + ", Cohort:", students[student].cohort);
}

let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

console.log();

let num = 1;
console.log("employees".toUpperCase());
for (let employee in users.employees) {
    console.log(
        num++ + " - " + users.employees[employee].last_name.toUpperCase() +
        ", " + users.employees[employee].first_name.toUpperCase() +
        " - " + (users.employees[employee].first_name.length +
        users.employees[employee].last_name.length));
}
console.log("managers".toUpperCase());
num = 1;
for (let manager in users.managers) {
    console.log(
        num++ + " - " + users.managers[manager].last_name.toUpperCase() +
        ", " + users.managers[manager].first_name.toUpperCase() +
        " - " + (users.managers[manager].first_name.length +
        users.managers[manager].last_name.length));
}
