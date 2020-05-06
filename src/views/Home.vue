<template>
  <div class="home">
     <div data-aos="fade-up" data-aos-duration="3000">
      <section id = "animation-wrapper">
        <vue-p5 @setup="setup"
                @draw="draw"> </vue-p5>
      </section>
     </div>
 
    <section id = "pull-quotes-section">
      <div id = "start-pullquote-wrapper" data-aos="fade-up" data-aos-duration="2000">
        <h1 id = "pull-quotes-text"> Design, is not a plan for decoration. </h1>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 id = "pull-quotes-text"> Design, is a plan for action. </h1>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 id = "pull-quotes-text">  Design, is about making hope visible. </h1>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 id = "pull-quotes-text">  — Brian Collins </h1>
      </div>

    </section>

    
  </div>
</template>

<script>
// @ is an alias to /src
// import AOS from 'aos'
// import vuep5 from '@/assets/js/home-animation.js'
import VueP5 from "vue-p5";

/* p5 declarations */
let graphic

export default {
  name: "Home",
  components: {
    "vue-p5": VueP5
  },
  head () {
    return {
      title : "Home",
    }
  },
  created() {
  },
  methods: {
    setup(sketch) {
      const w = window.innerWidth - 100
      const h = window.innerHeight - 50
      sketch.createCanvas(w, h);
    },
    draw(sketch) {
      sketch.background('black');
      /* text styling */
      sketch.textSize(150);
      sketch.fill('white');
      sketch.textFont('soehne-breit');
      sketch.textAlign(sketch.CENTER, sketch.CENTER);
      
      /* time */
      let second = sketch.second();
      let minute = sketch.minute();
      let hour = sketch.hour();

      sketch.text(sketch.frameCount, sketch.width/2, sketch.height/2)

      if (sketch.frameCount > 150) {
         sketch.background('black');
         if (window.innerWidth > 600) {
              sketch.textSize(70);
              sketch.text("Are you trying your best?", sketch.width/2, sketch.height/2);
            }
         else {
              const textSize = window.innerWidth / 15;
              sketch.textSize(textSize);
              sketch.text("Are you \n trying your best?", sketch.width/2, sketch.height/2);
          }
      }

      // sketch.ellipse(sketch.mouseX, sketch.mouseY, 55, 55);
      // sketch.text('Brian Collins', sketch.width/2, sketch.height/2)
      /* draw */
      // sketch.text('Current hour:\n' + hour + ":" + minute + ":" + second + "\n *placeholder*", sketch.width/2, sketch.height/2);
    },
    mouseMoved(sketch) {
      sketch.text('Are you trying your best', sketch.width/2, sketch.height/2)
    },
  },
  render(h) {
    return h(VueP5, {on: this});
  }
};
</script>

<style lang="scss" scoped>

#place-holder-text {
  font-size:100px;
  word-wrap:break-word;
}

#pull-quotes-section {
  padding-top:150px;
}

#pull-quotes-text{
  font-size: 6.5em;
  word-wrap:break-word;
  padding: 50px 0 50px 0;

  background: linear-gradient(to right, #FFF 20%, rgb(255, 102, 0) 40%, rgb(255, 142, 142) 60%, #FFF 80%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 2s linear infinite forwards;
  @keyframes shine {
      to {
        background-position: 200% center;
      } }

    // &:hover {
    //   background: linear-gradient(to right, #FFF 20%, rgb(255, 102, 0) 40%, rgb(255, 142, 142) 60%, #FFF 80%);
    //   background-size: 200% auto;

    //   color: #000;
    //   background-clip: text;
    //   -webkit-text-fill-color: transparent;
    //   -webkit-background-clip: text;
    //   -webkit-text-fill-color: transparent;

    //   animation: shine 2s linear infinite;
    //   @keyframes shine {
    //       to {
    //         background-position: 200% center;
    //       } }
    //   }
}

#start-pullquote-wrapper{
  margin-top: 10%
}

#animation-wrapper {
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
}

@media screen and (max-width: 600px){
  #pull-quotes-text{
    font-size: 2em;
    padding: 25px 0 25px 0;
  }
}

</style>