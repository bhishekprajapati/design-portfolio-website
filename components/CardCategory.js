export default {
  props: ["title", "src", "imgStyles"],
  template: `
    <article class="category-card">
      <img
        class="category-card-img"
        :class="imgStyles"
        :src="src"
        alt=""
      />
      <span
        ><strong class="category-card-title"
          >{{ title }}</strong
        ></span
      >
    </article>
  `,
};
