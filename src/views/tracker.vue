<!-- eslint-disable -->
<template>
  <div
    class="w-full h-full text-sm sm:text-lg inset-0 absolute bg-white overflow-auto p-2 sm:p-6"
  >
    <div class="sm:w-[350px] w-[300px] h-[90%] cursor-pointer p-6">
      <p class="sm:text-2xl text-lg font-bold pb-8">Validation Tracker</p>
      <div class="flex flex-col" @click="progressCheck($event)">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  class="w-2 h-2 absolute inset-0 hidden bg-white m-auto rounded-full"
                ></div>
                <div
                  class="w-4 h-1 absolute hidden inset-0 bg-white m-auto rounded-lg"
                ></div>
                <div
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
            @click="progressCheck($event)"
            
            
          >
            Number Allocation
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div class="border-l-8 border-l-[#ccc] h-16"></div>
        </div>
      </div>

      <div class="flex flex-col" @click="progressCheck($event)">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  class="w-2 h-2 absolute inset-0 hidden bg-white m-auto rounded-full"
                ></div>
                <div
                  class="w-4 h-1 absolute hidden inset-0 bg-white m-auto rounded-lg"
                ></div>
                <div
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
              </div>
            </div>
          </div>

          <!--text-->
          <div
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
            @click="progressCheck($event)"
            
          >
            Area Land Officer
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div class="border-l-8 border-l-[#ccc] h-16"></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  class="w-2 h-2 absolute inset-0 hidden bg-white m-auto rounded-full"
                ></div>
                <div
                  class="w-4 h-1 absolute hidden inset-0 bg-white m-auto rounded-lg"
                ></div>
                <div
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
          >
            Director Land 1
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div class="border-l-8 border-l-[#ccc] h-16"></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  class="w-2 h-2 absolute inset-0 hidden bg-white m-auto rounded-full"
                ></div>
                <div
                  class="w-4 h-1 absolute hidden inset-0 bg-white m-auto rounded-lg"
                ></div>
                <div
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
          >
            Surveyor General
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div class="border-l-8 border-l-[#ccc] h-16"></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  class="w-2 h-2 absolute inset-0 hidden bg-white m-auto rounded-full"
                ></div>
                <div
                  class="w-4 h-1 absolute hidden inset-0 bg-white m-auto rounded-lg"
                ></div>
                <div
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
          >
            Calligraphy
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div class="border-l-8 border-l-[#ccc] h-16"></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  class="w-2 h-2 absolute inset-0 hidden bg-white m-auto rounded-full"
                ></div>
                <div
                  class="w-4 h-1 absolute hidden inset-0 bg-white m-auto rounded-lg"
                ></div>
                <div
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
          >
            Town Planner
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div class="border-l-8 border-l-[#ccc] h-16"></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  class="w-2 h-2 absolute inset-0 hidden bg-white m-auto rounded-full"
                ></div>
                <div
                  class="w-4 h-1 absolute hidden inset-0 bg-white m-auto rounded-lg"
                ></div>
                <div
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
            class="p-1 rounded-md text-center capitalize text-white bg-[#ccc]"
          >
            Director Land 2
          </div>
        </div>
        <!--vertical line-->
        <div class="ml-2 sm:ml-3">
          <div class="border-l-8 border-l-[#ccc] h-16"></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="sm:w-24 w-16 bg-none">
            <div>
              <!--large circle-->
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 relative bg-[#ccc] rounded-full"
              >
                <div
                  class="w-2 h-2 absolute inset-0 hidden bg-white m-auto rounded-full"
                ></div>
                <div
                  class="w-4 h-1 absolute hidden inset-0 bg-white m-auto rounded-lg"
                ></div>
                <div
                  class="sm:w-2 w-[5px] h-[9px] mx-[9px] my-[6px] sm:border-b-4 border-b-2 border-r-2 sm:border-r-4 transform rotate-45 sm:h-4 absolute inset-0 border-white sm:m-auto"
                ></div>
              </div>
            </div>
          </div>
          <!--text-->
          <div
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

export default {
  name: "TrackerPage",
  components: {},

  data() {
    return {
      mockData: {
        currentstage: 2,
        approved: true,
        message: "",
      },
    
    };
  },

  methods: {
    progressCheck(event) {
      console.log(event.target)
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
