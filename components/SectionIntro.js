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
    <div  class="items-center md:m-auto md:flex md:max-w-[64rem] md:max-w-none md:gap-x-20 xl:justify-start">
      <div class="mb-10 block md:mb-0 md:flex-1">
        <img
          data-scroll data-scroll-speed="1.8"
          data-scroll-class="opacity-100" data-scroll-repeat="true"
          class="xl:h-[26rem] xl:w-[26rem] opacity-0 transition-opacity duration-[2s]"
          src="./assets/image-amy.webp"
          alt="image"
        />
      </div>
      <div class="md:flex-1">
        <div class="text-center md:text-left">
          <h2
            data-scroll data-scroll-speed="1.6" data-scroll-delay="1.5" data-scroll-class="opacity-100" data-scroll-repeat="true"
            class="opacity-0 transition-opacity duration-[5s] mb-6 text-[1.625rem] font-bold text-black md:text-[2rem] md:leading-9 xl:text-[2.25rem] xl:leading-normal"
          >
            {{ title }}
          </h2>
          <p class="mb-6 leading-loose opacity-0 transition-opacity duration-[2s]" data-scroll data-scroll-speed="1" data-scroll-class="opacity-100" data-scroll-repeat="true">
            {{ description }}
          </p>
          <button-primary
            data-scroll-id="intro-section-bttn" data-scroll-call="changeBodyBgc"
            class="bttn-light-red opacity-0 transition-opacity duration-[4s]" data-scroll data-scroll-speed="1.5" data-scroll-class="opacity-100" data-scroll-repeat="true">
            Free Consultation
          </button-primary>
        </div>
      </div>
    </div>
  `,
};
