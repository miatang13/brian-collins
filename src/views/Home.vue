<template>
  <div class="home">
     <div data-aos="fade-right" data-aos-duration="3000">
      <section id = "place-holder">
        <h1 id = "place-holder-text"> SOME GOOD LOOKIN Kinetic Typography Animation Stuff HERE </h1>
      </section>
     </div>
 
    <section id = "pull-quotes-section">
       
      <h1 id = "pull-quotes-text"> Design, is not a plan for decoration. </h1>

      <h1 id = "pull-quotes-text"> Design, is a plan for action. </h1>
      <h1 id = "pull-quotes-text">  Design, is about making hope visible. </h1>
      <h1 id = "pull-quotes-text">  — Brian Collins </h1>
    </section>

    
  </div>
</template>

<script>
// @ is an alias to /src
import AOS from 'aos'

export default {
  name: "Home",
  head () {
    return {
      title : "Home",
    }
  },
  created() {
    AOS.init()
  },
  components: {
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_colors.scss';
@import '@/assets/styles/aos.scss';

#place-holder-text {
  font-size:100px;
  word-wrap:break-word;
}

#pull-quotes-section {
  padding-top:150px;
}

#pull-quotes-text{
  font-size: 6.5em;
  word-wrap:break-word;
  padding: 50px 0 50px 0;

    &:hover {
      background: linear-gradient(to right, #FFF 20%, rgb(255, 102, 0) 40%, rgb(255, 142, 142) 60%, #FFF 80%);
      background-size: 200% auto;

      color: #000;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      animation: shine 2s linear infinite;
      @keyframes shine {
          to {
            background-position: 200% center;
          } }
      }
}



</style>