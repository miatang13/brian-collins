<template>
  <div class="home">
    <div data-aos="fade-up" data-aos-duration="3000">
      <section id="animation-wrapper">
        <vue-p5 @setup="setup" @draw="draw"> </vue-p5>
      </section>
      <pullQuotes />
    </div>
  </div>
</template>

<script>
import VueP5 from "vue-p5";
import pullQuotes from "@/components/pullQuotes.vue";

/* p5 declarations */
let graphic;

export default {
  name: "Home",
  components: {
    "vue-p5": VueP5,
    pullQuotes,
  },
  created() {},
  methods: {
    setup(sketch) {
      const w = window.innerWidth - 50;
      const h = window.innerHeight - 50;
      sketch.createCanvas(w, h);
    },
    draw(sketch) {
      sketch.background("black");
      /* text styling */
      sketch.textSize(150);
      sketch.fill("white");
      sketch.textFont("soehne-breit");
      sketch.textAlign(sketch.CENTER);

      /* time */
      let second = sketch.second();
      let minute = sketch.minute();
      let hour = sketch.hour();

      sketch.text(sketch.frameCount, sketch.width / 2, sketch.height / 2);

      if (sketch.frameCount > 150) {
        sketch.background("black");
        if (window.innerWidth > 600) {
          sketch.textSize(70);
          sketch.text(
            "Are you trying your best?",
            sketch.width / 2,
            sketch.height / 2
          );
        } else {
          const textSize = window.innerWidth / 15;
          sketch.textSize(textSize);
          sketch.text(
            "Are you \n trying your best?",
            sketch.width / 2,
            sketch.height / 2
          );
        }
      }
    },
    mouseMoved(sketch) {
      sketch.text(
        "Are you trying your best",
        sketch.width / 2,
        sketch.height / 2
      );
    },
  },
  render(h) {
    return h(VueP5, { on: this });
  },
};
</script>

<style lang="scss" scoped>
#place-holder-text {
  font-size: 100px;
  word-wrap: break-word;
}

#pull-quotes-section {
  padding-top: 150px;
}

#pull-quotes-text {
  font-size: 6.5em;
  word-wrap: break-word;
  padding: 50px 0 50px 0;

  background: linear-gradient(
    to right,
    #fff 20%,
    rgb(255, 102, 0) 40%,
    rgb(255, 142, 142) 60%,
    #fff 80%
  );
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
    }
  }
}

#start-pullquote-wrapper {
  margin-top: 10%;
}

@media screen and (max-width: 600px) {
  #pull-quotes-text {
    font-size: 2em;
    padding: 25px 0 25px 0;
  }
}
</style>
