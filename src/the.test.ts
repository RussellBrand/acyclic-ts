import { describe, it, expect, beforeEach } from "vitest";
import {
  add_node,
  // children,
  has_node,
  make_tree,
  root,
  simple_delete_node,
  Tree,
} from "./acyclic";
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
      expect(has_node(SINGELON_TREE, ROOT)).toBe(true);
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

      expect(has_node(ROOT_ABC_TREE, "A")).toBe(true);
      expect(() => simple_delete_node(ROOT_ABC_TREE, "B")).toThrow(
        "Cannot delete node with children"
      );
      expect(has_node(ROOT_ABC_TREE, "A")).toBe(true);
    });
    it("deletes nodes without children", () => {
      expect(has_node(ROOT_ABC_TREE, "C")).toBe(true);
      simple_delete_node(ROOT_ABC_TREE, "C");
      expect(has_node(ROOT_ABC_TREE, "C")).toBe(false);
    });
  });
  describe("add_node function", () => {
    it("cannot add a root node", () => {
      expect(() => add_node(SINGELON_TREE, ROOT)).toThrow(
        "Cannot add root node"
      );
      expect(has_node(SINGELON_TREE, ROOT)).toBe(true);
    });
    it("child and parent must be distinct", () => {
      expect(() => add_node(ROOT_ABC_TREE, "b", "b")).toThrow(
        "Child and parent must be distinct"
      );
    });
    it("the parent must already be in the tree", () => {
      expect(() => add_node(ROOT_ABC_TREE, "b", "not-real")).toThrow(
        "the parent must already be in the tree"
      );
    });
  });
});
