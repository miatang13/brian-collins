<template>
  <div id="multiRadioButton">
    <!-- first radio button -->
    <input
      type="radio"
      name="radio"
      id="radio1"
      :class="states[0].color"
      @input="callback(states[0].name)"
    />
    <label id="radio1_label" for="radio1" :class="getState()">
      <!-- bubble beside text -->
      <span id="dot" :class="states[0].color"></span>

      {{ states[0].text }}
    </label>

    <!-- second radio button -->
    <input
      type="radio"
      name="radio"
      id="radio2"
      :class="states[1].color"
      @input="callback(states[1].name)"
    />
    <label id="radio2_label" for="radio2" :class="getState()">
      <!-- bubble beside text -->
      <span id="dot" :class="states[1].color"></span>

      {{ states[1].text }}
    </label>
  </div>
</template>

<script>
export default {
  name: "MultiRadioButton",
  props: {
    callback: {
      type: Function,
      required: true,
    },
    states: {
      type: Array,
      required: true,
    },
    getState: {
      type: Function,
      required: true,
    },
  },
  methods: {
    testCallBack() {
      console.log("hey");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_colors.scss";

label {
  font-family: "soehne-breit";
  font-size: 0.7em;
  color: $color-grey-light;
}

/* hides the radio buttons */
#radio1,
#radio2,
#radio3 {
  display: none;
}

#radio1_label,
#radio2_label,
#radio3_label {
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  // background-color:$color-grey-dark;
}

#radio1_label {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

#radio2_label {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

label#radio2_label.Medium {
  color: orange;
  // color:$color-caution;
  // background-color: $color-primary;
  transition: 0.3s;
}

label#radio1_label.Low {
  // background-color: $color-primary;
  color: $color-nominal;
  transition: 0.3s;
}

label#radio3_label.High {
  // background-color: $color-primary;
  transition: 0.3s;
}

#dot {
  height: 6px;
  width: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 4px;
}

#dot.nominal {
  background-color: $color-nominal;
}

#dot.danger {
  background-color: $color-danger;
}

#dot.caution {
  // background-color: $color-caution;
  background-color: orange;
}

@media screen and (max-width: 600px) {
  label {
    font-size: 1em;
  }
}
</style>
