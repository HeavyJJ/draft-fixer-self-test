import test from "node:test";
import assert from "node:assert/strict";
import { sum } from "../src/sum.js";

test("sum adds numbers", () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test("sum handles negative numbers", () => {
  assert.equal(sum([1, -2, 3]), 2);
});
