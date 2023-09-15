export default {
  setup() {
    const title = "I’m Amy, and I’d love to work on your next project";
    const description =
      "I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!";

    return {
      title,
      description,
    };
  },
  template: `
    <div class="items-center md:m-auto md:flex md:max-w-[64rem] md:max-w-none md:gap-x-20 xl:justify-start">
      <div class="mb-10 block md:mb-0 md:flex-1">
        <img
          class="xl:h-[26rem] xl:w-[26rem]"
          src="./assets/image-amy.webp"
          alt="image"
        />
      </div>
      <div class="md:flex-1">
        <div class="text-center md:text-left">
          <h2
            class="mb-6 text-[1.625rem] font-bold text-black md:text-[2rem] md:leading-9 xl:text-[2.25rem] xl:leading-normal"
          >
            {{ title }}
          </h2>
          <p class="mb-6">
            {{ description }}
          </p>
          <button-primary class="bttn-light-red">
            Free Consultation
          </button-primary>
        </div>
      </div>
    </div>
  `,
};
