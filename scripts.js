//Use this file to implement Part One of your project

var animals = {
  dog: 'woof',
  cat: 'meow',
  llama: "ruff",
  dragon: 'fire',
  baby: 'cry'
}

var names = {}

names.boys = 'tucker';
names.girls = 'sofia';

animals['bird'] = 'penguin';
console.log(names.boys);
console.log(animals.llama);


var count = 0;
for (var key in names) {
  count++;
  if(key === 'boys') {
    console.log("hi my name is " + names[key]);
  } else if ( key === 'girls') {
    console.log('hi my name is ' + names[key]);
  }
}

console.log(count);
