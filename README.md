# Calculator Project - Lessons Learned

In this calculator project, I worked on new objects in JavaScript and had a chance to practice my CSS styling and animations. I'm particularly proud of the novel calculator design, where the UI is dynamically updated so that users are not even given the chance to input a second decimal or divide by zero. I also wanted to try adding a CSS-only popover animation, which I think is pretty slick (and leads users to easy-to-understand math problems anybody can test on this basic calculator, which are nevertheless unsolved). 

Beyond that, below are some of the key takeaways from the project:

## Opening Links in a New Tab

While working on this project, I learned how to open a link in a new tab using the `target` attribute with the value `_blank`. However, I also discovered that there are potential security concerns associated with this approach. By setting `rel="noopener noreferrer"` along with `target="_blank"`, we can mitigate these risks.

More information can be found in this article: [How to Use HTML to Open a Link in a New Tab Properly and Securely](https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/)

## CSS Animations

CSS animations allowed me to create smooth and visually appealing effects. In this project, I used the `@keyframes` rule to define an animation that rotates an element. I then applied this animation on hover to create a spinning effect for the GitHub logo.

In addition to the spinning animation, I learned about the use of the general sibling combinator (`~`) in CSS to create a popover effect. The `~` symbol allows us to target elements that share the same parent and come after the specified element. In the popover code, I used the `~` symbol to target and style the `.primer-box` and `.primer-btn` elements when the `.primer-toggle` input is checked:

### CSS Bonus :star:
- I learned learned about a new frontend *philosophy*: [thinking in actions, not in "states" for beautiful front-end development](https://www.joshwcomeau.com/animation/css-transitions/)

## parseFloat and preventDefault

During the calculator project, I learned about the `parseFloat` function and `event.preventDefault()` method.

`parseFloat` ([MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)) is a JavaScript function that converts a string to a floating-point number. It allowed me to perform arithmetic operations on numbers stored in the calculator object.

I encountered issues with certain keys, like the forward-slash ("/"), triggering unwanted behavior. To solve this, I used `event.preventDefault()` ([MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)). It cancels the default action associated with an event, enabling the calculator to function as expected.

## JavaScript Objects

This project introduced me to the concept of JavaScript objects. Objects in JavaScript are key-value pairs that can store data and functionality. In the calculator code, I used a JavaScript object to store the calculator's logic states, as well as operands and operators, which made it easy to manage the calculator's data and behavior. Switching to a single object instead of multiple, disparate variables helped me to write cleaner code (and stay sane in the process).

## Extra Credit tasks from [the Odin Project assignment](https://www.theodinproject.com/lessons/foundations-calculator)
- :heavy_check_mark: ~~Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)~~
- Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons. `you tell me if I succeeded`
- :heavy_check_mark: ~~Add a “backspace” button, so the user can undo if they click the wrong number.~~
- :heavy_check_mark: ~~Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.~~