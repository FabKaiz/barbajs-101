import gsap from 'gsap';

const animationEnter = (container) => {
  return gsap.from(container, {
    duration: 1,
    autoAlpha: 0,
    clearProps: 'all',
    ease: 'none',
  });
};

export default animationEnter;