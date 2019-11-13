<template>
  <section class="feature-img">
    <button class="btn btn-open-modal" @click="showModal = true">Show Modal</button>
    <figure>
      <img src="https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg" :alt="imgAlt" />
    </figure>
  </section>
  
</template>

<script>
export default {
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal;
    }
  }
}
</script>