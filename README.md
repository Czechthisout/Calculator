# Calculator Project - Lessons Learned

In this calculator project, I learned a lot about HTML, CSS, and JavaScript. Below are some of the key takeaways from the project.

## Opening Links in a New Tab

While working on this project, I learned how to open a link in a new tab using the `target` attribute with the value `_blank`. However, I also discovered that there are potential security concerns associated with this approach. By setting `rel="noopener noreferrer"` along with `target="_blank"`, we can mitigate these risks.

More information can be found in this article: [How to Use HTML to Open a Link in a New Tab Properly and Securely](https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/)

## CSS Animations

CSS animations allowed me to create smooth and visually appealing effects. In this project, I used the `@keyframes` rule to define an animation that rotates an element. I then applied this animation on hover to create a spinning effect for the GitHub logo.

In addition to the spinning animation, I learned about the use of the general sibling combinator (`~`) in CSS to create a popover effect. The `~` symbol allows us to target elements that share the same parent and come after the specified element. In the popover code, I used the `~` symbol to target and style the `.primer-box` and `.primer-btn` elements when the `.primer-toggle` input is checked:

>css
>.primer-toggle:checked ~ .primer-box {
>    opacity: 1;
>    transform: translateY(0);
>    transition: opacity 0.2s ease-in, transform 0.2s ease-in;
>}
>
>.primer-toggle:checked ~ .primer-btn {
>    background-color: darkorange;
>}

### CSS Bonus :star:
- I learned learned about a new frontend *philosophy*: [thinking in actions, not in "states" for beautiful front-end development](https://www.joshwcomeau.com/animation/css-transitions/)

## parseFloat Function

The JavaScript `parseFloat` function was an essential part of the calculator's functionality. It is used to parse a string and return a floating-point number. In the calculator project, I used `parseFloat` to convert the input strings into numbers so that mathematical operations could be performed.

For more information, refer to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat).

## JavaScript Objects

This project introduced me to the concept of JavaScript objects. Objects in JavaScript are key-value pairs that can store data and functionality. In the calculator code, I used a JavaScript object to store the calculator's state and methods, which made it easy to manage the calculator's data and behavior.

For example, the calculator object contained properties for the current operand, the previous operand, and the operator. It also contained methods to handle user input, perform calculations, and update the display.

Using JavaScript objects helped me to write clean and organized code, making it easier to understand and maintain.

---

Overall, the calculator project was a great learning experience that allowed me to gain valuable knowledge in web development. From opening links in new tabs securely to creating CSS animations and understanding JavaScript objects, these lessons will be beneficial for my future projects.


## Extra Credit
- :heavy_check_mark: ~~Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)~~
- Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons. `you tell me if I succeeded`
- :heavy_check_mark: ~~Add a “backspace” button, so the user can undo if they click the wrong number.~~
- Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.