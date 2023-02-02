<!-- eslint-disable -->
<template>
  <div>
    <div
      class="sm:w-10/12 w-[95%] h-fit rounded-3xl px-6 py-10 m-auto my-10 sm:mt-20 border-2 border-gray-500"
    >
      <div class="text-sm sm:text-lg space-y-3 sm:space-y-7">
        <div class="plot">
          <div
            class="form-group space-y-3"
            :class="{ 'form-group--error': $v.landSize.$error }"
          >
            <label
              class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
              for="age"
              :class="
                !$v.landSize.required && $v.landSize.$dirty
                  ? 'text-red-600'
                  : ''
              "
              ><b>Size of Land e.g 1 hectare</b></label
            >
            <input
              @change="handleUpdate(landSize, $event)"
              :class="
                !$v.landSize.required && $v.landSize.$dirty
                  ? 'border-red-600'
                  : ''
              "
              class="block form__input w-[50%] border-2 focus:border-gray-700 hover:border-gray-700 rounded-xl focus:outline-none h-10 sm:h-12 px-2"
              type="text"
              placeholder="e.g 28"
              name="plot"
              v-model.trim="landSize"
            />
          </div>
        </div>
        <!--plot no-->
        <p class="p-4">
          If land is outside filling an approval layout, fill any of this;
        </p>
        <div class="grid grid-cols-3 gap-6">
          <div class="">
            <div class="form-group space-y-3">
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for=""
                ><b>Plot No.</b></label
              >
              <input
                @change="handleUpdate(plotNo, $event)"
                class="block form__input input-field"
                type="number"
                name=""
              />
            </div>
          </div>

          <div class="">
            <div class="form-group space-y-3">
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for=""
                ><b>Block No.</b></label
              >
              <input
                @change="handleUpdate(blockNo, $event)"
                class="block form__input input-field"
                type="number"
                name=""
              />
            </div>
          </div>

          <div class="">
            <div class="form-group space-y-3">
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for=""
                ><b>Street No.</b></label
              >
              <input
                @change="handleUpdate(streetNo, $event)"
                class="block form__input input-field"
                type="number"
                name=""
              />
            </div>
          </div>
        </div>

        <p class="font-semibold">Is the land developed? if yes select "YES"</p>
        <div>
          <label class="container sm:text-lg text-sm mr-6 uppercase"
            >Yes
            <input
              type="checkbox"
              @click="toggleCheckbox"
              :checked="!isChecked"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container sm:text-lg text-sm uppercase"
            >No
            <input
              type="checkbox"
              @click="toggleCheckbox"
              :checked="isChecked"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div :class="isChecked ? 'hidden' : 'block'" class="space-y-4">
          <div
            class="form-group space-y-3"
            :class="
              !isChecked
                ? { 'form-group--error': $v.developedDesc.$error }
                : ($v.developedDesc.$model = 'Nil')
            "
          >
            <p
              class=""
              :class="
                !$v.developedDesc.required && $v.developedDesc.$dirty
                  ? 'text-red-600'
                  : ''
              "
            >
              State details and include estimate value of improvement
            </p>
            <textarea
              @change="handleUpdate(developedDesc, $event)"
              :class="
                !$v.developedDesc.required && $v.developedDesc.$dirty
                  ? 'border-red-600'
                  : ''
              "
              placeholder="Provide the estimate value of improvement ...."
              class="resize-none w-full h-24 sm:h-32 outline-none border hover:border-gray-700 px-4 rounded-md"
              v-model.trim="developedDesc"
            ></textarea>
          </div>

          <div class="pdf">
            <div class="form-group space-y-3">
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for=""
                ><b>Attach Annexure II (pdf Format)</b></label
              >
              <input
                @change="handleFilesUpdate(annexII, $event)"
                class="block form__input"
                type="file"
                name=""
                required
              />
            </div>
          </div>
        </div>

        <p class="font-semibold">
          Is the land under-developed? if yes select "YES"
        </p>
        <div>
          <label class="container sm:text-lg text-sm mr-6 uppercase"
            >Yes
            <input type="checkbox" @click="toggleBox" :checked="!isSelected" />
            <span class="checkmark"></span>
          </label>
          <label class="container sm:text-lg text-sm uppercase"
            >No
            <input type="checkbox" @click="toggleBox" :checked="isSelected" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div :class="isSelected ? 'hidden' : 'block'" class="space-y-4">
          <div
            class="form-group space-y-3"
            :class="
              !isSelected
                ? { 'form-group--error': $v.nodevelopedDesc.$error }
                : ($v.nodevelopedDesc.$model = 'Nil')
            "
          >
            <p
              class=""
              :class="
                !$v.nodevelopedDesc.required && $v.nodevelopedDesc.$dirty
                  ? 'text-red-600'
                  : ''
              "
            >
              State estimate value of improvements offered and time required for
              erection
            </p>
            <textarea
              @change="handleUpdate(nodevelopedDesc, $event)"
              :class="
                !$v.nodevelopedDesc.required && $v.nodevelopedDesc.$dirty
                  ? 'border-red-600'
                  : ''
              "
              placeholder="Provide the estimate value of improvement ...."
              class="resize-none w-full h-24 sm:h-32 outline-none border px-4 border-gray-700 rounded-md"
            ></textarea>
          </div>
        </div>
        <!---->
        <p class="font-semibold">
          Is the land required in connection with minning leases? if yes select
          "YES"
        </p>
        <div>
          <label class="container sm:text-lg text-sm mr-6 uppercase"
            >Yes
            <input
              type="checkbox"
              @click="toggleLeaseBox"
              :checked="!isLease"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container sm:text-lg text-sm uppercase"
            >No
            <input type="checkbox" @click="toggleLeaseBox" :checked="isLease" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div :class="isLease ? 'hidden' : 'block'">
          <div class="space-y-3">
            <div class="gap-4 grid grid-cols-2">
              <div
                class="space-y-3"
                :class="
                  !isLease
                    ? { 'form-group--error': $v.expiryDate.$error }
                    : ($v.expiryDate.$model = 'Nil')
                "
              >
                <p
                  :class="
                    !$v.expiryDate.required && $v.expiryDate.$dirty
                      ? 'text-red-600'
                      : ''
                  "
                >
                  Date of expiry of mining leases
                </p>
                <date-picker
                  class=""
                  v-model="expiryDate"
                  valueType="format"
                ></date-picker>
              </div>

              <div class="pdf">
                <div class="form-group space-y-3">
                  <label
                    class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                    for=""
                    ><b>Attach Mining Lease Certificate</b></label
                  >
                  <input
                    @change="handleFilesUpdate(miningLeaseCert, $event)"
                    class="block form__input"
                    type="file"
                    name=""
                  />
                </div>
              </div>
            </div>
          </div>
          <!--length-->
          <div class="length">
            <div
              class="form-group space-y-3"
              :class="
                !isLease
                  ? { 'form-group--error': $v.termLength.$error }
                  : ($v.termLength.$model = '00')
              "
            >
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for="length"
                :class="
                  !$v.termLength.required && $v.termLength.$dirty
                    ? 'text-red-600'
                    : ''
                "
                ><b>Length of Term Required for Lease(in years)</b></label
              >
              <input
                @change="handleUpdate(termLength, $event)"
                :class="
                  !$v.termLength.required && $v.termLength.$dirty
                    ? 'border-red-600'
                    : ''
                "
                class="block form__input w-[50%] border-2 focus:border-gray-700 hover:border-gray-700 rounded-xl focus:outline-none h-12 px-2"
                type="number"
                placeholder="e.g 28"
                name="length"
                v-model.trim="termLength"
              />
            </div>
          </div>
        </div>
        <!---->
   

        <div>
          I enclose here with a deposit of &#8358;
          <input
            type="number"
            @change="handleUpdate(deposited, $event)"
            class="foot-input mx-4"
            v-model="deposited"
            name="deposit"
            :class="
              !$v.deposited.required && $v.deposited.$dirty
                ? 'border-red-600'
                : ''
            "
          />
          for <input type="text" class="mx-4 foot-input" /> use
        </div>

        <div>
          <label class="container sm:text-lg text-sm mr-6 leading-10">
            I agree to forfeit fifty percent (50%) of this fees (where
            applicable) subsequently paid if i withdrawn my applicattion for
            reason other than death, bankruptcy or other extenuating
            circumstances which occur between acceptance of offer/allocation and
            final issue of the Certificate of Occupancy
            <input
              type="checkbox"
              @click="toggleAgreement"
              @change="handleUpdate(isAgree, $event)"
              :checked="isAgree"
              :class="isAgree ? (agreed = true) : (agreed = '')"
              v-model="agreed"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <!---->
        <div>
          <label class="container sm:text-lg text-sm mr-6 leading-10">
            I hereby declare that all answer to the question listed above and
            fact given by me in this form and the annexure hereto are true and
            complete
            <input
              type="checkbox"
              @click="toggleDeclaration"
              @change="handleUpdate(isDeclare, $event)"
              :checked="isDeclare"
              :class="isDeclare ? (declared = true) : (declared = '')"
              v-model="declared"
            />
            <span class="checkmark"></span>
          </label>
        </div>

        <div
          class="flex lg:justify-between space-y-4 flex-col lg:flex-row lg:items-center"
        >
          <p>
            Date: <span class="ml-3 underline">{{ date }}</span>
          </p>

          <div class="pic">
            <div class="form-group space-y-3">
              <label
                class="block form__label font-thin text-sm sm:text-lg text-zinc-800"
                for=""
                ><b>Attach A Signature</b></label
              >
              <input
                @change="handleContentUpload('signature', $event)"
                class="block form__input"
                type="file"
                name=""
                accept="image/*"
                required
              />
            </div>
          </div>
        </div>
        <!--sdg-->
      </div>
    </div>
    <div class="sm:w-10/12 w-[95%] relative mx-auto h-24 p-6">
      <div class="absolute top-0 left-0">
        <button
          @click.prevent="toggleForm"
          class="submit bg-white border border-gray-700 text-sm sm:text-xl px-6 sm:px-8 py-3 hover:bg-[#0c8824] hover:border-0 rounded-2xl hover:text-white text-gray-700 font-semibold mx-auto"
          type="submit"
        >
          Previous
        </button>
      </div>
      <div
        class="absolute top-0 flex flex-col w-2/4 sm:w-1/4 space-y-6 right-0"
      >
        <button
          @click.prevent="submit"
          class="submit bg-white border border-gray-700 text-sm sm:text-xl px-6 sm:px-8 py-3 hover:bg-[#0c8824] hover:border-0 rounded-2xl hover:text-white text-gray-700 font-semibold mx-auto"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
        >
          <span v-if="loading"> Uploading... </span>
          <span v-else>Submit </span>
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
import { required } from "vuelidate/lib/validators";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapGetters } from "vuex";
import * as filestack from "filestack-js";
import axios from "../utils/useAxios";

