<template>
  <body>
      <div id = "app">

        <div id = "nav">
          <router-link to = "/about"> Who </router-link> 
          <router-link to = "/timeline"> Where </router-link> 
          <router-link to = "/work"> What </router-link> 
          <router-link to = "/"> Why </router-link> 
        </div>

        <div id = "router-view">
          <router-view />
        </div>
    
      </div>
  </body>
</template>

<script>
import AOS from 'aos'

export default {
    name: "About",
    created () {
        AOS.init()
      },
    metaInfo: {
      title: 'Brian Collins',
      htmlAttrs: {
        lang: 'en',
      }
    }
} 

</script>

<style lang="scss">

/* fonts */
@import '@/assets/styles/_colors.scss';
@import "@/assets/styles/_reset";
@import '@/assets/styles/aos.scss';

@font-face {
    font-family: 'soehne-breit';
    src: url('../src/assets/styles/fonts/soehne-breit-web-kraftig.woff') format('woff'),
         url('../src/assets/styles/fonts/soehne-breit-web-kraftig.woff2') format('woff2');
}

@font-face {
    font-family: 'soehne';
    src: url('../src/assets/styles/fonts/soehne-web-kraftig.woff') format('woff'),
         url('../src/assets/styles/fonts/soehne-web-kraftig.woff2') format('woff2');
}

@font-face {
    font-family: 'soehne-buch';
    src: url('../src/assets/styles/fonts/soehne-web-buch.woff') format('woff'),
         url('../src/assets/styles/fonts/soehne-web-buch.woff2') format('woff2');
}


/* structure */
footer {
  padding:5%;
  color: $color-grey;
}

body {
  background-color: $color-background;
}

#nav {
  float: right;
  margin-right:5%;
  margin-top:5%;

  & a {
      color:white;
      font-family: 'soehne-breit';
      text-decoration: none;
      font-size: 1.3em;
      padding:10px; /* padding between the nav text */
    }

  & a.router-link-exact-active {
      color:$color-active-link;
      background: linear-gradient(to right, #FFF 20%, rgb(134, 134, 134) 40%, rgb(128, 141, 135) 60%, #FFF 80%);
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

/* applies to ALL pages */

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom:2%;

  & #router-view {
    padding:5%;
  }
}


/* specific element */

h1 {
  font-family: 'soehne-breit';
  color:white;
  font-size: 3em;
}

h2 {
  font-family: 'soehne-breit';
  color:white;
  font-size: 2em;
}

h3 {
  font-family: 'soehne-breit';
  color:$color-grey;
  font-size: 1.5em;
}

p {
  font-family: 'soehne-buch';
  color: $color-body-text;
  font-size: 1.2em;
  line-height: 1.5em;
}

span {
  font-family: 'soehne';
  color: $color-body-text;
  font-size: 1.2em;
  line-height: 1.5em;
}

a {
  font-family: 'soehne';
  color: $color-body-text;
  font-size: 1.2em;
  line-height: 1.5em;
}


/* special classes */

#title-text {
  background: linear-gradient(to right, #FFF 20%, rgb(134, 134, 134) 40%, rgb(128, 141, 135) 60%, #FFF 80%);
  background-size: 200% auto;
  
  color: #000;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  animation: shine 3s linear infinite;
  @keyframes shine {
      to {
        background-position: 200% center;
      } }
  padding-bottom: 10px;
}

/* section does not clash with nav, leaves space in between */ 
section {
  padding: 50px 0 50px 0;
  // overflow: hidden;
}

/* some elements */ 

// button {
//     color: $color-button;
//     font-size:.8em;
//     font-family: 'soehne-breit';
//     padding: 4px;
//     background:  $color-background;
//     transition: all .5s;
//     border-radius: 12px;
//     border: 1px solid $color-background ;

//     &:hover{
//       background: $color-map-active;
//     }
// }

@media screen and (max-width: 600px) {
  #nav {
    padding-bottom: 10px;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em,
  }

  p {
    font-size: 1.1em;
  }
}

</style>
