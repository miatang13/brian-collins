<template>
  <div class="root">
    <div class="accordion">
      <div class="accordion-header" @click="toggleAccordion">
        <h2>{{ data.title }}</h2>
        <p>{{ data.subtitle }}</p>
      </div>

      <div class="accordion-body" v-if="!isClosed">
        <div v-if="data.hasImages">
          <div class="image__wrapper" v-for="img in data.images" :key="img">
            <img :src="getImgUrl(img)" width="100%" />
          </div>
        </div>

        <div v-if="data.hasVideo" class="video-wrapper">
          <iframe
            :src="data.videoLink"
            width="640"
            height="360"
            allowfullscreen
          ></iframe>
        </div>

        <div v-if="data.hasParagraph">
          <div class="essay-wrapper">
            <p>
              First, he is undoubtedly a design icon, a design master of the
              century. His work in the field of branding has defined and
              redefined trends, styles, and encouraged further exploration and
              creativity. <br /><br />
              Secondly, and most importantly, he greatly values knowledge of
              many kinds. He encourages people to be great designers with a
              secret super power. “We expect everyone to have a second secret
              ‘superpower,’ so to speak. Hybrids.” When looking at candidates,
              he said that he “love to hire great people who are also remarkable
              at something else — it could be coding or writing, but it could
              just as easily be cooking, science fiction, scuba diving, biking,
              singing, painting, Taekwondo...anything. I believe those
              collisions expand us.” <br />
              <br />
              This truly resonates with me because I have a hard time defining
              myself with one word, a ____ designer. <br />
              <br />
              I know I am not just that. <br /><br />
              I want to be more, and I firmly believe that by being more, I can
              be a better designer curating better designs. <br /><br />
              I will end with my favorite quote from him that talks what design
              means to him. <br />
              <br />

              “Look, design is not about what we do. Design, for us, is about
              what we encourage and enable others to do. For us, it’s about
              building tools, environments and communications that help other
              people make meaningful things possible. <br /><br />

              "Design should enable people to do whatever they need or want to
              do with their time. Time itself is the most valuable asset anyone
              has. Money, objects — you can get all of that back. Time is
              irreplaceable. So, we work to fill and inform the time people give
              us with clarity, understanding, support or joy.<br /><br />

              "The way I see it, it’s a moral transaction. Did that client get
              your very best in that transaction? Did their customers get the
              finest you can do? Did you give them the best you had? Or did you
              fizzle out, or give up when it got difficult?”
            </p>
          </div>
        </div>

        <button @click="toggleAccordion">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    data: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
      hasVideo: {
        type: Boolean,
        required: false,
      },
      hasImages: {
        type: Boolean,
        required: false,
      },
      hasParagraph: {
        type: Boolean,
        required: false,
      },
      videoLink: {
        type: String,
        required: false,
      },
      images: {
        type: Array,
        required: false,
      },
      essay: {
        type: String,
        required: false,
      },
    },
  },
  data() {
    return {
      isClosed: true,
    };
  },

  methods: {
    toggleAccordion() {
      this.isClosed = !this.isClosed;
      console.log("clicked");
    },
    getImgUrl(img) {
      return require("../assets/photos/" + img);
    },
  },
};
</script>

<style scoped>
button {
  font-family: "soehne";
  background: white;
  border: none;
  border-radius: 25%;
  padding: 1em;
  margin-top: 1em;
}

.accordian-header {
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 20px;
}

.accordian-body {
  padding: 0;
  overflow: hidden;
  transition: 2s ease-in-out;
}

.accordion-body {
  height: 100%;
}

.video-wrapper {
  margin-left: auto;
  margin-right: auto;
}

.essay-wrapper {
  max-width: 60%;
}

@media screen and (max-width: 600px) {
  .essay-wrapper {
    max-width: 100%;
  }
}
</style>
