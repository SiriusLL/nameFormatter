

const nameInverter = function(name) {
  if (name === undefined) {
    throw 'Error';
  }
  name = name.trim();
  if (name === '') {
    return '';
  };
  if (name[0] === ' ' || name[name.length] === ' ') {
    name = name.trim();
    return name
  };
  //if (name.includes(' ')) {
  if (name.split(' ').length === 2) {  

    let splitName = name.split(' ')
    name =  `${splitName[1]}, ${splitName[0]}`
    return name;
  };
  if (name.includes('.') && name.split(' ').length === 1) {
    return name = '';
  }
  if (name.split(' ').length === 3) {
    name = name.split(' ');
    name =  `${name[0]} ${name[2]}, ${name[1]}`;
    return name;
  }
  
  return name;
}

//console.log (nameInverter('Dr. hello there').length)
console.log(nameInverter('Dr. mark stuart'));
module.exports = nameInverter;

// a = 'gooooood';
// console.log(a[0]);

// let names = 'hello you there'
// names = names.split(' ')
// console.log(names);
// names = names.length;
// console.log(names);
// console.log(`${names[1]}`)