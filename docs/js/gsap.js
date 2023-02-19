gsap.registerPlugin(ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 5,
    smoothTouch: 0.1
  });