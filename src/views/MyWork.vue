<template>
    <div class = "designhero">
        <div data-aos="fade-right" data-aos-duration="2000">
            <section id = "title-wrapper">
                <h1 id = "title-text"> Design Hero </h1>
                <p> Five months of work to celebrate the design hero — Brian Collins — I look up to. </p>     
            </section>
        </div>

    <div data-aos="fade-up" data-aos-duration="2000">
        <div class = "accordian" v-bind:class = "posterClasses" >
            <div class = "accordian-header" @click = "togglePoster">
                <h2> Informational Poster </h2>
                <p> A poster dedicated to showcase his accomplishments and work within a limited canvas. </p>
            </div>

            <div class = "accordian-body">
                <img src = '@/assets/photos/mywork/poster/poster_2.png' width = "100%">
                <img src = '@/assets/photos/mywork/poster/45-wavy.png' width = "100%">
                <img src = '@/assets/photos/mywork/poster/45-rolled.png' width = "100%">
                <p> 19.25(w) x 31.75(h)  </p>
            </div>
        </div>

        <div class = "accordian" v-bind:class = "bookletClasses" >
            <div class = "accordian-header" @click = "toggleBooklet">
                <h2> Booklet</h2>
                <p> A 14 pages booklet displaying his work with self-written text. </p>
            </div>

            <div class = "accordian-body">

                <div class = 'accordian' v-bind:class = "bookletselectedClasses"> 
                    <div class = "accordian-header" @click = "toggleBookletSelected">
                        <h3> &#8600; View Selected Spreads </h3>
                    </div> 

                    <div class = "accordian-body">
                        <img src = '@/assets/photos/mywork/booklet/cover.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/45_1.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/45_3.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/45_2.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/cover&back.png' width = "100%">
                       
                    </div>
                </div> <!-- inner accordian for all spreads -->

                    <div class = 'accordian' v-bind:class = "bookletspreadClasses"> 
                    <div class = "accordian-header" @click = "toggleBookletSpread">
                        <h3> &#8600; View All Spreads </h3>
                    </div> 

                    <div class = "accordian-body">
                        <img src = '@/assets/photos/mywork/booklet/cover&back_2.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/sp_1.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/sp_2.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/sp_3.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/sp_4.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/sp_5.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/sp_6.png' width = "100%">
                        <img src = '@/assets/photos/mywork/booklet/sp_7.png' width = "100%">
                    </div>
                </div> <!-- inner accordian for all spreads -->   

            </div> <!-- outer accordian body -->
        </div>

        <div class = "accordian" v-bind:class = "videoClasses" >
            <div class = "accordian-header" @click = "toggleVideo">
                <h2> Video </h2>
                <p> A one minute video visualizing the story of how he 
                    started his design journey.</p>
            </div>

            <div class = "accordian-body">
                <div id = "video-wrapper">
                    <iframe src="https://player.vimeo.com/video/417075228" width = "640" height = "360" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class = "accrodian" v-bind:class = "mWClasses" >
            <div class = "accordian-header" @click = "toggleMobileWeb">
                <h2> Mobile + Web </h2>
                <p> 1. Designing an informational mobile experience about him. <br>  2. Implementing a functional website coded with Vue.js, html, and SCSS. </p>
            </div>

            <div class = "accordian-body">
                <iframe src="https://player.vimeo.com/video/414320248" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                 <img style = "padding-top: 30px;" src = '@/assets/photos/mywork/web_mockup.png' width = "100%">
                 <router-link to = "/" style = "color: grey;">  Enter Web Experience &#8600; </router-link>
            </div>
        </div>
    </div> <!-- aos transition container -->

</div> <!-- big container -->
</template>

<script>
export default {
    name: "MyWork",
    data() {
        return {
            posterisOpen: false,
            bookletisOpen: false,
            videoisOpen: false,
            mWisOpen: false,
            bookletSpreadisOpen: false,
            bookletSelectedisOpen: false,
        }
    },
    methods: {
        togglePoster() {
            this.posterisOpen = !this.posterisOpen;
            console.log(this.posterisOpen)
        },
        toggleBooklet() {
            this.bookletisOpen = !this.bookletisOpen;
            if (this.bookletisOpen == false){
                this.bookletSelectedisOpen = false;
                this.bookletSpreadisOpen = false;
            }
        },
        toggleVideo() {
            this.videoisOpen = !this.videoisOpen;
        },
        toggleMobileWeb() {
            this.mWisOpen = !this.mWisOpen;
        },
        toggleBookletSelected() {
            this.bookletSelectedisOpen = !this.bookletSelectedisOpen;
        },
        toggleBookletSpread() {
            this.bookletSpreadisOpen = !this.bookletSpreadisOpen;
        },
    },
    computed: {
        posterClasses: function () {
            return {
                'is-closed' : !this.posterisOpen,
                }
            },
        bookletClasses: function () {
            return {
                'is-closed' : !this.bookletisOpen,
                }
            },
       videoClasses: function () {
            return {
                'is-closed' : !this.videoisOpen,
                }
            },
        mWClasses: function () {
            return {
                'is-closed' : !this.mWisOpen,
            }
        },
        bookletselectedClasses: function () {
            return {
                'is-closed' : !this.bookletSelectedisOpen,
            }
        },
        bookletspreadClasses: function () {
            return {
                'is-closed' : !this.bookletSpreadisOpen,
            }
        }
        }
}
</script>

<style scoped>
#about-work-wrapper {
    max-width: 60%;
}

#video-wrapper {
    margin-left: auto;
    margin-right: auto;
}


.accordian-header {
    cursor: pointer;
    padding-top: 20px;
    padding-bottom: 20px;
}

.accordian-body {
    padding: 0;
    max-height: 50000px;
    overflow: hidden;
    transition: 1s ease-in-out;
}


.is-closed .accordian-body{
     max-height: 0;
}


@media screen and (max-width: 600px) {
    #about-work-wrapper {
        max-width: 100%;
}

}

</style>