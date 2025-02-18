import { describe, it, expect, beforeEach } from "vitest";
import { make_tree, root, simple_delete_node, Tree } from "./acyclic";
import { isValid } from "./acyclic";

const ROOT = "root";

let SINGELON_TREE: Tree;
let MISPLACED_ROOT_TREE: Tree;
let ROOT_ABC_TREE: Tree;

// let alice = 1;

describe("Tree test suite", () => {
  beforeEach(() => {
    SINGELON_TREE = make_tree([ROOT], []);
    MISPLACED_ROOT_TREE = make_tree(
      [ROOT, "super_root"],
      [["super_root", ROOT]]
    );
    ROOT_ABC_TREE = make_tree(
      [ROOT, "A", "B", "C"],
      [
        [ROOT, "A"],
        ["A", "B"],
        ["B", "C"],
      ]
    );
  });
  describe("isValid function", () => {
    it("accepts trees with just a root node", () => {
      expect(isValid(SINGELON_TREE)).toBe(true);
      expect(root(SINGELON_TREE)).toBe(ROOT);
    });
    it("rejects root having parents", () => {
      expect(isValid(MISPLACED_ROOT_TREE)).toBe(false);
    });
  });
  describe("simple_delete_node function", () => {
    it("cannot delete the root node", () => {
      expect(() => simple_delete_node(SINGELON_TREE, ROOT)).toThrow(
        "Cannot delete root node"
      );
    });
    it("is permitted to delete non-existent nodes", () => {
      expect(() =>
        simple_delete_node(SINGELON_TREE, "non-existent")
      ).not.toThrow();
    });
    it("cannot delete nodes with children", () => {
      expect(() => simple_delete_node(ROOT_ABC_TREE, "A")).toThrow(
        "Cannot delete node with children"
      );
      expect(() => simple_delete_node(ROOT_ABC_TREE, "B")).toThrow(
        "Cannot delete node with children"
      );
    });
  });
});
