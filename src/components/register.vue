<!--eslint-disable-->
<template>
  <div class="w-full h-full">
    <div
      class="sm:w-[420px] absolute inset-0 m-auto h-fit bg-white bg-opacity-95 sm:rounded-xl py-6 px-3 space-y-4"
    >
      <!--Register-->

      <div class="space-y-3">
        <img class="mx-auto w-16 h-16" src="./nigislogo.png" alt="nigislogo" />

        <div class="block p-3 space-y-3 rounded-xl border-2">
          <h3 class="sm:text-xl text-lg text-center font-semibold p-4">
            Register
          </h3>
          <div class="space-y-3">
            <div
              class="form-group space-y-3"
              :class="{ 'form-group--error': $v.name.$error }"
            >
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="name"
                :class="
                  !$v.name.required && $v.name.$dirty ? 'text-red-600' : ''
                "
                ><b>Enter Your Full Name</b></label
              >
              <input
                @change="handleUpdate(name, $event)"
                :class="
                  !$v.name.required && $v.name.$dirty ? 'border-red-600' : ''
                "
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

            <div
              class="form-group space-y-3"
              :class="{ 'form-group--error': $v.email.$error }"
            >
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="email"
                :class="
                  !$v.email.required && $v.email.$dirty ? 'text-red-600' : ''
                "
                ><b>Enter Your Email Address</b></label
              >
              <input
                @change="handleUpdate(email, $event)"
                :class="
                  !$v.email.required && $v.email.$dirty ? 'border-red-600' : ''
                "
                class="block form__input input-field"
                type="email"
                placeholder="Enter email address..."
                name="email"
                v-model.trim="email"
              />
            </div>
            <div class="error text-sm" v-if="!$v.email.email">
              Enter a Valid Email Address.
            </div>

            <div
              class="form-group space-y-3"
              :class="{ 'form-group--error': $v.password.$error }"
            >
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="password"
                :class="
                  !$v.password.required && $v.password.$dirty
                    ? 'text-red-600'
                    : ''
                "
                ><b>Create A Password</b></label
              >
              <input
                @change="handleUpdate(password, $event)"
                :class="
                  !$v.password.required && $v.password.$dirty
                    ? 'border-red-600'
                    : ''
                "
                class="block form__input input-field"
                type="password"
                v-model.trim="password"
                placeholder="Enter Password"
                name="password"
              />
            </div>

            <div class="error text-sm" v-if="!$v.password.minLength">
              Password must have at least
              {{ $v.password.$params.minLength.min }} characters.
            </div>

            <div class="w-full h-12 flex justify-center items-center pt-4">
              <button
                @click.prevent="submit"
                class="submit bg-[#0c8824] hover:bg-[#0f9e2c] rounded-2xl text-white font-semibold mx-auto py-2 px-[20%]"
                type="submit"
                :disabled="submitStatus === 'PENDING'"
              >
                Create an account
              </button>
            </div>
            <p class="typo__p text-sm text-center" v-if="submitStatus === 'OK'">
              Thanks for your submission!
            </p>
            <p
              class="typo__p text-sm text-center text-red-600"
              v-if="submitStatus === 'ERROR'"
            >
              Please fill the form correctly.
            </p>
            <p
              class="typo__p text-sm text-center"
              v-if="submitStatus === 'PENDING'"
            >
              Sending...
            </p>
            <p
              class="text-red-600 text-center text-sm"
              v-if="submitStatus === 'INVALID'"
            >
              {{ error }}
            </p>
          </div>
        </div>
      </div>

      <!--buttons-->

      <div class="flex justify-end px-3 text-blue-700">
        <button
          @click="toggleIsVisible"
          class="hover:text-blue-900 focus:text-blue-900"
        >
          <router-link to="/"> Already have an account?</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable*/
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "RegisterPage",
  mixins: [validationMixin],

  data() {
    return {
      isVisible: true,
      stage:0,
      submitStatus: null,
      name: "",
      email: "",
      password: "",
      registrationData: null,
      error: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(10),
    },
    password: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
  },

  methods: {
    toggleIsVisible() {
      this.isVisible = !this.isVisible;
      //console.log("isVisible: " + this.isVisible);
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.registrationData = {
          fullname: this.name,
          email: this.email,
          password: this.password,
          role: "user",
        };
        this.axios
          .post(
            "https://nigis.onrender.com/api/v1/auth/register",
            this.registrationData
          )
          .then((res) => {
            this.sent = res;
            console.log(res);
            setTimeout(() => {
              this.$router.push("/welcome");
              this.$store.dispatch("currentUser", this.registrationData);

              this.submitStatus = "OK";
            }, 500);
          })
          .catch((error) => {
            this.error = error.response.data.msg;
            //console.log(error.response.data)
            this.submitStatus = "INVALID";
          });
      }
    },
    handleUpdate(model, event) {
      this[model] = event.target.value;
      console.log(this[model]);
    },
  },
};
</script>

<style scoped>
/* eslint-disable */

html,
body {
  overflow: hidden;
}

.input-field {
  @apply border-2  focus:border-green-700 hover:border-green-700 rounded-2xl focus:outline-none w-full h-10 px-2;
}
.error {
  @apply text-red-600;
}
</style>
