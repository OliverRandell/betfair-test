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
            ></Carousel> -->
            <section>
              <h2>Project name</h2>
              <h4>service offering <span>for</span> client name</h4>
              <p>Para text</p>
              <button class="btn">Visit site</button>
            </section>
            <section class="feature-img">
              <img src="" alt="">
            </section>
            <section class="section-blurb">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <section class="feature-img">
                    <img src="" alt="">
                  </section>
                </div>
                <div class="col-12 col-lg-6">
                  <section class="feature-img">
                    <img src="" alt="">
                  </section>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>

      <BreakoutArea />

    </main>

  </div>
</template>

<script>
import BreakoutArea from "./components/BreakoutArea"
//import Carousel from "./components/Carousel"

export default {
  name: 'app',
  components: {
    BreakoutArea
    //Carousel
  }
}
</script>

<style lang="scss">
    @import './assets/sass/app.scss';
</style>
