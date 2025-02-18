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

/***
 * make_tree does no validation of the input. It is the responsibility of the caller to ensure that the input is valid.
 * ***/
export function make_tree(root: Node, list_parent_child: [Node, Node][]): Tree {
  const edges = new Map<Node, Node[]>();
  edges.set(root, []);
  //   for (const node of nodes) {
  //     if (!edges.has(node)) {
  //       edges.set(node, []);
  //     }
  //   }

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
