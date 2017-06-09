var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var HelloBot = require('./../hello-bot');
var helloBot = new HelloBot();

describe('Hello Bot Testing', function() {
    it('greeting should return Hello string', function() {
        expect(helloBot.greeting).to.equal('Hello ');
    });

    //you can have another method test down here
    //for example
    // it('greetingToPerson should return Hello to person', function() {
    //     expect(helloBot.greetingToPerson).to.equal('Hello person');
    // });

});