
# marquee.js

## Usage/Examples
Add the following code to your project files or add them as seperate files in the project directory.

*.html, *.js and *.css respectively
### HTML
```html
    <div class="marquee">
        <h1> NPM — JAVASCRIPT — GSAP — TAILWIND — PHOTOSHOP —&nbsp;</h1>
        <h1> NPM — JAVASCRIPT — GSAP — TAILWIND — PHOTOSHOP —&nbsp;</h1>
    </div>
```
### JS
```javascript
function Marquee(selector, speed) {
  const marqueeElements = document.querySelectorAll(selector);

    marqueeElements.forEach(marqueeElement => {
    let i = 0, interval;
    const firstElement = marqueeElement.children[0];
    const start = () => interval = setInterval(() => firstElement.style.marginLeft = `-${(i += speed) % firstElement.clientWidth}px`, 10);
    const stop = () => clearInterval(interval);
    marqueeElement.addEventListener('mouseleave', start);
    marqueeElement.addEventListener('mouseenter', stop);
    
    start();
  });
}
window.addEventListener('load', () => Marquee('.marquee', .8));
```
### CSS
```css
.marquee {
    overflow: hidden;
    display: flex;
    background-color: var(--accent-color);
    border-bottom: var(--border);
    border-top: var(--border);
    color: #030104;
}
.marquee h1 {
    margin-top: 1rem;
    font-size: 6rem;
    white-space: nowrap;
    text-transform: uppercase;
}
```
## Feedback

If you have any feedback, feel free to alter the code.
