function HelloBot(person) {
    this._person = person;
}

HelloBot.prototype.hello_const = 'Hello ';

HelloBot.prototype.greeting = function() {
    return this.hello_const;
}

HelloBot.prototype.greetingToPerson = function() {
    if (!!this._person) {
        if (!!this._person.name) {
            return this.hello_const + this._person.name;
        }
    }
    return 'No person found!';
}



module.exports = HelloBot;