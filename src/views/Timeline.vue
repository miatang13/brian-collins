<template>
  <div class="timeline">
    <div data-aos="fade-right" data-aos-duration="2000">
      <section>
        <h1 id="title-text">Where he has lead.</h1>
        <p>"I still love Design as much as when I first heard of the word."</p>
      </section>

      <div id="buttonWrapper">
        <MultiRadioButton
          :defaultState="buttonState"
          :states="[
            {
              text: 'Guess',
              color: 'nominal',
              name: 'Low',
            },
            {
              text: 'Show All',
              color: 'caution',
              name: 'Medium',
            },
          ]"
          :callback="buttonUpdated"
          :getState="getState"
          @click="changeView"
        />
      </div>
    </div>

    <div data-aos="flip-up" data-aos-duration="2000">
      <section id="mapWrapper">
        <TimelineMap :showAll="showAll" :checkClass="checkClass()" />
      </section>
    </div>

    <TimelineBlockS />
  </div>
</template>

<script>
import TimelineMap from "@/components/timelineMap.vue";
import MultiRadioButton from "@/components/multiRadioButton.vue";
import TimelineBlockS from "@/components/timelineBlockS.vue";

export default {
  name: "Timeline",
  components: {
    TimelineMap,
    MultiRadioButton,
    TimelineBlockS,
  },
  data() {
    return {
      showAll: false,
      buttonMessage: "Let Me Guess",
      buttonState: "Low",
    };
  },
  methods: {
    changeMessage() {
      if (this.showAll) {
        this.buttonMessage = "Show All";
      } else {
        this.buttonMessage = "Let Me Guess";
      }
    },
    changeView() {
      this.showAll = !this.showAll;
      this.changeMessage();
    },
    checkClass() {
      if (this.showAll) {
        return "can-be-active";
      } else {
        return "place-holder";
      }
    },
    buttonUpdated(newState) {
      this.buttonState = newState;
      this.showAll = !this.showAll;
      this.changeMessage();
    },
    getState() {
      return this.buttonState;
    },
  },
};
</script>

<style lang="scss" scoped>
#mapWrapper {
  padding-top: 0;
  padding-bottom: 0; /* so the button is directly under */
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
  #mapWrapper {
    padding-top: 110px;
  }

  #timelineWrapper {
    padding-top: 350px;
  }
}
</style>
