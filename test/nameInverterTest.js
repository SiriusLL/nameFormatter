let chai = require('chai');
var assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a single name when passed a single name with extra spaces', function() {
    const inputName = " name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('return a last-name, first-name when passed a first and last-name', function() {
    const inputName = "first last"
    const expectedOutput = "last, first"
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace', function() {
    const inputName = " first last"
    const expectedOutput = "last, first"
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it('return an empty string when passed a single honorific', function() {                            //need help
    const inputName = "Dr. "
    const expectedOutput = '';
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it('return honorific first-name when passed honorific first-name', function() {
    const inputName = "Dr. first-name last-name"
    const expectedOutput = "Dr. last-name, first-name"
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it('throw an error when name is undefined', function() {
    const inputName = undefined;
    //const expectedOutput = throw 'Error';
    assert.throws(() => nameInverter(inputName), 'Error');
  });

});