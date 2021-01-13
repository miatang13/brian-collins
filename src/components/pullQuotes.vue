<template>
  <div class="pullQuotes">
    <section id="pull-quotes-section">
      <div
        id="start-pullquote-wrapper"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 id="pull-quotes-text">Design, is not a plan for decoration.</h1>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 id="pull-quotes-text">Design, is a plan for action.</h1>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 id="pull-quotes-text">Design, is about making hope visible.</h1>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 id="pull-quotes-text">— Brian Collins</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "pullQuotes",
};
</script>

<style lang="scss">
#pull-quotes-section {
  padding-top: 150px;
}

#pull-quotes-text {
  font-size: 6.5em;
  word-wrap: break-word;
  padding: 50px 0 50px 0;

  background: linear-gradient(
    to right,
    #fff 20%,
    rgb(255, 102, 0) 40%,
    rgb(255, 142, 142) 60%,
    #fff 80%
  );
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
    }
  }
}

@media screen and (max-width: 600px) {
  #pull-quotes-text {
    font-size: 2em;
    padding: 25px 0 25px 0;
  }
}
</style>
