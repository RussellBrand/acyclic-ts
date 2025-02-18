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
things we *might* do


## Step 2: Display tree in react
### draw simple parent-child heiarchies by hand
Perhaps use factorization as an example
### look for pre-existing libraries
#### Vis
Sample code: `src/vis-sample.html`
#### D3 
Sample code: `src/d3-sample.html`

## Step 3: Store tree in mongodb
## Step 4: Edit tree in react
