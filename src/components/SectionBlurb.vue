<template>
  <section class="section-blurb">
    <div class="col col-lg-6 offset-lg-3">
      <h3>
        <slot name="title"></slot>
      </h3>
      <p>
        <slot name="text"></slot>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionBlurb",
  data() {
    return {
      title: "Blurb",
      text: "test"
    };
  }
};
</script>


<style lang="scss" scoped>
@import "./src/assets/sass/vue.scss";
.section-blurb {
  @include make-row();
  @include spacer(1rem);
}
p {
  color: $grey;
}
</style>