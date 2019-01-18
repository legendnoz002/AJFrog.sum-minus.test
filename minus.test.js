const minus = require('./minus');

test('1 - 2 เท่ากับ -1', ()=> {
  expect(minus(1,2)).toBe(-1);
});


test('20 - 1 เท่ากับ 19', () => {
  expect(minus(20,1)).toBe(19);
})


test('2 - 5 เท่ากับ -3', () => {
  expect(minus(2,5)).toBe(-3)
})

test('20 - 20 เท่ากับ 0', ()=> {
    expect(minus(20,20)).toBe(0)
})
test('-100 - 50 เท่ากับ -150',()=> {
    expect(minus(-100,50)).toBe(-150)
})