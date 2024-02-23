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
