import barba from '@barba/core';
import gsap from 'gsap';

import { animationEnter, animationLeave, revealProject, leaveToProject, leaveFromProject } from './animations';

const resetActiveLinks = () => gsap.set('a.is-active span', {
  xPercent: -100,
  transformOrigin: 'left',
});

barba.hooks.enter(() => {

  // console.log('enter');
  window.scrollTo(0, 0);
});

barba.hooks.after(() => {

  // console.log('after transition');
});

barba.init({
  views: [ // Use views to enbale Javascript or plugins on specific pages before or after transition
    {
      namespace: 'architecture',
      beforeEnter: (data) => {
        console.log(data, 'beforeenter architecture');
      },
    },
  ],
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
    }, {
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
        animationEnter(next.container);
      },
    }, {
      name: 'from-detail',
      from: {
        namespace: ['detail'],
      },
      leave: ({ current }) => leaveFromProject(current.container),
      enter({ next }) {
        gsap.from('header a', {
          duration: 0.6,
          yPercent: 100,
          stagger: 0.2,
          ease: 'power1.out',
        });
        animationEnter(next.container);
      },
    },
  ],
});