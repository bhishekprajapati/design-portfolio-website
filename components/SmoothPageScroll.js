import gsap from "gsap";

function createSmoothScroller(scrollerContainerId) {
  const html = document.documentElement;
  const body = document.body;

  const scroller = {
    target: document.getElementById(scrollerContainerId),
    ease: 0.05,
    endY: 0,
    requestId: null,
    resizeRequest: 1,
    scrollRequest: 0,
  };

  gsap.set(scroller.target, {
    rotation: 0,
    force3D: true,
  });

  function updateScroller() {
    const resized = scroller.resizeRequest > 0;

    if (resized) {
      const height = scroller.target.clientHeight;
      body.style.height = height + "px";
      scroller.resizeRequest = 0;
    }

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
      scroller.y = scrollY;
      scroller.scrollRequest = 0;
    }

    gsap.set(scroller.target, {
      y: -scroller.y,
    });

    scroller.requestId =
      scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  }

  function onScroll() {
    scroller.scrollRequest++;
    if (!scroller.requestId) {
      scroller.requestId = requestAnimationFrame(updateScroller);
    }
  }

  function onResize() {
    scroller.resizeRequest++;
    if (!scroller.requestId) {
      scroller.requestId = requestAnimationFrame(updateScroller);
    }
  }

  updateScroller(); // initial update on load

  return {
    onResize,
    onScroll,
  };
}

export default {
  props: ["scrollerViewportId", "scrollerContainerId"],
  mounted() {
    // set base styles for the viewport and the container
    gsap.set(document.getElementById(this.scrollerViewportId), {
      overflow: "hidden",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    });
    gsap.set(document.getElementById(this.scrollerContainerId), {
      position: "absolute",
      overflow: "hidden",
      zIndex: 10,
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    });

    // setup smooth scroller for the target container
    const containerId = this.scrollerContainerId;
    const { onScroll, onResize } = createSmoothScroller(containerId);
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll);
  },
  template: `
    <div :id="scrollerViewportId">
      <div :id="scrollerContainerId">
      <div :id="scrollerContainerId + '-content'">
          <slot></slot>
        </div>
      </div>
    </div>
  `,
};
