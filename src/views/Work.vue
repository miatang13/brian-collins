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
       
        <div class = "equinox-wrapper">
            <div >
                <section class = "workphoto-wrapper">
                    <img src = "../assets/photos/work/equinox_1.jpg" width = "100%">
                </section>
            </div>

            <div  data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                <div id="work-text-wrapper">
                    <h3> Equinox Hotels </h3>
                </div>
            </div>
            
            <!-- data-aos="flip-up" data-aos-duration="1500"  -->
            <div class = "flipcard-wrapper">
                <div class = "flipcard" >
                    <section class = "frontcard"> 
                        <img src = "../assets/photos/work/equinox_2.jpg" width = "100%">
                    </section>
                    <section class = "backcard">
                        <p> COLLINS defined the Equinox audience as those who are 
                            constantly striving to be better than who they were yesterday. 
                            It’s through this pursuit that they are led to opposing extremes: 
                            Discipline and indulgence. Relentlessness and relaxation. 
                            Excess and absence.  </p>
                        <a href = "https://www.wearecollins.com/work/equinox-hotels/"> More on the project &#8600; </a>
                    </section>
                </div>
            </div>
        </div>

        <div class = "overlay-text-wrapper-02" data-aos="flip-up" data-aos-duration="1500" >
            <section id = "overlay-text">
                <h1> To build better futures.</h1>
            </section>
        </div>

        <div class = "sixofive-wrapper">
            <div>
                <section class = "workphoto-wrapper" id = "right-photo-wrapper">
                    <img src = "../assets/photos/work/605_2.gif" width = "100%">
                </section>
            </div>

            <div  data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                <div id="work-text-wrapper">
                    <h3> 605 </h3>
                </div>
            </div>
            
            <!-- data-aos="flip-up" data-aos-duration="1500"  -->
            <div class = "flipcard-wrapper">
                <div class = "flipcard" >
                    <section class = "frontcard"> 
                        <img src = "../assets/photos/work/605_1.jpg" width = "100%">
                    </section>
                    <section class = "backcard">
                        <p> COLLINS developed and launched the 605 brand, a new data 
                            analytics and audience measurement company. They worked 
                            with the 605 team to determine what made their company so unique.
                            Together they realized that their commitment to 
                            transparency was paramount — and unlike any other in the market.  </p>
                        <a href = "https://www.wearecollins.com/work/605/"> More on the project &#8600; </a>
                    </section>
                </div>
            </div>
        </div>

        <div class = "overlay-text-wrapper-03" data-aos="flip-up" data-aos-duration="1500" >
            <section id = "overlay-text">
                <h1> To break with the mundane and pursue the extraordinary. </h1>
            </section>
        </div>

        <div class = "spotify-wrapper">
            <div >
                <section class = "workphoto-wrapper">
                    <img src = "../assets/photos/work/spotify_1.jpg" width = "100%">
                </section>
            </div>

            <div  data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                <div id="work-text-wrapper">
                    <h3> Spotify </h3>
                </div>
            </div>
            
            <!-- data-aos="flip-up" data-aos-duration="1500"  -->
            <div class = "flipcard-wrapper">
                <div class = "flipcard" >
                    <section class = "frontcard"> 
                        <img src = "../assets/photos/work/spotify_2.jpg" width="100%">
                    </section>
                    <section class = "backcard">
                        <p> For the largest music streaming service, Spotify, COLLINS’ answer emerged directly 
                            from their strategic platform — when an individual makes a personal connection 
                            with a song, their reaction is to cry, cheer, scream, sing, jump, or get chills — or, as 
                            they phrased it, “burst” with emotion. The identity graphically captured that moment. </p>
                        <a href = "https://www.wearecollins.com/work/spotify/"> More on the project &#8600; </a>
                    </section>
                </div>
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

export default {
    name: "About",
    created () {
      },
}
</script>

<style lang="scss" scoped>

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
    width: 50%;
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


.end{
    margin-top: 800px;
}

#insanely-great{
  font-family: 'soehne-breit';
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

#work-text-wrapper{
    padding: 50px;
    margin-left: 200px;
}

.flipcard-wrapper{
    position: relative;
}

.flipcard{
    transform-style: preserve-3d;
    padding: 50px;
    padding-bottom: 500px;
    transition: all 1.2s ease-in-out;
    width: 50%;
    border: solid 1px white;
    margin-left: 200px;
}

.flipcard:hover {
    transform: rotateY(180deg);
}


.frontcard {
    position: absolute;
    backface-visibility: hidden;
    width: 100%;
}

.backcard{
    position: absolute;
    padding-left: 200px;
    backface-visibility:hidden;
    width: 75%;
    transform: rotateY(180deg);
}

#dot {
    height: 6px;
    width: 6px;
    border-radius: 50%;
    display: inline-block;
    margin-right:4px;
}

#right-photo-wrapper {
    margin-left: 600px;
}


@media screen and (max-width: 600px) {

    .overlay-text-wrapper-01 {
        position: --webkit-sticky; /* Safari & IE */
        position: sticky;
        top: 0;
    }

    .overlay-text-wrapper-02 {
        position: --webkit-sticky; /* Safari & IE */
        position: sticky;
        top: 115px;
    }

    .overlay-text-wrapper-03 {
        position: --webkit-sticky; /* Safari & IE */
        position: sticky;
        top: 195px;
    }

    .flipcard{
        width: 100%;
        margin-left: 0px;
        border: none;
        padding: 0px;
        padding-top: 10px;
        padding-bottom: 300px;
    }

    .backcard{
        width: 100%;
        padding-left: 0px;
    }


    .workphoto-wrapper{
        width: 100%;
    }

    #right-photo-wrapper {
        margin-left: 0px;
    }

    #work-text-wrapper{
        margin-left: 0px;
        padding: 0px;
    }
}

</style>