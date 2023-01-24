<!-- eslint-disable -->
<template>
  <div
    class="w-full h-full inset-0 absolute bg-white overflow-auto p-2 sm:p-6 pb-10 sm:pb-32"
  >
    <img
      class="sm:w-32 sm:h-32 h-20 w-20 m-auto"
      src="../assets/images/nigislogo.png"
      alt="logo"
    />

    <div :class="isShow ? 'block' : 'hidden'">
      <FormOne
        :handleUpdate="handleUpdate"
        :handleFilesUpdate="handleFilesUpdate"
        :isShow="isShow"
        :isSizeRange="isSizeRange"
        :toggleForm="toggleForm"
      />
    </div>
    <div :class="isShow ? 'hidden' : 'block'">
      <FormTwo
        :handleUpdate="handleUpdate"
        :handleFilesUpdate="handleFilesUpdate"
        :isShow="isShow"
        :toggleForm="toggleForm"
      />
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import FormOne from "@/components/formone.vue";
import FormTwo from "@/components/formtwo.vue";

export default {
  name: "FormPage",
  components: {
    FormOne,
    FormTwo,
  },

  data() {
    return {
      isShow: true,
      isSizeRange: false,
    };
  },

  methods: {
    toggleForm() {
      this.isShow = !this.isShow;
    },
    handleUpdate(model, event) {
      this[model] = event.target.value;
      console.log(this[model]);
    },
    handleFilesUpdate(model, event) {
      if (event.target.files[0].size < 1024000) {
        this[model] = event.target.files[0];
        this.isSizeRange = true;
        this.isLeaseFile = true;
      } else {
        event.target.value = "";
        this.isSizeRange = false;
        this.isLeaseFile = false;
      }

      console.log(this[model]);
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
.input-field {
  @apply border-2  focus:border-gray-700 hover:border-gray-700 rounded-xl focus:outline-none w-full h-10 sm:h-12 px-2;
}

.error {
  @apply text-red-600;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
<!--eslint-disable-->
