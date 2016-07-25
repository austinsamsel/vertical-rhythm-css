# Vertical Rhythm w/ CSS

This is a CSS drop in to have a little better vertical rhythm in your projects from the get-go. In conventional CSS modeling and browser rendering there's no real concept for vertical rhythm, so we're left to create our own.

Currently, you can grab what's in Rhythm.css and toss it in with your project and overwrite styles as you need. I plan to update this to be more of a react component that wraps around your project's root component so you can feed in props for how large you want text and how much spacing you want between components, and this will keep it in rhythm. 

You can check out a demo on [Codepen](https://codepen.io/austinnnnnnn/full/WwwmKP/). This includes some extra styles it make it look a little cool.

One principle in this is that, whenever possible, we're only creating spacing at the bottom of elements (with padding and margins) to keep the spacing flowing unidirectionally.

Another is that `<br/>` elements can be used as off-settings spacers to keep the text in adjacent columns from appaering on the same baseline.


