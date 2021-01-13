<template>
  <body>
    <div id="app">
      <div id="nav">
        <router-link to="/about"> Who </router-link>
        <router-link to="/timeline"> Where </router-link>
        <router-link to="/work"> What </router-link>
        <router-link to="/"> Why </router-link>
      </div>

      <div id="router-view">
        <router-view />
      </div>
    </div>
  </body>
</template>

<script>
import AOS from "aos";

export default {
  name: "About",
  created() {
    AOS.init();
  },
  metaInfo: {
    title: "Brian Collins",
    htmlAttrs: {
      lang: "en",
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_reset";
@import "@/assets/styles/_colors.scss";
@import "@/assets/styles/_universal.scss";
@import "@/assets/styles/aos.scss";
</style>
