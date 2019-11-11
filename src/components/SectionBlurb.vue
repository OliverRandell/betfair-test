<template>
  <section class="section-blurb">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  name: "SectionBlurb",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: "Title",
      text: "test"
    };
  }
};
</script>