export default {
  name: "FormTwo",
  mixins: [validationMixin],
  props: ["handleUpdate", "handleFilesUpdate", "toggleForm"],
  components: { DatePicker },

  data() {
    return {
      deposited: "",
      declared: "",
      isLeaseFile: false,
      date: "",
      isDeclare: false,
      isAgree: false,
      isEstate: false,
      estProposal: "",
      isCommercial: false,
      isIndustry: false,
      devProposal: "",
      termLength: "",
      miningLeaseCert: "",
      expiryDate: null,
      isLease: true,
      isChecked: true,
      isSelected: true,
      developedDesc: "",
      nodevelopedDesc: "",
      plotNo: "",
      streetNo: "",
      blockNo: "",
      fullForm: null,
      landSize: "",
      landPurpose: "",
      isSizeRange: false,
      submitStatus: null,
      signature: "",
      agreed: "",
      loading: false,
      filestackApiKey: "Ac2jWdyDbSxi9LWXS4uMpz",
    };
  },
  validations: {
    agreed: {
      required,
    },
    declared: {
      required,
    },

    termLength: {
      required,
    },
    landSize: {
      required,
    },
    developedDesc: {
      required,
    },
    nodevelopedDesc: {
      required,
    },
    expiryDate: {
      required,
    },
    deposited: {
      required,
    },
  },
  computed: {
    ...mapGetters(["getCurrentUser", "getFormData"]),
  },
  created() {
    const dt = new Date();
    let month = dt.toLocaleString("default", { month: "long" });
    let day = dt.getDate();
    let year = dt.getFullYear();

    this.date = `${day} ${month} ${year}`;
  },
  methods: {
    toggleAgreement() {
      this.isAgree = !this.isAgree;
    },
    toggleDeclaration() {
      this.isDeclare = !this.isDeclare;
    },
    toggleCheckbox() {
      this.isChecked = !this.isChecked;
      this.developedDesc = "";
    },
    toggleBox() {
      this.isSelected = !this.isSelected;
      this.nodevelopedDesc = "";
    },
    toggleLeaseBox() {
      this.isLease = !this.isLease;
      this.expiryDate = "";
      this.miningLeaseCert = "";
      this.termLength = "";
    },
    toggleIndustry() {
      this.isIndustry = !this.isIndustry;
      this.devProposal = "";
    },
    toggleEstate() {
      this.isEstate = !this.isEstate;
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
    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";

        this.fullForm = {
          ...this.getFormData,
          developedDesc: this.developedDesc,
          nodevelopedDesc: this.nodevelopedDesc,
          plot_number: this.plotNo,
          street_number: this.streetNo,
          block_number: this.blockNo,
          land_size: this.landSize,
          termLength: this.termLength,
          expiryDate: this.expiryDate,
          signature: this.signature,
          user: this.getCurrentUser._id,
        };
        this.$router.push("/tracker");

        this.submitStatus = "OK";
        // setTimeout(() => {

        // }, 500);
        axios
          .post("requirement/submit", this.fullForm)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
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

.foot-input {
  @apply border-2  focus:border-gray-700 hover:border-gray-700 rounded-xl focus:outline-none w-2/12 h-10 sm:h-12 px-2;
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

/* The container */
.container {
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #ccc;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
<!--eslint-disable-->
