# Vertical Rhythm w/ CSS

This is a CSS drop in to have a better vertical rhythm in your projects from the start. In conventional CSS modeling and browser rendering there's no real concept for vertical rhythm and a bunch of browser quirks that throw things off.

There's no javascript adjustments which would enforce strict vertical rhythm. For example, images and headers that span more than one line can shift the rhythm.

Having better vertical rhythm from the start means:

* Better designs in the browser that make content more readable and accessible.
* Code faster: a pattern to fall back on that helps create a consistent UI.

🦄 👽

## Set up

Currently, you can grab what's in Rhythm.css and toss it in with your project and overwrite styles as you need. 

I plan to update this to be more of a react component that wraps around your project's root component so you can feed in props for how large you want text and how much spacing you want between components, and this will keep it in rhythm. 

## Demo

You can check out a demo on [Codepen](https://codepen.io/austinnnnnnn/full/WwwmKP/). This includes some extra styles it make it look a little cool.

If you want to try this repo out on your local machine:

`npm install -g quik`

`git clone git@github.com:austinsamsel/vertical-rhythm-css.git`

`cd vertical-rhythm-css`

`quik`

### Notes

Whenever possible, we're only creating spacing at the bottom of elements (with padding and margins) to keep the spacing flowing unidirectionally.

`<br/>` elements can be used as off-settings spacers to keep the text in adjacent columns from appaering on the same baseline.


