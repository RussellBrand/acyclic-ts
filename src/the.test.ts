import { describe, it, expect, beforeEach } from "vitest";
import { make_tree, root, Tree } from "./acyclic";
import { isValid } from "./acyclic";

const ROOT = "root";

let SINGELON_TREE: Tree;
let MISPLACED_ROOT_TREE: Tree;

// let alice = 1;

describe("Tree test suite", () => {
  beforeEach(() => {
    SINGELON_TREE = make_tree(ROOT, []);
    MISPLACED_ROOT_TREE = make_tree(ROOT, [["super_root", ROOT]]);
  });
  describe("isValid function", () => {
    it("trees with just a root node are valid", () => {
      expect(isValid(SINGELON_TREE)).toBe(true);
      expect(root(SINGELON_TREE)).toBe(ROOT);
    });
    it("root cannot have parents", () => {
      expect(isValid(MISPLACED_ROOT_TREE)).toBe(false);
    });
  });
});
