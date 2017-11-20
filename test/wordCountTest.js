const chai = require('chai');
const assert = require('chai').assert;
const stringCount = require('../wordCount.js');

describe("stringCount()", () => {
    it("count for single word", () => {
    let Count = { word: 1 };
    assert.equal(stringCount("word"), JSON.stringify(Count));
    });

    it("count for multiple words", () => {
    let Count = { "i":2,"am":2,"in":1,"love":3 };
    assert.equal(stringCount("I am in I am love love Love"), JSON.stringify(Count));
    });

    it("will not accept numbers", () => {
    let Count = "Please enter a string";
    assert.equal(stringCount(3,5,4,3), Count);
    });

    it("will process numbers in a string", () => {
    let Count = {"3":2,"i":1,"have":1,"babies":1,"that":1,"are":1,"years":1,"interval":1};
    assert.equal(stringCount('I have 3 babies that are 3 years interval'), JSON.stringify(Count));
    });

    it("will process same words in a string", () => {
    let Count = {"it":6};
    assert.equal(stringCount('it it it it it it'), JSON.stringify(Count));
    });

    it("will process different words in a string", () => {
    let Count = {"i":1,"am":1,"a":1,"very":1,"good":1,"dancer":1};
    assert.equal(stringCount('I am a very good dancer'), JSON.stringify(Count));
    });

    it("all uppercase letters", () => {
    let Count = {"i":1,"am":1,"very":1,"happy":1};
    assert.equal(stringCount('I AM VERY HAPPY'), JSON.stringify(Count));
    });

    it("all lowercase letters", () => {
    let Count = {"i":1,"am":1,"very":1,"happy":1};
    assert.equal(stringCount('i am very happy'), JSON.stringify(Count));
    });
});