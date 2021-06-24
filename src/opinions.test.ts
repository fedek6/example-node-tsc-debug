import { iLike } from "./opinions";

test("check result", () => {
    const result = iLike("Ninja");
    expect(result).toBe("I like Ninja!");
});