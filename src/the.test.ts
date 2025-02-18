import { describe, it, expect, beforeEach } from "vitest";
import { make_tree, root, Tree } from "./acyclic";
import { isValid } from "./acyclic";

const ROOT = "root";
let INVALID_EMPTY_TREE: Tree;
let SINGELON_TREE: Tree;

// let alice = 1;

describe("Tree test suite", () => {
  beforeEach(() => {
    INVALID_EMPTY_TREE = make_tree([], []);
    SINGELON_TREE = make_tree([ROOT], []);
  });
  describe("isValid function", () => {
    it("trees with just a root node are valid", () => {
      expect(isValid(SINGELON_TREE)).toBe(true);
      expect(root(SINGELON_TREE)).toBe(ROOT);
    });

    it("trees must have root nodes", () => {
      expect(isValid(INVALID_EMPTY_TREE)).toBe(false);
    });
  });
});
