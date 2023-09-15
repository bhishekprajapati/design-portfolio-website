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
    <h1 class="heading-sm px-6 pb-4 text-[2.25rem] md:pb-7 md:text-[2.75rem] lg:pb-6 lg:text-[3.5rem] lg:leading-[4.375rem]">
      {{ title }}
    </h1>
    <p class="mx-auto w-[80%] pb-8 md:px-2 lg:w-[65%]">
      {{ description }}
    </p>
  `,
};
