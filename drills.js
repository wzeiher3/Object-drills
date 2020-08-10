let loaf = {
    flour: 300,
    water: 210
}

console.log(loaf.flour);
console.log(loaf.water);

let obj = {
    foo: 1,
    bar: "this",
    fun: 43,
    quux: "what", 
    spam: 42
}

for(let thing in obj)
{
    console.log(thing);
    console.log(obj[thing])
}

let foodie = {
    meals: ['breakfast', 'second breakfeast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(foodie.meals[3]);

let edward = {
    name: 'edward',
    jobTitle: 'army student', 
}

let luca = {
    name: 'luca',
    jobTitle: 'student', 
    boss: 'edward'
}

let jay = {
    name: 'jay',
    jobTitle: 'army student',
    boss: 'edward'
}

let alexis = {
    name: 'alexis',
    jobTitle: 'airforce student',
    boss: 'edward'
}

let wulpa = {
    name: 'wulpa',
    jobTitle: 'student',
    boss: 'edward'
}

let newArr = [];
newArr.push(edward);
newArr.push(luca);
newArr.push(jay);
newArr.push(alexis);
newArr.push(wulpa);

newArr.forEach(function (person){
    if(person.boss == undefined)
        console.log(`${person.jobTitle} ${person.name} doesn\'t report to anybody.`);
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`);
})

let coder = {
    a: 2,
    b: 3, 
    c: 4,
    d: 5
}

function decode(thisString){
    return thisString[coder[thisString[0]] - 1];
}

let foo = decode('cycle');
console.log(foo);

function decodeWords(thisArr){
    return thisArr.forEach(function (element){
        console.log(decode(element));
    })
}

let stringArr = ['cycle', 'acrob', 'delta'];
decodeWords(stringArr);





function createCharacter(name, nickname, race, origin, attack, defense)
{
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe: function(){
            return `${name} is a ${race} from ${origin}.`;
        },

        evaluateFight: function(character){
            let received = 0;
            let takes = 0;
            if(character.defense < this.attack)
                takes = this.attack;
            if(this.defense < character.attack)
                received = character.attack;
            return `Your opponent takes ${takes} damage and you receive ${received} damage`;
        }
    }
}

let characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6), 
                  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
                  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),  
                  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8), 
                  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)];

characters.push(createCharacter('Arwen', 'arwen', 'Half Elf', 'Rivendell', 6, 6));
characters.find('aragorn').describe();                 
                  