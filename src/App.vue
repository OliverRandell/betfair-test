<template>
  <div id="app">
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <SiteHeader />
            <!-- <Carousel
              :starting-image="2"
              :images="images"
              :auto-slide-interval="1500"
              :show-progress-bar="true"
            ></Carousel>--> 
            <section class="text-center">
              <h2 class="section-header">Project name</h2>
              <h4 class="section-sub-heading">
                service offering
                <span>for</span> client name
              </h4>
              <p>Para text</p>
              <button class="btn btn-primary">Visit site</button>
            </section>

            <section class="feature-img">
              <button class="btn btn-open-modal" @click="showModal = true">Show Modal</button>
              <figure>
                <img :src="imgSrc" :alt="imgAlt" />
              </figure>
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
              <!-- <button @click="toggleModal()">Close</button> -->
            </section>
          </div>
        </div>

      </div>
      <hr>

      <MoreProjects />
      <footer class="site-footer">&copy; Deloitte Digital 2013</footer>
    </main>

    
    <Modal v-model="showModal"></Modal>
    
    
    
    
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader";
import BreakoutArea from "./components/BreakoutArea";
//import SectionBlurb from "./components/SectionBlurb";
import Modal from "./components/Modal";
import MoreProjects from "./components/MoreProjects";
//import Carousel from "./components/Carousel"

export default {
  name: "app",
  components: {
    SiteHeader,
    BreakoutArea,
    MoreProjects,
    //SectionBlurb,
    Modal
    //Carousel
  },
  data() {
    return {
      imgSrc: "./assets/imgs/img-basketball.jpg",
      imgAlt: "Basketball photo",
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

<style lang="scss">
@import "./assets/sass/app.scss";
</style>
