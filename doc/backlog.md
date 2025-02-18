# backlog

## freeze tree
## copy tree
## refresh trees at the beginning of each node

## we get back the nodes we added 

make a function `add(child,parent?)`

## adding nodes is idiompotent -- we can add a node more than onces
## we get back the edges we added 
## adding edges is idiompotent -- we can add an edge more than onces
## the root nodes is always first 
## the nodes are returned with a partial ordering
## adding more nodes does not prevent the root node from being first
## can't delete the root node
## can't add an edge that has a from-node that isn't in nodes
## can't add an edge that has a to-node that isn't in nodes
## can't add an edge where to-node == from-node
## can't add an node that is the from-node of an edge
## can't add an node that is the to-node of an edge
## can't remove an edge that isn't there
## can't remove a node that isn't there
## root node can't have parents
## is a tree -- all nodes have paths to the root
## is acyclic -- can't get from a node back to itsel
## a node can have many parents
## a node can have many children
## can move an edge preserving treeness 
## can move an edge preserving acyclicness
## can remove a node that has no children 
## can remove a node whose children all have other parents
## refactor: representation of a dictionary rather than lists
