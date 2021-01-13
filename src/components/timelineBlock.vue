<template>
  <div class="timelineBlock">
    <div :class="data.location">
      <h2 id="singleBlock">
        {{ data.givenContent.company }} <br /><br />
        {{ data.givenContent.job }} <br /><br />
        {{ data.givenContent.year }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineBlock",
  props: {
    data: {
      givenContent: {
        type: Array,
        required: true,
      },
      location: {
        required: true,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
$max-width: 280px;

.left {
  float: left;
  max-width: $max-width;
}

.middle {
  margin-left: 30%;
  max-width: $max-width;
}

.right {
  margin-left: 70%;
  max-width: $max-width;
}

#singleBlock {
  background: linear-gradient(
    to right,
    #fff 20%,
    rgb(255, 102, 0) 40%,
    rgb(0, 255, 136) 60%,
    #fff 80%
  );
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 8s linear forwards;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  &:hover {
    background: linear-gradient(
      to right,
      #fff 20%,
      rgb(255, 102, 0) 40%,
      rgb(0, 255, 136) 60%,
      #fff 80%
    );
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
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .left,
  .middle,
  .right {
    margin-left: 0;
    overflow: hidden;
    float: left;
    padding-bottom: 50px;
  }
}
</style>
