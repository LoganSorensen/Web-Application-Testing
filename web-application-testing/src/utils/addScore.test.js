import "@testing-library/jest-dom/extend-expect"
import { addStrike, addBall, addFoul, addHit } from './addScore';

test("addStrike adds 1 to the total number of strikes up to 2 and then resets", () => {
    expect(addStrike(1)).toBe(2);
    expect(addStrike(2)).toBe(0);
    expect(addStrike(2)).not.toBe(3);
})

test("addBall adds 1 to the total number of balls up to 3 and then resets", () => {
    expect(addBall(1)).toBe(2);
    expect(addBall(3)).toBe(0);
    expect(addBall(3)).not.toBe(4);
})

test("addFoul adds 1 to the total number of strikes up to 2", () => {
    expect(addFoul(1)).toBe(2);
    expect(addFoul(2)).toBe(2);
    expect(addFoul(2)).not.toBe(3);
})
