/**
 * Constructs a graph (or forest) using the provided nodes and edges.
 
 */
export type Node = string;

export type Edges = Map<Node, Node[]>;

export type Tree = {
  edges: Edges; // potentially confusing that edges.size is the number of nodes in the graph, not the number of edges
};

/***
 * make_tree does no validation of the input. It is the responsibility of the caller to ensure that the input is valid.
 * ***/
export function make_tree(nodes: Node[], connections: [Node, Node][]): Tree {
  const edges = new Map<Node, Node[]>();

  for (const node of nodes) {
    if (!edges.has(node)) {
      edges.set(node, []);
    }
  }

  for (const [from, to] of connections) {
    if (!edges.has(from)) {
      edges.set(from, []);
    }
    edges.get(from)?.push(to);
  }

  return { edges };
}

export function root(tree: Tree): Node {
  for (const [node, _] of tree.edges) {
    return node;
  }
  throw new Error("No root node found");
}

export function isValid(tree: Tree): boolean {
  if (tree_nodes(tree).length === 0) {
    return false;
  }
  return true;
}
export function tree_nodes(tree: Tree): Node[] {
  return Array.from(tree.edges.keys());
}
