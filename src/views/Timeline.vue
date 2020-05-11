<template>
  <div class="timeline">
  <div data-aos="fade-right" data-aos-duration="2000">
    <section>
        <h1 id = "title-text"> Where he has lead. </h1>
        <p> "I still love Design as much as when I first heard of the word." </p>
    </section>

  <div id = "buttonWrapper">
        <!-- <button @click="changeView" id = "view-option">  <span> {{ buttonMessage }} </span></button> -->
        <MultiRadioButton :defaultState ="buttonState"
                          :states = "[
                              {
                                text: 'Guess',
                                color: 'nominal',
                                name: 'Low'
                              },
                              {
                                text: 'Show All',
                                color: 'caution',
                                name: 'Medium'
                              },
                            ]" 
                          :callback = "buttonUpdated"
                          :getState = "getState"
                          @click="changeView"/>
    </div>
    </div>

  <div data-aos="flip-up" data-aos-duration="2000">
        <section id = "mapWrapper">
            <TimelineMap :showAll = "showAll" 
                        :checkClass = "checkClass()"
                        />
        </section>
  </div>

  <TimelineBlockS />
<!-- 
 <section>
  <tabs>
    <tab title="Vue">
      This is Vue
    </tab>
    <tab title="React">
      This is React
    </tab>
    <tab title="Svelte">
      This is Svelte
    </tab>
  </tabs>
  </section> -->

  </div>
</template>

<script>
import TimelineMap from '@/components/timelineMap.vue'
import MultiRadioButton from '@/components/multiRadioButton.vue'
import TimelineBlockS from '@/components/timelineBlockS.vue'
// import { Tabs, Tab } from 'vue-slim-tabs'

export default {
    name: "Timeline",
    components: {
        TimelineMap,
        MultiRadioButton,
        TimelineBlockS,
        // Tabs, Tab
    },
    data () {
        return {
            showAll: false,
            buttonMessage: "Let Me Guess",
            buttonState: "Low"
        }
    },
    methods: {
        changeMessage() {
        if (this.showAll) {
            this.buttonMessage = "Show All"
        } else {
            this.buttonMessage = "Let Me Guess"
        }
        },
        changeView (){
            this.showAll = !this.showAll 
            this.changeMessage()
        },
        checkClass () {
            if (this.showAll) {
                return "can-be-active"
            } else {
                return "place-holder"
            }
        },
        buttonUpdated(newState){
            this.buttonState = newState;
            this.showAll = !this.showAll 
            this.changeMessage()
            // console.log(this.buttonState)
        },
        getState(){
            /* console.log("hey i'm asking for state") */
            return this.buttonState
        }
    }  
}
</script>

<style lang="scss" scoped>
@import '../../node_modules/vue-slim-tabs/themes/default.css';

#mapWrapper {
    padding-top: 0;
    padding-bottom:0; /* so the button is directly under */
}

#buttonWrapper {
    // float: right;
    // margin-right:20%;
    // animation: comeIn 2s linear forwards;
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
    #buttonWrapper {
        // padding-top: 130px;
    }
    #mapWrapper {
        padding-top: 110px;
    }

    #timelineWrapper {
        padding-top: 350px;
    }

}

</style>