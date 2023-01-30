<!-- eslint-disable -->
<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>
<!--eslint-disable-->

<script>
/* eslint-disable */

export default {
  name: "App",

  data() {
    return {
      isFormPage: false,
    };
  },
  methods: {

   
  },
};
</script>
<!--eslint-disable-->
<style>
/* eslint-disable */

html,
body {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("./assets/images/minna.jpg");
  overflow: hidden;
  background-blend-mode: multiply;

  height: 100%;
}

* {
  -webkit-tap-highlight-color: transparent;
}
</style>
