import barba from '@barba/core';
import gsap from 'gsap';

const animationEnter = (container) => {
  return gsap.from(container, {
    duration: 1,
    autoAlpha: 0,
    clearProps: 'all',
    ease: 'none',
  });
};

const animationLeave = (container) => {
  return gsap.to(container, {
    duration: 1,
    autoAlpha: 0,
    clearProps: 'all',
    ease: 'none',
  });
};

barba.init({
  transitions: [
    {
      once({ next }) {
        animationEnter(next.container);
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        console.log('entering');
        animationEnter(next.container);
      },
    },
  ],
});