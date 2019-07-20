var expect = require (
    'expect'
);
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
it('should generate correct message object',()=>{
    var from  = 'jean';
    var text = ' Some message';
    var message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe("number");
    expect(message).toMatchObject({from,text});
});
});

describe('generateLocationMessage',()=>{
    it('should generate correct location object',()=>{
        var from = 'Fahmy';
        var latitude = 15;
        var longitude = 15;
        var url = 'https://www.google.com/maps?q=15,15';
        var message = generateLocationMessage(from,latitude,longitude);
        expect(typeof message.createdAt).toBe("number");
        expect(message).toMatchObject({from,url});
        
    })
})