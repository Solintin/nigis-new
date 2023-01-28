<!-- eslint-disable -->
<template>
  <div>
    <div
      class="sm:w-10/12 w-[95%] h-fit rounded-3xl px-6 py-10 m-auto my-10 sm:mt-20 border-2 border-gray-500"
    >
      <div class="text-sm sm:text-lg space-y-3 sm:space-y-7">
        <!--full name-->
        <div class="name">
          <div
            class="form-group space-y-3"
            :class="{ 'form-group--error': $v.name.$error }"
          >
            <label
              class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
              for="name"
              :class="!$v.name.required && $v.name.$dirty ? 'text-red-600' : ''"
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
        </div>
        <!--Validate Age-->

        <div class="grid grid-cols-1 lg:grid-cols-10 sm:grid-cols-2 gap-6">
          <!--Age-->
          <div class="age">
            <div
              class="form-group space-y-3"
              :class="{ 'form-group--error': $v.age.$error }"
            >
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="age"
                :class="!$v.age.required && $v.age.$dirty ? 'text-red-600' : ''"
                ><b>Age</b></label
              >
              <input
                @change="handleUpdate(age, $event)"
                :class="
                  !$v.age.required && $v.age.$dirty ? 'border-red-600' : ''
                "
                class="block form__input input-field"
                type="number"
                min="1"
                placeholder="e.g 28"
                name="age"
                v-model.trim="age"
              />
            </div>
          </div>
          <!--Birth Certificate-->
          <div class="lg:col-span-3">
            <div class="form-group space-y-3">
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="birth"
                ><b>Birth Certificate</b></label
              >
              <input
                @change="handleContentUpload('birth', $event)"
                class="block form__input"
                type="file"
                name="birth"
                required
              />
            </div>
            <div class="error text-sm" v-if="isSizeRange">
              Image file should not be larger than 1MB
            </div>
          </div>
          <!--Phone Number-->
          <div class="phone lg:col-span-3">
            <div
              class="form-group space-y-3"
              :class="{ 'form-group--error': $v.gsm.$error }"
            >
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="phone-no"
                :class="!$v.gsm.required && $v.gsm.$dirty ? 'text-red-600' : ''"
                ><b>Enter Your Phone Number</b></label
              >
              <input
                @change="handleUpdate(gsm, $event)"
                :class="
                  !$v.gsm.required && $v.gsm.$dirty ? 'border-red-600' : ''
                "
                class="block form__input input-field"
                type="number"
                placeholder="091XXXXXXX"
                name="phone-no"
                v-model="gsm"
              />
            </div>
            <div class="error text-sm" v-if="!$v.gsm.minLength">
              Phone No should be
              {{ $v.gsm.$params.minLength.min }} Number.
            </div>
            <div class="error text-sm" v-if="!$v.gsm.maxLength">
              Phone No should be
              {{ $v.gsm.$params.maxLength.max }} Number.
            </div>
          </div>
          <!--Email Address-->
          <div class="ema lg:col-span-3">
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
          </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="nations">
            <div
              class="form-group space-y-3"
              :class="{ 'form-group--error': $v.nation.$error }"
            >
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="nation"
                :class="
                  !$v.nation.required && $v.nation.$dirty ? 'text-red-600' : ''
                "
                ><b>Nationality</b></label
              >
              <input
                @change="handleUpdate(nation, $event)"
                :class="
                  !$v.nation.required && $v.nation.$dirty
                    ? 'border-red-600'
                    : ''
                "
                class="block form__input input-field"
                type="text"
                name="nation"
                v-model.trim="nation"
              />
            </div>
          </div>
          <!--origine-->
          <div class="">
            <div
              class="form-group space-y-3"
              :class="{ 'form-group--error': $v.origin.$error }"
            >
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="origin"
                :class="
                  !$v.origin.required && $v.origin.$dirty ? 'text-red-600' : ''
                "
                ><b>State of Origin</b></label
              >
              <input
                @change="handleUpdate(origin, $event)"
                :class="
                  !$v.origin.required && $v.origin.$dirty
                    ? 'border-red-600'
                    : ''
                "
                class="block form__input input-field"
                type="text"
                name="origin"
                v-model.trim="origin"
              />
            </div>
          </div>
          <!---->
          <div class="occupations">
            <div
              class="form-group space-y-3"
              :class="{ 'form-group--error': $v.occupation.$error }"
            >
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="occupation"
                :class="
                  !$v.occupation.required && $v.occupation.$dirty
                    ? 'text-red-600'
                    : ''
                "
                ><b>Occupation</b></label
              >
              <input
                @change="handleUpdate(occupation, $event)"
                :class="
                  !$v.occupation.required && $v.occupation.$dirty
                    ? 'border-red-600'
                    : ''
                "
                class="block form__input input-field"
                type="text"
                name="occupation"
                v-model.trim="occupation"
              />
            </div>
          </div>
          <!--poste-->
          <div class="">
            <div class="form-group space-y-3">
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="post"
                ><b>Post Held</b></label
              >
              <input
                @change="handleUpdate(post, $event)"
                class="block form__input input-field"
                type="text"
                name="post"
                v-model.trim="post"
              />
            </div>
          </div>
        </div>
        <!--address-->
        <div class="add">
          <div
            class="form-group space-y-3"
            :class="{ 'form-group--error': $v.address.$error }"
          >
            <label
              class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
              for="add"
              :class="
                !$v.address.required && $v.address.$dirty ? 'text-red-600' : ''
              "
              ><b>Enter Your Contact Address in Nigeria</b></label
            >
            <input
              @change="handleUpdate(address, $event)"
              :class="
                !$v.address.required && $v.address.$dirty
                  ? 'border-red-600'
                  : ''
              "
              class="block form__input input-field"
              type="text"
              name="add"
              v-model.trim="address"
            />
          </div>
        </div>
        <p class="font-semibold">Registration of Business Name Act</p>
        <div class="m-auto">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border rounded-md border-gray-600 w-full p-6 h-fit"
          >
            <div class="">
              <div class="form-group space-y-3">
                <label
                  class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                  for="regCert"
                  ><b>Reg. Certificate</b></label
                >
                <input
                  @change="handleContentUpload('regCertificate', $event)"
                  class="block form__input"
                  type="file"
                  name="regCert"
                  accept="image/*"
                />
              </div>
              <div class="error text-sm" v-if="isSizeRange">
                Image file should not be larger than 1MB
              </div>
            </div>
            <div class="act">
              <div class="form-group space-y-3">
                <label
                  class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                  for="act"
                  ><b>Reg. Name</b></label
                >
                <input
                  @change="handleUpdate(bizRegistration, $event)"
                  class="block form__input input-field"
                  type="text"
                  name="act"
                  v-model.trim="bizRegistration"
                />
              </div>
            </div>

            <div class="regnos">
              <div class="form-group space-y-3">
                <label
                  class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                  for="regnos"
                  ><b>Reg. Number</b></label
                >
                <input
                  @change="handleUpdate(regNo, $event)"
                  class="block form__input input-field"
                  type="number"
                  name="regnos"
                />
              </div>
            </div>

            <div class="regyr">
              <div class="form-group space-y-3">
                <label
                  class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                  for="regyr"
                  ><b>Reg. Year</b></label
                >
                <input
                  @change="handleUpdate(regYear, $event)"
                  class="block form__input input-field"
                  type="number"
                  name="act"
                />
              </div>
            </div>
          </div>
        </div>
        <p class="font-semibold">
          Agent of Registration Particulars. Power of Attorney(if any)
        </p>
        <div class="m-auto">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-6 border rounded-md border-gray-600 w-full p-6 h-fit"
          >
            <div class="">
              <div class="form-group space-y-3">
                <label
                  class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                  for=""
                  ><b>Name</b></label
                >
                <input
                  @change="handleUpdate(attorneyName, $event)"
                  class="block form__input input-field"
                  type="text"
                  name=""
                />
              </div>
            </div>

            <div class="">
              <div class="form-group space-y-3">
                <label
                  class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                  for=""
                  ><b>Address</b></label
                >
                <input
                  @change="handleUpdate(attorneyAddress, $event)"
                  class="block form__input input-field"
                  type="text"
                  name=""
                />
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div
            class="form-group space-y-3"
            :class="{ 'form-group--error': $v.landPurpose.$error }"
          >
            <label
              class="block form__label font-semibold text-sm sm:text-lg text-zinc-800"
              for=""
              :class="
                !$v.landPurpose.required && $v.landPurpose.$dirty
                  ? 'text-red-600'
                  : ''
              "
              >Specific Purpose for which Land is Required</label
            >
            <input
              @change="handleUpdate(landPurpose, $event)"
              :class="
                !$v.landPurpose.required && $v.landPurpose.$dirty
                  ? 'border-red-600'
                  : ''
              "
              class="block form__input input-field"
              type="text"
              name=""
              v-model.trim="landPurpose"
            />
          </div>
        </div>

        <!--sdg-->
      </div>
    </div>
    <div class="sm:w-10/12 w-[95%] relative mx-auto h-24 p-6">
      <div
        class="absolute top-0 flex flex-col w-2/4 sm:w-1/4 space-y-6 right-0"
      >
        <button
          @click.prevent="submit"
          class="submit bg-white border border-gray-700 text-sm sm:text-xl px-6 sm:px-8 py-3 hover:bg-[#0c8824] hover:border-0 rounded-2xl hover:text-white text-gray-700 font-semibold mx-auto"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
        >
          Next
        </button>
        <p
          class="typo__p sm:text-sm text-center text-[12px]"
          v-if="submitStatus === 'OK'"
        >
          Thanks for your submission!
        </p>
        <p
          class="text-red-600 sm:text-sm text-[12px] text-center"
          v-if="submitStatus === 'ERROR'"
        >
          Please fill the form correctly.
        </p>
        <p
          class="typo__p sm:text-sm text-center text-[12px]"
          v-if="submitStatus === 'PENDING'"
        >
          Sending...
        </p>
      </div>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { validationMixin } from "vuelidate";
