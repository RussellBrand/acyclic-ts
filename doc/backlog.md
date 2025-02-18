# backlog

## soon




### copy tree



```
const copyEdges = new Map();

edges.forEach((list, key) => {
  // Use the spread operator to create a new array from the original
  copyEdges.set(key, [...list]);
});

```

1. copy has same stuff
2. changing one doesn't change the other -- add nodes
3. changing one doesn't change the other -- add edge



### freeze tree
```
edges.forEach((list, key) => {
  Object.freeze(list); // Freeze the array to prevent modifications
});

Object.freeze(edges); // Freeze the map itself

``` 
### make a function `simple_delete_node(child)`
1. child must not be root
2. child must already be in the nodes
3. child must not have children
4. child is no longer in nodes

### make a function `add_node(child,parent?)`

semantics:if the parent isn't provided, make the parent the root

1. the child must not be root
2. the child and parent must be distinct
3. the parent must already exist
4. a new child can always be added anywhere
5. an pre-existing edge is always ok
6. a new edge for an exist child must be validated

perhaps by computing ancestors until I find myself or run out of ancestor


### make a function `change_parent(child,new,old?)`

semantics: if `old` is undefined, the child must have exactly pre-existing parent which is used as old

1. the child can't be root
2. if old is not provided, there can't be more than one parent
3. there must be a pre-existing link from child to parent
4. if new == old, no change is made
5. revalidate -- i still need to be able to get to the root 
6. revalidate -- i can't make a cycle


### make a function `delete_edge(child, parent)`
1. there must already be edge between parent and chil
2. removing the edge must not break the graph -- child must still be able to get to root


### make a function `delete_node_and_join(node)`
1. node must not be root
2. node is remove
3. all children of node now have as their parent, the original parent of node


## defer
### seperate `all_nodes` and `nodes_starting_with_root`
### rename `make_tree` -> `make_tree_from_arrays`
### create `make_tree_from_root_and_array`
## done
### refactor to get rid of the nodes attribute
1. in `make_tree` loop over nodes and insert into the map if they are not already there
2. make sure root is put in the map first, so we can just iterate over notes to start with root
### refactor so that Tree is a Map rather than containing a map 

## inbox
### probably get rid of make tree entirely
### refresh trees at the beginning of each node


### adding nodes is idiompotent -- we can add a node more than onces
### we get back the edges we added 
### adding edges is idiompotent -- we can add an edge more than onces
### the root nodes is always first 
### the nodes are returned with a partial ordering
### adding more nodes does not prevent the root node from being first
### can't delete the root node
### can't add an edge that has a from-node that isn't in nodes
### can't add an edge that has a to-node that isn't in nodes
### can't add an edge where to-node == from-node
### ? can't add an node that is the from-node of an edge
### ? can't add an node that is the to-node of an edge
### can't remove an edge that isn't there
### can't remove a node that isn't there
### root node can't have parents
### is a tree -- all nodes have paths to the root
### is acyclic -- can't get from a node back to itsel
### a node can have many parents
### a node can have many children
### can move an edge preserving treeness 
### can move an edge preserving acyclicness
### can remove a node that has no children 
### can remove a node whose children all have other parents

