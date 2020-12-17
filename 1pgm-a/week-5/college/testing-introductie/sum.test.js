const sum = require("./sum");

// 1. Wat test ik en 2. wat moet het doen?
test("sum function should add 1 and 2 to be 3", () => {
  //3. Actual output
  const acutal = sum(1, 2); //actual is de return waarde van mijn functie: de effectieve output vna onze code.
  // 4. Expected output: wat verwachten we?
  const expected = "3";

  expect(acutal).toBe(expected); // toBe is ===
  //FAIL= zelf nog kijken hoe we dit oplossen
});
