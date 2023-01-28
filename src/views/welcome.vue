<!-- eslint-disable -->
<template>
  <div
    class="w-full h-full text-sm sm:text-lg inset-0 absolute bg-white overflow-hidden p-2 sm:p-6"
  >
    <div
      class="fixed m-auto inset-0 px-4 flex md:flex-row flex-col justify-center md:justify-around items-center"
    >
      <div
        class="sm:w-[300px] sm:h-[300px] lg:w-[350px] w-[150px] h-[150px] lg:h-[350px]"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <img class="w-full h-full" src="../assets/images/nigislogo.png" />
      </div>

      <!--messsage-->
      <div
        data-aos="fade-left"
        data-aos-duration="500"
        class="bg-white text-zinc-800 w-11/12 md:w-[400px] sm:h-[400px] text-center shadow-lg leading-8"
      >
        <div class="m-auto my-6">
          <div class="p-4 py-10">
            <p>
              Dear
              <span class="uppercase font-semibold">{{
                getCurrentUser.fullname
              }}</span
              >,
            </p>
            <p>Welcome to NIGIS registration platform</p>
            <p>Do you have the necessary requirement</p>
            <p>Click proceed to continue</p>
          </div>

          <button
            @click="proceed"
            class="bg-green-600 focus:outline-none border-0 rounded-lg text-white py-1 px-2"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { mapGetters } from "vuex";

export default {
  name: "WelcomePage",
  components: {},

  data() {
    return {
      fullname: "",
    };
  },
  computed: {
    ...mapGetters["getCurrentUser"],
  },

  methods: {
    proceed() {
      this.$router.push("/form");
    },
  },
};
</script>

<style scoped>
/* eslint-disable */

html,
body {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
<!--eslint-disable-->
