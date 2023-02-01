<!-- eslint-disable -->
<template>
  <div class="w-full bg-white fixed inset-0 p-4 overflow-auto">
    <img
      class="mx-auto w-20 h-20"
      src="@/assets/nigislogo.png"
      alt="nigislogo"
    />

    <div class="flex text-black font-bold text-base mb-2 mt-10">
      Level {{ getCurrentUser.adminLevel }} Users
    </div>

    <div
      v-if="loading"
      class="flex bg-middey-light justify-center items-center py-28"
    >
      <Spinner />
    </div>
    <div
      v-else
      class="block bg-white table-wrapper mb-5 w-full rounded-xl shadow-xl overflow-x-auto pb-6"
    >
      <table class="w-full items-center table-auto">
        <thead>
          <tr class="font-bold bg-green-200 text-dark">
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">ID</th>

            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              FullName
            </th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Stage
            </th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Land Purpose
            </th>

            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody
          v-if="users && users.length > 0"
          class="text-middey-text overflow-x-auto"
        >
          <tr
            v-for="(item, idx) in users"
            class="text-base font-medium hover:bg-gray-300 border-t border-gray-300"
            :key="idx"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ idx + 1 }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ item.fullname }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ item.stage }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ item.landPurpose }}
            </td>

            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              <router-link
                :to="`/submission-details/${item._id}`"
                class="flex justify-center items-center space-x-3 bg-[#0c8824] text-white px-2 py-3 rounded w-auto"
              >
                View user
              </router-link>
            </td>
          </tr>
        </tbody>
        <tbody v-else class="flex justify-center">
          <h1 class="text-center py-4 text-lg font-medium text-red-500">
            No result found
          </h1>
        </tbody>
      </table>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import ActionLoader from "../components/Loader.vue";
import Spinner from "../components/Spinner.vue";
import axiosInstance from "@/utils/useAxios.js";
import { mapGetters } from "vuex";

export default {
  name: "Admin",
  components: {
    Spinner,
    ActionLoader,
  },
  data() {
    return {
      searchQuery: "",
      users: [],
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.loading = true;

      axiosInstance
        .get(`/requirement/getallrequirement/${this.getCurrentUser.adminLevel}`)
        .then((res) => {
          this.loading = false;
          this.users = res.data.data;
          console.log(res.data.data);
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
