<template>
  <transition name="modal">
    <article class="modal" v-show="value">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <button class="btn btn-open-modal" @click.prevent="close">Close</button>
            <header class="modal-title">
              <h2>Title</h2>
            </header>
          </div>
        </div>
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
      this.$emit('input', !this.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.75);
}
</style>