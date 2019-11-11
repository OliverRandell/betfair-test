<template>
  <section class="modal">
    <div class="modal-container">
      <header slot="header">Modal header</header>
      <div slot="body">
        <p>This is the body</p>
      </div>
      <button @click="toggleModal()">Close</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal;
    }
  }
};
</script>