import * as filestack from "filestack-js";
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  name: "FormOne",
  mixins: [validationMixin],
  props: ["handleUpdate", "handleFilesUpdate", "toggleForm"],

  data() {
    return {
      getFormData: null,
      occupation: "",
      post: "",
      nation: "",
      origin: "",
      name: "",
      email: "",
      age: "",
      birth: "",
      gsm: "",
      address: "",
      bizRegistration: "",
      regNo: "",
      regYear: "",
      regCertificate: "",
      attorneyAddress: "",
      attorneyName: "",
      landPurpose: "",
      isSizeRange: false,
      submitStatus: null,
      loading: false,
      filestackApiKey: "Ac2jWdyDbSxi9LWXS4uMpz",
    };
  },
  validations: {
    landPurpose: {
      required,
    },
    address: {
      required,
    },
    occupation: {
      required,
    },

    origin: {
      required,
    },
    nation: {
      required,
    },
    name: {
      required,
      minLength: minLength(10),
    },
    age: {
      required,
    },
    gsm: {
      required,
      maxLength: maxLength(11),
      minLength: minLength(11),
    },
    email: {
      required,
      email,
    },
  },
  computed: {
    ...mapGetters["getCurrentUser"],
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.getFormData = {
          name: this.name,
          email: this.email,
          age: this.age,
          tel: this.gsm,
          post: this.post,
          nation: this.nation,
          origin: this.occupation,
          bizRegistration: this.bizRegistration,
          regNo: this.regNo,
          regYear: this.regYear,
          attorneyAddress: this.attorneyAddress,
          attorneyName: this.attorneyName,
          landPurpose: this.landPurpose,
        };
        setTimeout(() => {
          this.submitStatus = "OK";
          this.toggleForm();
        }, 500);
      }
    },
    async handleContentUpload(model, event) {
      const file = event.target.files[0];
      console.log(file);
      // const formData = new FormData();
      // formData.append("image", file);
      let fileObject = new File([file], "file.png", {
        type: "image/jpeg",
      });
      this.loading = true;

      const client = filestack.init(this.filestackApiKey);
      await client.upload(fileObject).then((data) => {
        console.log(data.url);
        this.loading = false;
        console.log("file Taken successfully");
        this[model] = data.url;
      });
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
