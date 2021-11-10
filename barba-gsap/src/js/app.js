import barba from '@barba/core';
import gsap from 'gsap';

import { animationEnter, animationLeave, revealProject, leaveToProject, leaveFromProject } from './animations';

const resetActiveLinks = () => gsap.set('a.is-active span', {
  xPercent: -100,
  transformOrigin: 'left',
});

barba.init({
  transitions: [
    {
      name: 'detail',
      to: {
        namespace: ['detail'],
      },
      once({ next }) {
        revealProject(next.container);
      },
      leave: ({ current }) => leaveToProject(current.container),
      enter({ next }) {
        revealProject(next.container);
      },
    },
    {
      name: 'general-transition',
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