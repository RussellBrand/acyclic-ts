/**
 * Constructs a graph (or forest) using the provided nodes and edges.
 
 */
export type Node = string;
export type EdgeGroup = [Node, Node[]];

export type Tree = Map<Node, Node[]>;

export function edge_group_children(edge_group: EdgeGroup): Node[] {
  const [_parent, children] = edge_group;
  return children;
}

export function parents(node: Node, tree: Tree): Node[] {
  const parents = [];
  for (const [parent, children] of tree) {
    if (children.includes(node)) {
      parents.push(parent);
    }
  }
  return parents;
}

export function children(node: Node, tree: Tree): Node[] {
  return tree.get(node) || [];
}

/***
 * make_tree does no validation of the input. It is the responsibility of the caller to ensure that the input is valid.
 * ***/
export function make_tree(
  nodes: Node[],
  list_parent_child: [Node, Node][]
): Tree {
  const edges = new Map<Node, Node[]>();
  //   edges.set(root, []);
  for (const node of nodes) {
    if (!edges.has(node)) {
      edges.set(node, []);
    }
  }

  for (const [from, to] of list_parent_child) {
    if (!edges.has(from)) {
      edges.set(from, []);
    }
    edges.get(from)?.push(to);
  }

  return edges;
}

export function root(tree: Tree): Node {
  for (const [node, _] of tree) {
    return node;
  }
  throw new Error("No root node found");
}

export function isValid(tree: Tree): boolean {
  if (tree_nodes(tree).length === 0) {
    return false;
  }
  const [root, _] = tree;
  const [root_node, _children_of_root] = root;
  if (parents(root_node, tree).length !== 0) {
    return false;
  }

  return true;
}
export function tree_nodes(tree: Tree): Node[] {
  return Array.from(tree.keys());
}

export function has_node(tree: Tree, node: Node): boolean {
  return tree.has(node);
}

export function simple_delete_node(tree: Tree, node: Node): void {
  // console.log(tree);
  // console.log(node);
  if (node === root(tree)) {
    throw new Error("Cannot delete root node");
  }
  if (!tree.has(node)) {
    return;
  }
  const my_children = children(node, tree);
  // console.log(tree);
  // console.log(node);
  // console.log(my_children);
  if (my_children.length > 0) {
    throw new Error("Cannot delete node with children");
  }
  tree.delete(node);
  // throw "Not implemented";
  //   tree.delete(node);
}

export function add_node(
  tree: Tree,
  node: Node,
  my_parent: Node | undefined = undefined
): void {
  const my_root = root(tree);
  if (my_parent === undefined) {
    my_parent = my_root;
  }
  if (node === my_root) {
    throw new Error("Cannot add root node");
  }
  if (node === my_parent) {
    throw new Error("Child and parent must be distinct");
  }
  if (!has_node(tree, my_parent)) {
    throw new Error("the parent must already be in the tree");
  }

  // 4. a new child can always be added anywhere
  // 5. an pre-existing edge is always ok
  // 6. a new edge for an exist child must be validated

  throw new Error("Not implemented");

  //   if (tree.has(node)) {
  //     return;
  //   }
  //   tree.set(node, []);
}
