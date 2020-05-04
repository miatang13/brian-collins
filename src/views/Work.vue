<template>
    <div class = "work">
        <div data-aos="fade-right" data-aos-duration="2000">
            <section id = "title-wrapper">
                <h1 id = "title-text"> What he creates. </h1>
                <p> “We do it by putting imagination at the center of everything 
                    we do.”  </p>     
            </section>
        </div>

        <div id = "about-collins-wrapper" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <p style="padding-top:10px"> 
                Brian Collins, and the team of designers who call themselves 
                the COLLINS, create communications, products, and environments that 
                transform brands, drive business, and improve people’s lives. COLLINS is an 
                independent strategy and brand experience design company based in New York.  </p>
        </div>

        <div class = "overlay-text-wrapper-01">
            <div  data-aos="flip-up" data-aos-duration="1500" >
                <section id = "overlay-text">
                    <h1>  To weave the pragmatic with the poetic. </h1>
                </section>
            </div>
        </div>
       
        <div class = "selfmade-wrapper">
            <div  data-aos="flip-up" data-aos-duration="1500" >
                <section class = "workphoto-wrapper">
                    <img src = "../assets/photos/work/selfmade_1.jpg" width = "50%">
                </section>
            </div>

            <div  data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
            <div id="work-text-wrapper">
                <h3> Self-made</h3>
            </div>
            </div>
            
            <div  data-aos="flip-up" data-aos-duration="1500" >
                <section class = "workphoto-wrapper"> 
                    <img src = "../assets/photos/work/selfmade_2.jpg" width = "50%">
                </section>
            </div>
        </div>

        <div class = "overlay-text-wrapper-02" data-aos="flip-up" data-aos-duration="1500" >
            <section id = "overlay-text">
                <h1> To build better futures.</h1>
            </section>
        </div>

        <div class = "airbnb-wrapper">
            <div  data-aos="flip-up" data-aos-duration="1500" >
                <section class = "workphoto-wrapper">
                    <img src = "../assets/photos/work/airbnb_1.jpg" width = "50%">
                </section>
            </div>

            <div  data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
            <div id="work-text-wrapper">
                <h3> Airbnb </h3>
            </div>
            </div>
            
            <div  data-aos="flip-up" data-aos-duration="1500" >
                <section class = "workphoto-wrapper"> 
                    <img src = "../assets/photos/work/airbnb_2.jpg" width = "50%">
                </section>
            </div>
        </div>

        <div class = "overlay-text-wrapper-03" data-aos="flip-up" data-aos-duration="1500" >
            <section id = "overlay-text">
                <h1> To break with the mundane and pursue the extraordinary. </h1>
            </section>
        </div>

        <div class = "spotify-wrapper">
            <div  data-aos="flip-up" data-aos-duration="1500" >
                <section class = "workphoto-wrapper">
                    <img src = "../assets/photos/work/spotify_1.jpg" width = "50%">
                </section>
            </div>

            <div  data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                <div id="work-text-wrapper">
                    <h3> Spotify </h3>
                </div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1500" >
                <section class = "workphoto-wrapper"> 
                    <img src = "../assets/photos/work/spotify_2.jpg" width = "50%">
                </section>
            </div>
        </div>

        <div  data-aos="fade-up" data-aos-duration="3000">
            <div class = "end">  
                <h1> Make something <span id = "insanely-great" style = "font-size:1em;"> insanely great </span> . </h1> 
            </div>
        </div>


    </div>
</template>

<script>
import AOS from 'aos'

export default {
    name: "About",
    created () {
        AOS.init()
      },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/aos.scss';

.overlay-text-wrapper-01 {
    position: --webkit-sticky; /* Safari & IE */
    position: sticky;
    top: 0;
}

.overlay-text-wrapper-02 {
    position: --webkit-sticky; /* Safari & IE */
    position: sticky;
    top: 75px;
}

.overlay-text-wrapper-03 {
    position: --webkit-sticky; /* Safari & IE */
    position: sticky;
    top: 150px;
}

.workphoto-wrapper{
    // overflow:hidden;
}

.on-the-right{
    top: 50%;
    left: 50%;
}

#equinox-text-wrapper {
    z-index: -1;
    top: 50%;
    left: 50%;
}

#about-collins-wrapper{
    height: 500px;
}

.selfmade-wrapper{
    // border:1px solid white;
}

.end{
    margin-top: 800px;
}

#insanely-great{
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
}

</style>