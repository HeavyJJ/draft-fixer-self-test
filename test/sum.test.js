import test from "node:test";
import assert from "node:assert/strict";
import { sum } from "../src/sum.js";

test("sum adds numbers", () => {
  assert.equal(sum([1, 2, 3]), 6);
  assert.equal(sum([4, 5]), 9);
});
