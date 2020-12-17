const sum = require("./sum.js")
//1. Wat?
//2. Wat moet het doen?
test("sum functionality should add 1 and 2 to be 3",() => {
    //3. Actual, effectieve uikomst
    const actual = sum(1,2); // zou 3 moeten zijn, wordt berekend
    //4. Expected, wat verwachten we dat de uitkomst gaat zijn
    //hard coded!!
    const expected = 3;
    expect(actual).toBe(expected); // ===
})