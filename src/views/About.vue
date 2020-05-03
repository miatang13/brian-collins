<template>
  <div class="about">
    <div data-aos="fade-right" data-aos-duration="2000">
      <section id = "title-wrapper">
        <h1 id = "title-text"> Who he is. </h1>
        <p>  One of the five  American Masters of Design, ever. </p>
      </section>
    </div>
    
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
      <section id = "portrait-wrapper">
        <img src = '../assets/photos/portrait/bc_portrait_02.jpg' width = "100%">
      </section>
    </div>

    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
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

   <!--
    <section class = "video-wrapper">
      <iframe width="800px" height="500px" src="https://www.youtube.com/embed/bjSEofi5JoY"> </iframe>
    </section> -->

  </div>
</template>

<script>
import AOS from 'aos'

export default {
    name: "About",
    created () {
        AOS.init()
      },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_colors.scss';
@import '@/assets/styles/aos.scss';

// .about {
//   background-color:white;
// }

.body-text-wrapper {
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
}

.video-wrapper {
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
}

// #title-wrapper {
//   animation: comeIn 3s ease-in-out 0s;
// }

@keyframes comeIn { 
    from { 
        opacity: 0%;
    } 
    to {
        opacity: 100%;
        }
    }

</style>
