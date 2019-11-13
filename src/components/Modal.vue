<template>
  <transition name="modal">
    <!-- BODY HEIGHT NEEDS TO BE 100%, OVERFLOW HIDDEN -->
    <article class="modal" v-show="value">
      <div>
        <button class="btn btn-open-modal" @click.prevent="close">Close</button>
        <header class="modal-title">
          <h2>Title</h2>
        </header>
      </div>
    </article>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.95);
}
.btn-open-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>