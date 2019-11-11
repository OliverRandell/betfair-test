<template>
  <div id="app">
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <header class="site-header">
              <i>d</i>
              <h1 class="site-branding">Project name</h1>
            </header>
            <!-- <Carousel
              :starting-image="2"
              :images="images"
              :auto-slide-interval="1500"
              :show-progress-bar="true"
            ></Carousel>-->
            <section>
              <h2>Project name</h2>
              <h4>
                service offering
                <span>for</span> client name
              </h4>
              <p>Para text</p>
              <button class="btn">Visit site</button>
            </section>
            <section class="feature-img">
              <img src alt />
            </section>
            <!-- <SectionBlurb :title="title" :text="text"></SectionBlurb> -->
            <section class="section-blurb">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <section class="feature-img">
                    <img src alt />
                  </section>
                </div>
                <div class="col-12 col-lg-6">
                  <section class="feature-img">
                    <img src alt />
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <BreakoutArea />

      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="section-header">More layouts</h2>
            <section class="img-wrapper">
              <button @click="toggleModal()">Close</button>
            </section>
          </div>
        </div>
      </div>
    </main>
    <transition name="modal">
      <Modal v-if="showModal" @toggle="toggleModal()">
        <header slot="header">Modal header</header>
        <div slot="body">
          <p>This is the body</p>
        </div>
        <button @click="toggleModal()">Close</button>
      </Modal>
    </transition>
  </div>
</template>

<script>
import BreakoutArea from "./components/BreakoutArea";
//import SectionBlurb from "./components/SectionBlurb";
import Modal from "./components/Modal";
//import Carousel from "./components/Carousel"

export default {
  name: "app",
  components: {
    BreakoutArea,
    //SectionBlurb,
    Modal
    //Carousel
  },
  data() {
    return {
      imgSrc: "http://placekitten.com/200/300",
      showModal: false
    };
  },
  mmethods: {
    toggleModal: function() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/sass/app.scss";
</style>
