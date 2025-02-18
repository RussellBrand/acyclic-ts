import {
  describe,
  it,
  expect,
  // , beforeEach
} from "vitest";
import { make_tree, root } from "./acyclic";
import { isValid } from "./acyclic";

const ROOT = "root";
const INVALID_EMPTY_TREE = make_tree([], []);
const SINGELON_TREE = make_tree([ROOT], []);

// let alice = 1;

describe("Tree test suite", () => {
  //   beforeEach(() => {
  //     //  reset the trees to make they are good
  //   });
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
