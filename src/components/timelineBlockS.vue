<template>
  <div class="timelineBlockS">
    <section id="timelineWrapper">
      <div>
        <section v-for="data in Data" :key="data.length">
          <TimelineBlock
            :data-aos="data.dir"
            data-aos-duration="3000"
            :data="data"
          />
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import TimelineBlock from "@/components/timelineBlock.vue";

export default {
  name: "TimelineBlockS",
  components: {
    TimelineBlock,
  },

  data() {
    return {
      Data: [
        {
          givenContent: {
            company: "Duffy and Partners",
            job: "Design, Business Development",
            year: "1990 – 1992",
          },
          location: "middle",
          dir: "fade-up",
        },
        {
          givenContent: {
            company: "Collins Design",
            job: "Principal",
            year: "1992 – 1995",
          },
          location: "left",
          dir: "fade-right",
        },
        {
          givenContent: {
            company: "Foote, Cone & Belding",
            job: "Creative Director",
            year: "1995 – 1998",
          },
          location: "middle",
          dir: "fade-left",
        },
        {
          givenContent: {
            company: "Ogilvy",
            job: "Chief Creative Director",
            year: "1998 – 2008",
          },
          location: "right",
          dir: "fade-right",
        },
        {
          givenContent: {
            company: "School of Visual Arts",
            job: "Professor",
            year: "2001 – Present",
          },
          location: "left",
          dir: "fade-left",
        },
        {
          givenContent: {
            company: "The One Club for Creativity",
            job: "Officer",
            year: "2002 – Present",
          },
          location: "right",
          dir: "fade-up",
        },
        {
          givenContent: {
            company: "COLLINS",
            job: "Co-Founder / Chief Creative Officer",
            year: "2008 – Present",
          },
          location: "middle",
          dir: "fade-down",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#timelineWrapper {
  padding-top: 200px;
}

@media screen and (max-width: 600px) {
  #timelineWrapper {
    padding-top: 350px;
  }
}
</style>
