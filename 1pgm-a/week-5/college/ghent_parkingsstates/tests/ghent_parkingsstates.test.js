//app moet hier beschikbaar zijn als ik de functies ervan wil testen
const app = require("./../js/main.js"); //importeren = niet vergeten exporteren

//1 . wat test ik?
describe("Percentage converts to correct classname in getClassnameBasedOnPercentage", () => {
  //2 . wat moet het doen?
  it("should convert 61 percent capacity as capacity--ok", () => {
    //3 . actual?
    const actual = app.getClassnameBasedOnPercentage(61);
    //4 . expexted?
    const expected = "capacity--ok"; //classname
    expect(actual).toBe(expected);
  });

  it("should convert 19 percent capacity as capacity--danger", () => {
    const actual = app.getClassnameBasedOnPercentage(19);
    const expected = "capacity--danger";
    expect(actual).toBe(expected);
  });

  it("should convert 20 percent capacity as capacity--warning", () => {
    const actual = app.getClassnameBasedOnPercentage(20);
    const expected = "capacity--warning";
    expect(actual).toBe(expected);
  });
});
