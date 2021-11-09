import barba from '@barba/core';
import gsap from 'gsap';

import { animationEnter, animationLeave } from './animations';

const resetActiveLinks = () => gsap.set('a.is-active span', {
  xPercent: -100,
  transformOrigin: 'left',
});

barba.init({
  transitions: [
    {
      once({ next }) {
        resetActiveLinks();
        gsap.from('header a', {
          duration: 0.6,
          yPercent: 100,
          stagger: 0.2,
          ease: 'power1.out',
          onComplete: () => animationEnter(next.container),
        });
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        console.log('entering');
        animationEnter(next.container);
      },
    },
  ],
});