<template>
  <div class="timeline">
  <div data-aos="fade-right" data-aos-duration="2000">
    <section>
        <h1 id = "title-text"> Where he has lead. </h1>
        <p> "I still love Design as much as when I first heard of the word." </p>
    </section>
  </div>

  <div data-aos="flip-up" data-aos-duration="2000">
        <section id = "mapWrapper">
            <TimelineMap :showAll = "showAll" 
                        :checkClass = "checkClass()"
                        />
        </section>
  </div>

  <!-- <div data-aos="flip-up" data-aos-duration="2000"> -->
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
    <!-- </div> -->

    <section id = "timelineWrapper">
        <div data-aos="fade-down" data-aos-duration="3000">
            <section> 
                <TimelineBlock :givenContent = "[{ 
                                                company: 'Duffy and Partners',
                                                job: 'Design, Business Development',
                                                year: '1990 – 1992'
                                            }]"
                            :location = "'middle'"
                        />
            </section>
        </div>

        <div data-aos="fade-right" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                                company: 'Collins Design',
                                                job: 'Principal',
                                                year: '1992 – 1995'
                                            }]"
                            :location = "'left'"
                        />
            </section>
        </div>

        <div data-aos="fade-left" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                            company: 'Foote, Cone & Belding ',
                                            job: 'Creative Director',
                                            year: '1995 – 1998'
                                        }]"
                        :location = "'middle'"
                        />
            </section>
        </div>

        <div data-aos="fade-right" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                            company: 'Ogilvy',
                                            job: 'Chief Creative Director',
                                            year: '1998 – 2008'
                                        }]"
                        :location = "'right'"
                        />
            </section> 
        </div>

        <div data-aos="fade-left" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                        company: 'School of Visual Arts',
                                        job: 'Professor',
                                        year: '2001 – Present'
                                    }]"
                    :location = "'left'"
                    />
            </section>
        </div>

        <div data-aos = "fade-up" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                        company: 'The One Club for Creativity',
                                        job: 'Officer',
                                        year: '2002 – Present'
                                    }]"
                    :location = "'right'"
                    />
            </section>
        </div>

         <div data-aos = "fade-down" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                        company: 'COLLINS',
                                        job: 'Co-Founder / Chief Creative Officer',
                                        year: '2008 – Present'
                                    }]"
                    :location = "'middle'"
                    />
            </section>
        </div>


    </section>
  </div>
</template>

<script>
import TimelineMap from '@/components/timelineMap.vue'
import MultiRadioButton from '@/components/multiRadioButton.vue'
import TimelineBlock from '@/components/timelineBlock.vue'

// import $ from "query"
import AOS from "aos"

export default {
    name: "Timeline",
    components: {
        TimelineMap,
        MultiRadioButton,
        TimelineBlock,
    },
    created () {
        AOS.init()
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
@import '@/assets/styles/_colors.scss';
@import '@/assets/styles/aos.scss';


// .timeline{
//     animation: comeIn 3s ease-in-out 0s;
// }

#mapWrapper {
    padding-top: 0;
    padding-bottom:0; /* so the button is directly under */
}

#buttonWrapper {
    float: right;
    margin-right:20%;
}

#timelineWrapper {
    padding-top: 200px;
}

@keyframes comeIn { 
    from { 
        opacity: 0%;
    } 
    to {
        opacity: 100%;
        }
    }

</style>