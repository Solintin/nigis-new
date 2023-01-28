<!-- eslint-disable -->
<template>
  <div
    class="w-full h-full text-sm sm:text-lg inset-0 absolute bg-white overflow-auto p-2 sm:p-6"
  >
    <div class="sm:w-[350px] w-[300px] h-[90%] cursor-pointer p-6">
      <p class="sm:text-2xl text-lg font-bold pb-8">Validation Tracker</p>
      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative rounded-full"
                :style="{ 'background-color': checkStage(stage, 1) }"
              >
                <div>
                  <div
                    v-if="!reject"
                    class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                  ></div>
                  <div
                    v-else-if="reject == stage"
                    class="w-2 h-2 absolute inset-0 bg-white m-auto rounded-full"
                  ></div>
                  <div
                    v-else
                    class="w-4 h-1 absolute inset-0 bg-white m-auto rounded-lg"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            class="p-1 rounded-md text-center capitalize text-white"
            :style="{ 'background-color': checkStage(stage, 1) }"
          >
            Number Allocation
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div
            class="border-l-8 border-l-[#ccc] h-16"
            :style="{ 'border-color': checkStage(stage, 1) }"
          ></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative rounded-full"
                :style="{ 'background-color': checkStage(stage, 2) }"
              >
                <div
                  v-if="!reject"
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
                <div
                  v-else-if="reject == stage"
                  class="w-2 h-2 absolute inset-0 bg-white m-auto rounded-full"
                ></div>
                <div
                  v-else
                  class="w-4 h-1 absolute inset-0 bg-white m-auto rounded-lg"
                ></div>
              </div>
            </div>
          </div>

          <!--text-->
          <div
            class="p-1 rounded-md text-center capitalize text-white"
            :style="{ 'background-color': checkStage(stage, 2) }"
          >
            Area Land Officer
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div
            class="border-l-8 border-l-[#ccc] h-16"
            :style="{ 'border-color': checkStage(stage, 2) }"
          ></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative rounded-full"
                :style="{ 'background-color': checkStage(stage, 3) }"
              >
                <div>
                  <div
                    v-if="!reject"
                    class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                  ></div>
                  <div
                    v-else-if="reject == stage"
                    class="w-2 h-2 absolute inset-0 bg-white m-auto rounded-full"
                  ></div>
                  <div
                    v-else
                    class="w-4 h-1 absolute inset-0 bg-white m-auto rounded-lg"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            class="p-1 rounded-md text-center capitalize text-white"
            :style="{ 'background-color': checkStage(stage, 3) }"
          >
            Director Land 1
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div
            class="border-l-8 border-l-[#ccc] h-16"
            :style="{ 'border-color': checkStage(stage, 3) }"
          ></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
                :style="{ 'background-color': checkStage(stage, 4) }"
              >
                <div
                  v-if="!reject"
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
                <div
                  v-else-if="reject == stage"
                  class="w-2 h-2 absolute inset-0 bg-white m-auto rounded-full"
                ></div>
                <div
                  v-else
                  class="w-4 h-1 absolute inset-0 bg-white m-auto rounded-lg"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            :style="{ 'background-color': checkStage(stage, 4) }"
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
          >
            Surveyor General
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div
            class="border-l-8 border-l-[#ccc] h-16"
            :style="{ 'border-color': checkStage(stage, 4) }"
          ></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                :style="{ 'background-color': checkStage(stage, 5) }"
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  v-if="!reject"
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
                <div
                  v-else-if="reject == stage"
                  class="w-2 h-2 absolute inset-0 bg-white m-auto rounded-full"
                ></div>
                <div
                  v-else
                  class="w-4 h-1 absolute inset-0 bg-white m-auto rounded-lg"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            :style="{ 'background-color': checkStage(stage, 5) }"
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
          >
            Calligraphy
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div
            class="border-l-8 border-l-[#ccc] h-16"
            :style="{ 'border-color': checkStage(stage, 5) }"
          ></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                :style="{ 'background-color': checkStage(stage, 6) }"
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  v-if="!reject"
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
                <div
                  v-else-if="reject == stage"
                  class="w-2 h-2 absolute inset-0 bg-white m-auto rounded-full"
                ></div>
                <div
                  v-else
                  class="w-4 h-1 absolute inset-0 bg-white m-auto rounded-lg"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            :style="{ 'background-color': checkStage(stage, 6) }"
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
          >
            Town Planner
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div
            class="border-l-8 border-l-[#ccc] h-16"
            :style="{ 'border-color': checkStage(stage, 6) }"
          ></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                :style="{ 'background-color': checkStage(stage, 7) }"
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  v-if="!reject"
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
                <div
                  v-else-if="reject == stage"
                  class="w-2 h-2 absolute inset-0 bg-white m-auto rounded-full"
                ></div>
                <div
                  v-else
                  class="w-4 h-1 absolute inset-0 bg-white m-auto rounded-lg"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            :style="{ 'background-color': checkStage(stage, 7) }"
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
          >
            Director Land 2
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div
            class="border-l-8 border-l-[#ccc] h-16"
            :style="{ 'border-color': checkStage(stage, 7) }"
          ></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                :style="{ 'background-color': checkStage(stage, 8) }"
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  v-if="!reject"
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
                <div
                  v-else-if="reject == stage"
                  class="w-2 h-2 absolute inset-0 bg-white m-auto rounded-full"
                ></div>
                <div
                  v-else
                  class="w-4 h-1 absolute inset-0 bg-white m-auto rounded-lg"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            :style="{ 'background-color': checkStage(stage, 8) }"
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
          >
            N.I.G.I.S
          </div>
        </div>
        <!--vertical line-->
      </div>

      <!---->
      <div class="none pb-10"></div>
    </div>
    <div class="fixed m-auto inset-0 w-1/2 h-4/5">
      <img
        class="w-full h-full opacity-10"
        src="../assets/images/nigislogo.png"
      />
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import axios from "@/utils/useAxios";
import { mapGetters } from "vuex";

export default {
  name: "TrackerPage",
  components: {},

  data() {
    return {
      numberAllocated: "",
      stage: 1,
      reject: 1,
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  mounted() {
    this.getUserStage();
  },

  methods: {
    getUserStage() {
      axios
        .get(`requirement/tracker/${this.getCurrentUser._id}`)
        .then((response) => {
          const { data } = response.data;
          console.log(data);
          this.numberAllocated = data.numberAllocated;
          //this.stage = data.stage
          //this.reject = 1
        });
    },
    checkStage(stage, currentStage) {
      if (stage >= currentStage && this.reject == "") {
        return "#0c8824";
      } else if (stage >= currentStage && this.reject == this.stage) {
        return "#CC0000";
      } else {
        return "#E0E0E0";
      }
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
