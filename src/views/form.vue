<!-- eslint-disable -->
<template>
  <div
    class="w-full h-full inset-0 absolute bg-white bg-opacity-90 overflow-auto p-6"
  >
    <img
      class="sm:w-32 sm:h-32 h-20 w-20 m-auto"
      src="../assets/images/nigislogo.png"
      alt="logo"
    />

    <div
      class="sm:w-10/12 w-[95%] h-full rounded-3xl p-6 m-auto mt-10 sm:mt-20 border-2 border-gray-500"
    >
      <div class="text-lg grid md:grid-cols-3 md:gap-4">
        <!--full name-->
        <div class="name">
          <div
            class="form-group space-y-3"
            :class="{ 'form-group--error': $v.name.$error }"
          >
            <label
              class="block form__label font-thin text-lg text-zinc-800"
              for="name"
              ><b>Enter Your Full Name</b></label
            >
            <input
              @change="handleUpdate(name, $event)"
              class="block form__input input-field"
              type="text"
              placeholder="e.g Umar Chioma Obasa"
              name="name"
              v-model.trim="name"
            />
          </div>
          <div class="error text-sm" v-if="!$v.name.minLength">
            Name must have at least
            {{ $v.name.$params.minLength.min }} letters.
          </div>
        </div>
        <!--Age-->
        <div class="age">
          <div
            class="form-group space-y-3"
            :class="{ 'form-group--error': $v.age.$error }"
          >
            <label
              class="block form__label font-thin text-lg text-zinc-800"
              for="age"
              ><b>Enter Your Age</b></label
            >
            <input
              @change="handleUpdate(age, $event)"
              class="block form__input input-field"
              type="number"
              min="1"
              placeholder="e.g 28"
              name="age"
              v-model.trim="age"
              required
            />
          </div>
        </div>
        <!--Birth Certificate-->
        <div class="">
          <div class="form-group space-y-3">
            <label
              class="block form__label font-thin text-lg text-zinc-800"
              for="birth"
              ><b>Birth Certificate</b></label
            >
            <input
              @change="handleFilesUpdate(birth, $event)"
              class="block form__input input-field"
              type="file"
              name="birth"
              required
            />
          </div>
          <div class="error text-sm" v-if="birth == undefined">
            Image file should not be larger than 1MB
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-12 flex justify-center items-center pt-4">
      <button
        @click.prevent="submit"
        class="submit bg-[#0c8824] hover:bg-[#0f9e2c] mb-2 rounded-2xl text-white font-semibold mx-auto py-2 px-[20%]"
        type="submit"
        :disabled="submitStatus === 'PENDING'"
      >
        Next
      </button>
      <p class="typo__p text-sm text-center" v-if="submitStatus === 'OK'">
        Thanks for your submission!
      </p>
      <p
        class="text-red-600 text-center text-sm"
        v-if="submitStatus === 'ERROR'"
      >
        Please fill the form correctly.
      </p>
      <p class="typo__p text-sm text-center" v-if="submitStatus === 'PENDING'">
        Sending...
      </p>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "FormPage",
  mixins: [validationMixin],

  data() {
    return {
      name: "",
      email: "",
      age: "",
      birth: undefined,
      submitStatus: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(10),
    },
    age: {
      required,
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          //this.$router.push("/form");

          this.submitStatus = "OK";
        }, 500);
      }
    },

    handleUpdate(model, event) {
      this[model] = event.target.value;
      console.log(this[model]);
    },
    handleFilesUpdate(model, event) {
      event.target.files[0].size < 102400
        ? this[model] = event.target.files[0]
        : event.target.value = '';

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
  @apply border-2  focus:border-green-700 rounded-xl focus:outline-none w-full h-10 px-2;
}

.error {
  @apply text-red-600;
}
</style>
<!--eslint-disable-->
