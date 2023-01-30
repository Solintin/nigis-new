<!-- eslint-disable -->
<template>
  <div class="w-full bg-white fixed inset-0 p-4 overflow-auto">
    <div v-if="isModal" class="fixed z-10 inset-0">
      <div class="bg-[#00000090] fixed inset-0 grid place-content-center">
        <div class="bg-white rounded-xl p-4 grid place-content-center">
          <div class="w-[600px] h-[600px]">
            <img :src="currentImage" alt="" />
          </div>
          <button
            @click="isModal = !isModal"
            class="font-bold text-lg text-red-500 mb-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="loading"
      class="bg-middey-light rounded-xl flex justify-center items-center mt-10 py-28"
    >
      <Spinner />
    </div>
    <div
      v-else
      class="mb-5 w-full bg-middey-light rounded-xl shadow-xl text-middey-text pb-6 mt-10 font-medium"
    >
      <div
        class="flex font-bold rounded-t-xl text-base bg-green-500 text-white p-4"
      >
        Submission Details
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Full Name</div>
          <div class="col-span-8">
            {{ user.fullname }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Email</div>
          <div class="col-span-8">
            {{ user.email }}
          </div>
        </div>
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Nationality</div>
          <div class="col-span-8">{{ user.nationality }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Land Purpose</div>
          <div class="col-span-8">
            {{ user.landPurpose || "null" }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Business Name</div>
          <div class="col-span-8">{{ user.business_name || "False" }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Business Number</div>
          <div class="col-span-8">
            {{ user.business_number || "null" }}
          </div>
        </div>
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Business Reg Agent Name</div>
          <div class="col-span-8">
            {{ user.business_reg_agent_name || "null" }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Business Reg Agent Address</div>
          <div class="col-span-8">
            {{ user.business_reg_agent_address || "null" }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Business Reg Year</div>
          <div class="col-span-8">
            {{ user.business_reg_year || "null" }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">State</div>
          <div class="col-span-8">
            {{ user.state || "null" }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Phone Number</div>
          <div class="col-span-8">
            {{ user.phone || "null" }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">plot_number</div>
          <div class="col-span-8">
            {{ user.plot_number || "null" }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Is land developed?</div>
          <div class="col-span-8">
            {{ user.isLandDeveloped || "null" }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Is land for Minning?</div>
          <div class="col-span-8">
            {{ user.isLandForMining || "null" }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Occupation</div>
          <div class="col-span-8">
            {{ user.occupation || "null" }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Post Held</div>
          <div class="col-span-8">
            {{ user.post_held || "null" }}
          </div>
        </div>
      </div>

      <div v-if="user.birth_cert" class="p-4">
        <p class="font-bold">Birth</p>
        <img
          :src="user.birth_cert"
          class="rounded mt-5 h-[400px] w-[400px] object-cover"
          alt=""
        />
      </div>
      <div v-if="user.business_cert" class="p-4">
        <p class="font-bold">Business Registration Cert</p>
        <img
          :src="user.business_cert"
          class="rounded mt-5 h-[400px] w-[400px] object-cover"
          alt=""
        />
      </div>
      <div v-if="user.signature" class="p-4">
        <p class="font-bold">Signature</p>
        <img
          :src="user.signature"
          class="rounded mt-5 h-[400px] w-[400px] object-cover"
          alt=""
        />
      </div>

      <div class="flex font-bold text-base bg-middey-dark text-white p-4">
        User Submisssion Status Action
      </div>
      <div class="p-4">
        <input
          type="text"
          name="sarch"
          required
          placeholder="Message"
          v-model.trim="message"
          class="bg-middey-light border w-full rounded outline-none flex-1 p-3"
        />
      </div>

      <div class="p-4 flex space-x-4 items-center">
        <button
          @click="handleUserReject"
          class="flex justify-center items-center space-x-3 bg-red-500 text-white px-8 py-3 rounded w-auto"
          :class="loading ? 'cursor-not-allowed' : ''"
          :disabled="loading"
        >
          <ActionLoader v-if="loading" />

          <div v-else class="">Reject</div>
        </button>
        <button
          @click="handleUserApprove"
          class="flex justify-center items-center space-x-3 bg-[#0c8824] text-white px-8 py-3 rounded w-auto"
          :class="loading ? 'cursor-not-allowed' : ''"
          :disabled="loading"
        >
          <ActionLoader v-if="loading" />

          <div v-else class="">Approve</div>
        </button>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import ActionLoader from "../components/ActionLoader.vue";
import Spinner from "../components/Spinner.vue";
import axiosInstance from "@/utils/useAxios.js";

export default {
  name: "UserDetails",
  components: {
    Spinner,
    ActionLoader,
  },
  data() {
    return {
      user: {},
      currentImage: null,
      acct_balance: null,
      loading: true,
      isModal: false,
      message: "",
    };
  },
  computed: {
    documentId() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.getUserDetails();
  },
  methods: {
    getUserDetails() {
      this.loading = true;
      axiosInstance
        .get(`/requirement/getsinglerequirement/${this.documentId}`)
        .then((res) => {
          this.loading = false;
          (this.user = res.data.data), console.log(this.user);
          console.log(res.data.data);
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
    handleUserReject() {
      this.loading = true;
      const action = {
        userId: this.user.user,
        documentId: this.user._id,
        message: this.message,
        reject: this.user.stage,
      };
      axiosInstance
        .post("/requirement/update", action)
        .then((res) => {
          this.loading = false;
          this.message = "";
          alert("User Submission Rejected");
          this.$router.push("/submission/");
          console.log(res);
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
    handleUserApprove() {
      this.loading = true;
      const action = {
        userId: this.user.user,
        documentId: this.user._id,
        message: "",
        reject: "",
      };
      axiosInstance
        .post("/requirement/update", action)
        .then((res) => {
          this.loading = false;
          this.message = "";
          alert("User Submission Approved Successfully");
          this.$router.push("/submission/");
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
