<template>
    <div class = "designhero">
        <div data-aos="fade-right" data-aos-duration="2000">
            <section id = "title-wrapper">
                <h1 id = "title-text"> Design Hero </h1>
                <p> A semester’s worth of work celebrating Brian Collins — my design hero. </p>     
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
                <p> 19.25(w) x 31.75(h) </p>
                <!-- <span class = "close-span" @click = "closePoster"> &#8632; Close </span> -->
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
                    <iframe src="https://player.vimeo.com/video/419170346" width = "640" height = "360" allowfullscreen></iframe>
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

<!--
        <div class = "accrodian" v-bind:class = "randomClasses" >
            <div class = "accordian-header" @click = "toggleRandom">
                <h2> More Images </h2>
            </div>

            <div class = "accordian-body">
                <img src = '@/assets/photos/mywork/booklet/booklet.gif' width = "100%">
            </div>
        </div>
-->

        <div class = "accrodian" v-bind:class = "essayClasses" >
            <div class = "accordian-header" @click = "toggleEssay">
                <h2> Why Him? </h2>
                <p> Short essay on why Brian Collins is my design hero. </p>
            </div>

            <div class = "accordian-body">
                <div class = "essay-wrapper">
                    <p> First, he is undoubtedly a design icon, a design master of the century. His 
                        work in the field of branding has defined and redefined trends, styles, and 
                        encouraged further exploration and creativity. <br><br>
                        Secondly, and most importantly, he greatly values knowledge of many kinds. 
                        He encourages people to be great designers with a secret super power. “We expect 
                        everyone to have a second secret ‘superpower,’ so to speak. Hybrids.” When looking at 
                        candidates, he said that he “love to hire great people who are also remarkable 
                        at something else — it could be coding or writing, but it could just as easily 
                        be cooking, science fiction, scuba diving, biking, singing, painting, Taekwondo...anything. 
                        I believe those collisions expand us.” <br> <br>    
                        This truly resonates with me because I have a hard time defining myself 
                        with one word, a ____ designer. <br> <br>    
                        I know I am not just that. <br><br>    
                        I want to be more, and I firmly believe that by being more, 
                        I can be a better designer curating better designs. <br><br>    
                        I will end with my favorite quote from him that talks what design means to him. <br>   <br>    

                        “Look, design is not about what we do. Design, for us, is about what we encourage and enable others to do. For us, it’s about building tools, environments and communications
                        that help other people make meaningful things possible. <br><br>    

                        "Design should enable people to do whatever they need or want to do with their time. 
                        Time itself is the most valuable asset anyone has. Money, objects — you can 
                        get all of that back. Time is irreplaceable. So, we work to fill and inform 
                        the time people give us with clarity, understanding, support or joy.<br><br>    

                        "The way I see it, it’s a moral transaction. Did that client get your very best in that transaction? Did their customers get the finest you can do? Did you give them the best you had? Or did you fizzle out, or give up when it got difficult?”
                        </p>
                    </div> <!-- essay wrapper -->
                </div>
            </div> <!-- essay accoridan wrapper --> 
        
        <div class = "contact" >
            <p> My Contact </p>
            <a href = "https://www.linkedin.com/in/mia-tang-116221190/"> LinkedIn </a> <br>
            <a href = "mailto:miatang13@gmail.com"> Email </a>
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
            essayisOpen: false,
            randomisOpen: false,
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
        toggleEssay() {
            this.essayisOpen = !this.essayisOpen;
        },
        toggleRandom(){
            this.randomisOpen = !this.randomisOpen;
        },
        closePoster () {
            togglePoster();
            window.scrollTo(0,50);
        }
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
        },
        essayClasses: function () {
            return {
                'is-closed' : !this.essayisOpen,
            }
        },
        randomClasses: function (){
            return {
                'is-closed' : !this.randomisOpen,
            }
        }
        }
}
</script>

<style scoped>
.contact {
    color: white;
    padding-top: 50px;
}

.close-span {
    cursor: pointer;
}

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
    max-height: 10000px;
    overflow: hidden;
    transition: 2s ease-in-out;
}


.is-closed .accordian-body{
     max-height: 0;
}

.essay-wrapper{
    max-width: 60%;
}

@media screen and (max-width: 600px) {
    #about-work-wrapper {
        max-width: 100%;
       }
    .essay-wrapper {
        max-width:100%;
    }

}

</style>