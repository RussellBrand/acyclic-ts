export function make_tree(
  nodes: string[],
  edges: { from: string; to: string }[]
) {
  return { nodes, edges };
}

export function isValid(tree: {
  nodes: string[];
  edges: { from: string; to: string }[];
}): boolean {
  if (tree.nodes.length > 0) {
    return true;
  }
  return false;
}
