const fetchData = require('../lib/http-client');

test('the data is {"a": "b"}', () => {
  return fetchData('http://echo.jsontest.com/a/b').then((data) => {
    expect(data).toBe('{"a": "b"}');
  });
})
