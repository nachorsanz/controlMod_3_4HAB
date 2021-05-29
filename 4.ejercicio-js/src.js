'use strict';
const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const unique = names.filter(onlyUnique);
console.log(unique);
