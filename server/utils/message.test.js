let expect = require('expect');

let {generateMessage} = require('./message');


describe('generteMessage', () => {
    it('should generate correct message object', () => {
        let from =  'Test1';
        let text =  'Text from test1';

        let response = generateMessage(from, text);

        expect(response.createdAt).toEqual(expect.any(Number));
        expect(response.from).toEqual(from);
        expect(response.text).toEqual(text);

    });
});
