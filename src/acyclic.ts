/**
 * Constructs a graph (or forest) using the provided nodes and edges.
 
 */
export type Node = string;

export type Edges = Map<Node, Node[]>;

export type Tree = {
  root: Node;
  nodes: Set<Node>;
  edges: Edges;
};

/***
 * make_tree does no validation of the input. It is the responsibility of the caller to ensure that the input is valid.
 * ***/
export function make_tree(nodes: Node[], connections: [Node, Node][]): Tree {
  const edges = new Map<Node, Node[]>();

  for (const [from, to] of connections) {
    if (!edges.has(from)) {
      edges.set(from, []);
    }
    edges.get(from)?.push(to);
  }

  const nodesSet = new Set(nodes);
  return { root: nodes[0], nodes: nodesSet, edges };
}

export function isValid(tree: Tree): boolean {
  if (tree.nodes.size === 0) {
    return false;
  }
  return true;
}
