import { describe, it, expect } from "vitest";
import { make_tree } from "./acyclic";
import { isValid } from "./acyclic";

const INVALID_EMPTY_TREE = make_tree([], []);
const SINGELON_TREE = make_tree(["root"], []);

describe("isValid function", () => {
  it("trees with just a root node are valide", () => {
    expect(isValid(SINGELON_TREE)).toBe(true);
  });

  it("trees must have root nodes", () => {
    expect(isValid(INVALID_EMPTY_TREE)).toBe(false);
  });
});
