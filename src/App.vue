<template>
  <div id="app">
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <SiteHeader />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <vueper-slides
              fade
              slide-content-outside="top"
              slide-content-outside-class="max-widthed"
              :touchable="false"
              :slide-ratio="0.3"
            >
              <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"></vueper-slide>
            </vueper-slides>
            <!-- <Carousel /> -->
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <section class="spacer text-center">
              <h2 class="section-header">{{ projectName }}</h2>
              <h4 class="section-sub-heading">
                service offering
                <span>for</span> client name
              </h4>
              <p>Para text</p>
              <button class="btn btn-primary">Visit site</button>
            </section>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <!-- <FeatureImg imgSrc="./assets/imgs/img-basketball.jpg"></FeatureImg> -->
            <section class="feature-img">
              <button class="btn btn-open-modal" @click="showModal = true">+</button>
              <figure>
                <img
                  src="https://bovilddb.files.wordpress.com/2010/03/joel_grimes.png"
                  alt="imgAlt"
                />
              </figure>
            </section>
          </div>
        </div>

        <SectionBlurb>
          <template slot="title">
            <h3>{{ blurb.title }}</h3>
          </template>
          <template slot="text">
            <p>{{ blurb.text }}</p>
          </template>
        </SectionBlurb>

        <section class="feature-img">
          <button class="btn btn-open-modal" @click="showModal = true">+</button>
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg"
              alt="imgAlt"
            />
          </figure>
        </section>
        <div class="row">
          <div class="col-12 col-lg-6">
            <section class="feature-img">
              <button class="btn btn-open-modal" @click="showModal = true">+</button>
              <figure>
                <img
                  src="https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg"
                  alt="imgAlt"
                />
              </figure>
            </section>
          </div>
          <div class="col-12 col-lg-6">
            <section class="feature-img">
              <button class="btn btn-open-modal" @click="showModal = true">+</button>
              <figure>
                <img
                  src="https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg"
                  alt="imgAlt"
                />
              </figure>
            </section>
          </div>
        </div>
      </div>

      <BreakoutArea />

      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="section-header">More layouts</h2>
          </div>
        </div>

        <SectionBlurb>
          <template slot="title">
            <h3>{{ blurb.title }}</h3>
          </template>
          <template slot="text">
            <p>{{ blurb.text }}</p>
          </template>
        </SectionBlurb>

        <div class="row">
          <div class="col-12 col-lg-2">
            <figcaption class="img-caption">
              <h4>Image Caption</h4>
              <p>Text</p>
            </figcaption>
          </div>
          <div class="col-12 col-lg-10">
            <section class="feature-img">
              <button class="btn btn-open-modal" @click="showModal = true">+</button>
              <figure>
                <img
                  src="https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg"
                  alt="imgAlt"
                />
              </figure>
            </section>
          </div>
        </div>

        <div class="row spacer">
          <div class="col-12 col-lg-2">
            <figcaption class="img-caption" v-for="(item, index) in imgCaption" :key="index">
              <h4>{{ item.title }}</h4>
              <p>{{ item.text }}</p>
            </figcaption>
          </div>
          <div class="col-12 col-lg-10">
            <div class="row">
              <div class="col-12 col-lg-6">
                <section class="feature-img">
                  <button class="btn btn-open-modal" @click="showModal = true">+</button>
                  <figure>
                    <img
                      src="https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg"
                      alt="imgAlt"
                    />
                  </figure>
                </section>
              </div>
              <div class="col-12 col-lg-6">
                <section class="feature-img">
                  <button class="btn btn-open-modal" @click="showModal = true">+</button>
                  <figure>
                    <img
                      src="https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg"
                      alt="imgAlt"
                    />
                  </figure>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <MoreProjects />
      <footer class="site-footer">&copy; Deloitte Digital 2013</footer>
    </main>

    <Modal v-model="showModal"></Modal>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader";
import { VueperSlides, VueperSlide } from "vueperslides";
// import Carousel from "./components/Carousel";
import BreakoutArea from "./components/BreakoutArea";
import SectionBlurb from "./components/SectionBlurb";
import Modal from "./components/Modal";
import MoreProjects from "./components/MoreProjects";

export default {
  name: "app",
  components: {
    SiteHeader,
    VueperSlides,
    VueperSlide,
    //Carousel,
    BreakoutArea,
    MoreProjects,
    SectionBlurb,
    Modal
  },
  data() {
    return {
      projectName: "Project Name",
      slides: [
        {
          title: "Feature Image or Slider",
          content: "Slide content.",
          image: "https://bovilddb.files.wordpress.com/2010/03/joel_grimes.png"
        },
        {
          title: "Feature Image or Slider",
          content: "Slide content.",
          image:
            "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        },
        {
          title: "Feature Image or Slider",
          content: "Slide content.",
          image:
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        }
      ],
      showModal: false,
      blurb: {
        title: "Blurb",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      imgCaption: [
        {
          title: "Image Caption",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          title: "Image Caption",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
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
