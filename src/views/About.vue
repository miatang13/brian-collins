<template>
  <div class="about">

    <div data-aos="fade-right" data-aos-duration="2000">
      <section id = "title-wrapper">
        <h1 id = "title-text"> Who he is. </h1>
        <p>  One of the five  American Masters of Design, ever.</p>
      </section>
    </div>
    
    <div data-aos="flip-up" data-aos-duration="2000" data-aos-delay="300">
      <section>
      <div class = "portrait-wrapper">
        <!-- <img :src="`${publicPath}bc_portrait_01.jpg`" > -->
        <img src = '../assets/photos/portrait/bc_portrait_02.jpg' width = "100%">
      </div>
      </section>
    </div>

    <div data-aos="fade-down" data-aos-duration="2000" data-aos-delay="300">
      <section class = "body-text-wrapper">
        <p id = "bio-body-text"> 
            He is a designer, a creative director,  and an educator. <br> 
            Brian Collins was born in Lexington, Massachusetts in 1959, where he fell in 
            love with typography, illustration, and installations at a young age. 
            He studied at the Massachusetts College of Art and Design and received 
            his BFA in 1982, later receiving  the college’s Distinguished Alumnus Award in 2004. 
            He also studied at Parsons School of Design in New York City, where he 
            founded his brand and experience design firm, COLLINS. The firm was named 
            by Forbes as one of the companies transforming the future  of brand building.  
          </p>
      </section>
    </div>

    <!-- <div data-aos="fade-down" data-aos-duration="2000" data-aos-delay="300">
      <section>
      <div class = "portrait-wrapper">
        <img src = '../assets/photos/portrait/bc_portrait_01.jpg' width = "100%">
      </div>
      </section>
    </div> -->

   <!--
    <section class = "video-wrapper">
      <iframe width="800px" height="500px" src="https://www.youtube.com/embed/bjSEofi5JoY"> </iframe>
    </section> -->

  </div>
</template>

<!--<script src="../assets/js/three.min.js"></script>
<script src="../assets/js/gsap.min.js"></script>-->

<script>
// import AOS from 'aos'
// import TweenMax from "gsap"
// import * as Three from 'three'
// import hoverEffect from 'hover-effect'

export default {
    name: "About",
    components: {
    },
    created () {
        // AOS.init();
        // hoverEffect.init();
      },
    // data() {
    //   return {
    //     publicPath: process.env.BASE_URL,
    //     hoverDistort: null,
    //     image1: '{publicPath}bc_portrait_02.jpg',
    //     image2: '{publicPath}bc_portrait_01.jpg',
    //     displacementImage: "`${publicPath}distortion.jpg`"
    //   }
    // },
  //   methods: { 
  //     hover: function() {
  //      this.hoverDistort = new hoverEffect({
  //           parent: document.getElementById('portrait-wrapper'),
  //           intensity: 0.3, 
  //           image1: this.image1,
  //           image2: this.image2,
  //           displacementImage: this.displacementImage });
  //  }},
  //   mounted(){
  //   this.hover();
  // }
}

</script>

<style lang="scss" scoped>

.body-text-wrapper {
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  // max-width: 70%;
}

.video-wrapper {
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
}

.portrait-wrapper {
    // height: 500px;
    // margin-left: 400px;
 }

@keyframes comeIn { 
    from { 
        opacity: 0%;
    } 
    to {
        opacity: 100%;
        }
    }

@media screen and (max-width: 600px) {
  .body-text-wrapper {
    max-width: 100%;
  }

  .portrait-wrapper{
    margin-left: 0px;
  }
}

</style>
