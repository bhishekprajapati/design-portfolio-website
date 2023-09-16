export default {
  setup() {
    const title = "Design solutions made easy";
    const description =
      "With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.";

    return {
      title,
      description,
    };
  },
  template: `
    <h1 data-scroll data-scroll-speed="3" class="heading-sm px-6 pt-12 xl:pt-20 text-[2.25rem]  md:text-[2.75rem] lg:text-[3.5rem] lg:leading-[4.375rem]">
      {{ title }}
    </h1>
    <p data-scroll data-scroll-speed="2" data-scroll-class="opacity-100" class="mx-auto w-[80%] pb-8 opacity-0 transition-opacity duration-[4s] md:px-2 lg:w-[65%]">
      {{ description }}
    </p>
  `,
};
