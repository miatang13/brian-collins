<template>
  <div class="designhero">
    <div data-aos="fade-right" data-aos-duration="2000">
      <section id="title-wrapper">
        <h1 id="title-text">Design Hero</h1>
        <p>
          A semester’s worth of work celebrating Brian Collins — my design hero.
        </p>
      </section>
    </div>

    <div class="accordions" v-for="data in Datas" :key="data">
      <div class="indiv__accordion" data-aos="fade-up" data-aos-duration="2000">
        <Accordion :data="data" />
      </div>
    </div>

    <div data-aos="fade-up" data-aos-duration="2000">
      <div class="contact">
        <p>My Contact</p>
        <a href="https://www.linkedin.com/in/mia-tang-116221190/"> LinkedIn </a>
        <br />
        <a href="mailto:miatang13@gmail.com"> Email </a>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "../components/accordion.vue";
export default {
  name: "MyWork",
  components: {
    Accordion,
  },
  data() {
    return {
      Datas: {
        posterData: {
          title: "Informational Poster",
          subtitle:
            "Poster dedicated to showcase his accomplishments and work within a limited canvas.",
          images: [
            "mywork/poster/poster_2.png",
            "mywork/poster/45-wavy.png",
            "mywork/poster/45-rolled.png",
          ],
          hasImages: true,
        },
        bookletData: {
          title: "Booklet",
          hasImages: true,
          subtitle:
            "A 14 pages booklet displaying his work with self-written text.",
          images: [
            "mywork/booklet/45_1.png",
            "mywork/booklet/45_3.png",
            "mywork/booklet/45_2.png",
            "mywork/booklet/cover&back.png",
          ],
        },
        mobileWebData: {
          title: "Mobile + Web",
          hasVideo: true,
          hasImages: true,
          subtitle:
            "Designing an informational mobile experience about him & Implementing a functional website coded with Vue.js, html, and SCSS.",
          images: ["mywork/web_mockup.png"],
          videoLink: "https://player.vimeo.com/video/414320248",
        },

        videoData: {
          title: "Video",
          hasVideo: true,
          subtitle:
            "A one minute video visualizing the story of how he started his design journey.",
          videoLink: "https://player.vimeo.com/video/419170346",
        },

        paragraphData: {
          title: "Essay",
          hasParagraph: true,
          subtitle: "Short essay on why Brian Collins is my design hero.",
        },
      },
    };
  },
};
</script>

<style scoped>
.contact {
  color: white;
  padding-top: 50px;
}

.indiv__accordion {
  padding-bottom: 3vw;
  margin-bottom: 4vw;
  border-bottom: 1px dashed white;
}
</style>
