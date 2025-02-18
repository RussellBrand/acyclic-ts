# aCyclic

aCyclic is package for manipulating acylic graph graphs with a single root (trees).

## Step 1: Basic Library

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

## Step 2: Display tree in react

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

From ChatGPT 4.0

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

## Step 3: Store tree in mongodb

## Step 4: Edit tree in react
