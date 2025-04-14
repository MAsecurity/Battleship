const validateRange = require("../validateRange");
test("test invalid coordinates [[0,9],[0,10]]", () => {
  expect(
    validateRange([
      [0, 9],
      [0, 10],
    ]),
  ).toBe(false);
});
test("test valid coordinates [[0,0],[0,1]]", () => {
  expect(
    validateRange([
      [0, 0],
      [0, 1],
    ]),
  ).toBe(true);
});
