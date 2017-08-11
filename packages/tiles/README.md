# Tiles

## Instructions

1. Fork this repository to your own github account.
2. Complete the exercise below and provide information on how to run the application as well any else you deem worthy of explaining to the person reviewing your code.
3. When ready, submit a link to your fork by replying to the original email from Flow. Do not create a pull request back to the `flowcommerce` source.

### Technology Requirements

- Build the application using node.js. Use the application framework of your choice (express, hapi, etc).

## Exercise

For this exercise we would like you to create an application that displays a grid of tiles. See [Tile.Exercise](Tile.Exercise.png) for a visual of how grids can be arranged. The application should provide a way for a user to specify the number of tiles on the page and whether or not to display special unique tiles.

### Tile Types

* Single - The smallest unit of tile (1x1)
* Wide - A tile that represents two singles side by side (2x1)
* Tall - A vertical tile (1x3)
* Super - A wide tile that spans the full width of the page

### Requirements

** Controls **

* A user should be able to specify the number of tiles to render on the page.
* The number of tiles has a minimum value of `1`.
* A user should be able to toggle the display of a Tall tile.
* A user should be able to toggle the display of a Super tile.

** Tall & Super Tiles **

* There can only be one Tall tile on the page
* A Tall tile is always anchored to the right corner of the grid, with the exception of when a Super tile is present.
* A Super tile must span the full width of the grid and can only appear on the first row

** Grid **

* The grid must be a minimum of 3 columns (using Single as the size of a column), but can be responsive up to N columns
* There can be no gaps in the grid
* The last row must be complete; every column should be occupied.
* Each row of the grid must attempt to use the Wide tile if possible, but two Wide tiles cannot be directly above one another in any given 2 rows. Aka, alternate the use of Wide tiles (see [Tile.Exercise](Tile.Exercise.png)).
* Tiles within the grid must be relative in size to the Single tile, but size of the Single tile can be responsive to fit the container / page.

** Application / Misc **

* There should be a permalink to the specific settings of the grid as specified by the Controls mentioned above.
* Populate the tiles with content using a public API of your choice. Example: https://unsplash.it/list

### Bonus Requirements

* Support more than 3 columns
* Provide tests for all of your work
* Show off your CSS skills. Make this look beautiful and animate the transitions between Control updates.

### Major Bonus Requirements

* Use React / Redux

## Expectations

We expect that you will at minimum complete the `Requirements`. Completing the bonus requirements would be expected of more senior engineers.

We're looking to see how well you write code.

* How well is it organized? Is it easy to maintain?
* Did you fully comprehend the requirements?
* Can you be creative (the CSS bonus requirement) visually?
* How easy was it to install / run the application?

Don't feel overwhelmed with the exercise. If you find that it's too much, make decisions on which features are most important. Above all else, do what you can to show us how well you understand web technologies.

Good luck!
