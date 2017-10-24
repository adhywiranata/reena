import validation from './validation';

const isValidEmail = [{
  calledWith: null,
  returns: false
},{
  calledWith: false,
  returns: false
},{
  calledWith: true,
  returns: false
},{
  calledWith: '',
  returns: false
},{
  calledWith: 'test@email.com',
  returns: true
},{
  calledWith: 'test.test@email.com',
  returns: true
},{
  calledWith: 'test-test@email.com',
  returns: true
},{
  calledWith: 'test-test.test@email.com',
  returns: true
},{
  calledWith: 'test.test-test@email.com',
  returns: true
},{
  calledWith: 'test@email.co.uk',
  returns: true
},{
  calledWith: '123@email.co.uk',
  returns: true
},{
  calledWith: 'test@email.c',
  returns: false
},{
  calledWith: 'test..test@email.com',
  returns: false
},{
  calledWith: 'test--test@email.com',
  returns: false
},{
  calledWith: 'test-.test@email.com',
  returns: false
},{
  calledWith: 'test@@email.com',
  returns: false
},{
  calledWith: 'test@email..com',
  returns: false
},{
  calledWith: 'test@email@email.com',
  returns: false
},{
  calledWith: '.test@email.com',
  returns: false
},{
  calledWith: '-test@email.com',
  returns: false
},{
  calledWith: 'test@email.com-',
  returns: false
},{
  calledWith: 'test@email.com.',
  returns: false
},{
  calledWith: '!#$%^&*()@email.com',
  returns: false
},{
  calledWith: 'test-@email.com',
  returns: false
},{
  calledWith: 'test.@email.com',
  returns: false
},{
  calledWith: '"test"@email.com',
  returns: false
},{
  calledWith: 'test@"email".com',
  returns: false
},];

isValidEmail.forEach(testCase => {
  test(`isValidEmail, called with ${testCase.calledWith}, returns ${testCase.returns}`, () => {
    expect(validation.isValidEmail(testCase.calledWith)).toBe(testCase.returns);
  });
});