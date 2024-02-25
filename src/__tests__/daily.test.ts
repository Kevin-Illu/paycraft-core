import { describe, expect, test } from "vitest";
import PayCraft from "..";

describe("Pycraft Daily Method Test", () => {
  test("wrong frequency param should be throw an error", () => {
    expect(() =>
      PayCraft.calculate.daily({
        amount: 1,
        frequencyPayment: "hola",
      })
    ).toThrowError();
  });

  test("wrong filter param should be throw an erro", () => {
    expect(() =>
      PayCraft.calculate.daily({
        amount: 1,
        frequencyPayment: "weekly",
        filter: "This yearr",
      })
    ).toThrowError();
  });
});
