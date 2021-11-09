import gsap from 'gsap';

const animationLeave = (container) => {
  return gsap.to(container, {
    duration: 1,
    autoAlpha: 0,
    clearProps: 'all',
    ease: 'none',
  });
};

export default animationLeave;