export default {
  template: `
    <header class="p-4 pb-8 md:p-9 md:pb-16 lg:pb-[4.12rem] lg:pt-9 xl:px-[10.31%] max-w-[90rem] mx-auto" data-scroll-section>
      <slot name="header"></slot>
    </header>
    <main>
      <div class="max-w-[90rem] mx-auto">      
        <section class="px-1 pb-8 text-center xl:px-[10.31%]" data-scroll-section>
          <slot name="hero"></slot>
        </section>

        <section class="mb-[6.25rem] px-4 md:px-10 xl:px-[10.31%]" data-scroll-section>
          <slot name="categories"></slot>
        </section>

        <section class="px-4 md:px-10 xl:px-[10.31%]" data-scroll-section>
          <slot name="intro"></slot>
        </section>
      </div>

      <section class="px-4 pb-8 pt-[6.25rem] md:px-10 md:pb-14 md:pt-[7.25rem] xl:px-[10.31%] max-w-[90rem] mx-auto" data-scroll-section>
        <slot name="cta"></slot>
      </section>
    </main>
    <footer class="px-4 pb-8 pt-[6.25rem] md:px-10 md:pb-14 md:pt-[7.25rem] xl:px-[10.31%] max-w-[90rem] mx-auto" data-scroll-section>
      <slot name="footer"></slot>
    </footer>
  `,
};
