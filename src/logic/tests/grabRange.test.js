const grabRange = require('../grabRange');

test('[0,0],horizontal,length of 5',()=>{
  expect(grabRange([0,0],'horizontal',5)).toEqual([[0,0],[0,1],[0,2],[0,3],[0,4]])
})
test('[0,0],vertical,length of 5',()=>{
  expect(grabRange([0,0],'vertical',5)).toEqual([[0,0],[1,0],[2,0],[3,0],[4,0]])
})