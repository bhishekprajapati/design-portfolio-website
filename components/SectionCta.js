export default {
  template: `
    <div class="transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]">
      <div class="mb-10 rounded-xl bg-black px-6 py-12 text-center md:p-16 xl:flex xl:gap-x-[18%]">
        <div class="xl:flex-1 xl:text-left">
          <h5 class="heading-sm text-[1.65rem] text-light-cream md:text-[2rem]">
            Book a call with me
          </h5>
          <p class="text-[1rem] text-light-cream md:text-[1.25rem] hidden">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <div class="">
          <button-primary class="bttn-light-red">Free Consultation</button-primary>
        </div>
      </div>
    </div>
  `,
};
