const app = require("../js/main.js")//app importeren

//1. wat? (test suite)
describe("Helper functions",() => {
    //alle testen hieronder zijn voor helpers
    //2. wat moet het doen?
    it("should return classname capacity-ok for 60 percent capacity",()=> {
        //3. actual
        const actual = app.getClassnameBasedOnPercentage(60);
        //4. expected
        const expected = "capacity--ok"
        expect(actual).toBe(expected);
    })

    //2. wat moet het doen?
    it("should return classname capacity-warning for 59 percent capacity",()=> {
        //3. actual
        const actual = app.getClassnameBasedOnPercentage(59);
        //4. expected
        const expected = "capacity--warning"
        expect(actual).toBe(expected);
    })

    //2. wat moet het doen?
    it("should return classname capacity-danger for 19 percent capacity",()=> {
        //3. actual
        const actual = app.getClassnameBasedOnPercentage(19);
        //4. expected
        const expected = "capacity--danger"
        expect(actual).toBe(expected);
    })



})