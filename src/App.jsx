import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const createBoxes = () => {
      const mainElement = document.querySelector('.main');
      for (let i = 1; i < 300; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.filter = `hue-rotate(${i * 10}deg)`;
        mainElement.appendChild(box);
      }
    };

    const animateBox = () => {
      let boxes = document.querySelectorAll('.box');
      let num = Math.floor(Math.random() * boxes.length);
      boxes[num].classList.toggle('animate');
    };

    createBoxes();

    const intervalId = setInterval(animateBox, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

};

export default App;
