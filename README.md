# aCyclic

aCyclic is package for manipulating acylic graph graphs with a single root (trees).

## Step 1: Basic Library for Aclyclic Trees

We are first building a basic library in typescript.

This does not include a UI or persistant storage.

### Files

For step one, the only files of interest should be

### `Makefile`

`make test` to run the tests

`make commit` will do a commit only if the tests pass

### `src/acyclic.ts`

### `src/the.test.ts`

### `src/internal.test.ts`

Tests that aren't part of our external spec.

These tests are not expect to surive changes in represenation

### `doc/backlog.md`

things we _might_ do

## Step 2: Display general directed graph in react

### draw simple parent-child heiarchies by hand

Perhaps use factorization as an example

### look at pre-existing libraries

These are all regular javascript.

Haven't checked react support/integration.

Samples made with ChatGPT 4.0 & Claud3 3.5 sonnet.

#### Vis

Sample code: `src/vis-sample.html`

#### D3

Sample code: `src/d3-sample.html`

#### Cytoscape.js

#### Sigma.js

#### VivaGraphJS

#### G6 by AntV

#### Cola.js

Constrait based -- can be used with D3.

### look at libraries that are commonly used with react

Looking for recommendations for React Library for Graph Layout

I have parent-child heirarchy as a general graph (cylces, multiple roots).

Generally about five "roots" roots, two "unhappy" root with most notes being a descendent of one type of rule or the other rather than both.

Two types of non-root nodes.

About 150 nodes total.

There are two basic type of non-root nodes.

The nodes need display short text and have distinguishable visuals based on their properties.

Want to constrain the position of root nodes and have good automatic layout of the rest.

User will need to edit the graph (create & destroy nodes & links, change source/destination of links) and manually redisplay.

What library is best for building this in React?

So far I am looking at 

* Nivo

* React-Flow

* Reaflow

* Reagraph

* Visx

But not committed to using one of them.


Notes From ChatGPT 4.0

#### Reaflow

Reaflow is an open-source library specifically designed for building workflow and diagram graphs in React. It offers a suite of components to create interactive diagrams with complex relationships, making it suitable for visualizing parent-child structures with multiple connections.

#### Reagraph

Reagraph is a high-performance network graph visualization library built with WebGL for React. It supports features like node sizing based on attributes, clustering, pathfinding, and customizable nodes, which are essential for representing complex parent-child relationships.

#### React-Flow

React-Flow is a library for building node-based interfaces, such as flow charts and diagrams, in React. It provides a flexible and extensible platform to create interactive graphs, supporting complex parent-child relationships and custom node types.

#### Visx

Developed by Airbnb, Visx combines the power of D3.js with the benefits of React. It offers low-level visualization components that can be composed to build complex graphs and diagrams, allowing for the representation of intricate parent-child relationships.

#### Nivo

Nivo provides a rich set of data visualization components built on top of D3.js and React. It includes support for various graph types and is known for its flexibility and ease of use, making it suitable for visualizing complex hierarchical data.

## Step 3: Figure semantics and other fields
## Step 3: Display for other fields
## Step 5: simple CRUD for general directed graph in mongodb
## Step 6: business logic in back end
## Step 7: Edit general directed graph in react
Constraints are more complex than acyclic tree
## Step 8: for undo/redo 
Journaling backend 
ui for journaling
