import PageLayout from "./layouts/PageLayout";

import AppNav from "./components/AppNav";
import SectionCta from "./components/SectionCta";
import SectionHero from "./components/SectionHero";
import SectionIntro from "./components/SectionIntro";
import CardCategory from "./components/CardCategory";
import ButtonPrimary from "./components/ButtonPrimary";

import LocomotiveScroll from "locomotive-scroll";

const { createApp, ref } = Vue;
const app = createApp({
  mounted() {
    const el = document.querySelector("[data-scroll-container]");
    const scroller = new LocomotiveScroll({
      el,
      smooth: true,
      smartphone: {
        smooth: true,
      },
    });
    new ResizeObserver(() => scroller.update()).observe(el);
  },
});

// register layouts
app.component("page-layout", PageLayout);

// register components
app.component("app-nav", AppNav);
app.component("category-card", CardCategory);
app.component("button-primary", ButtonPrimary);
app.component("cta-section", SectionCta);
app.component("hero-section", SectionHero);
app.component("intro-section", SectionIntro);

// mount the app
app.mount("#app");
