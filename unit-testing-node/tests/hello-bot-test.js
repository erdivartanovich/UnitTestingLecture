var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var HelloBot = require('./../hello-bot');
var helloBot = new HelloBot();

describe('Hello Bot Testing', function() {
    it('greeting should return ' + helloBot.hello_const, function() {
        expect(helloBot.greeting).to.equal(hello_const);
    });

    //you can have another method test down here
    //for example
    // it('greetingToPerson should return ' + helloBot.hello_const + helloBot._person, function() {
    //     expect(helloBot.greetingToPerson).to.equal(hello_const + helloBot._person);
    // }); 
});