import formatting from './formatting';

const formatDate = [{
  calledWith: null,
  returns: '31-12-1969',
}, {
  calledWith: false,
  returns: '31-12-1969',
}, {
  calledWith: true,
  returns: '31-12-1969',
}, {
  calledWith: '',
  returns: 'aN-aN-NaN',
}, {
  calledWith: '1/1/2000',
  returns: '01-01-2000',
}, {
  calledWith: '01/1/2000',
  returns: '01-01-2000',
}, {
  calledWith: '01/01/2000',
  returns: '01-01-2000',
}, {
  calledWith: '12/1/2000',
  returns: '01-12-2000',
}, {
  calledWith: '1/31/2000',
  returns: '31-01-2000',
}, {
  calledWith: '12/31/2000',
  returns: '31-12-2000',
}];

formatDate.forEach((testCase) => {
  test(`formateDate, called with ${testCase.calledWith}, returns ${testCase.returns}`, () => {
    expect(formatting.formatDate(testCase.calledWith)).toBe(testCase.returns);
  });
});