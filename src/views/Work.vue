<template>
    <div class = "work">
        <div data-aos="fade-right" data-aos-duration="2000">
            <section id = "title-wrapper">
                <h1 id = "title-text"> What he creates. </h1>
                <p> “We do it by putting imagination at the center of everything 
                    we do.”  </p>     
            </section>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <p style="padding-top:10px"> 
                Brian Collins, and the team of designers who call themselves 
                the COLLINS, create communications, products, and environments that 
                transform brands, drive business, and improve people’s lives. COLLINS is an 
                independent strategy and brand experience design company based in New York.  </p>
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

</style>