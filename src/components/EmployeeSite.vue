<script setup lang="ts">
import type { IEmployeeState } from "@/models/IEmployeeState";
import { allEmployeeData } from "@/services/EmployeeService";
import { onMounted, ref } from "vue";
import Employees from "./Employees.vue";
import Pagination from "./Pagination.vue";

const employeeState = ref<IEmployeeState>({
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [],
});

onMounted(async () => {
  employeeState.value = await allEmployeeData();
});

const handlePageChange = async (page: number) => {
  employeeState.value = await allEmployeeData(page);
};
</script>

<template>
  <header id="landingPage">
    <nav>
      <img src="./icons/original.png" />
    </nav>

    <div id="introSection">
      <h1 class="mainHeading">Meet our Team</h1>
      <button>Meet us</button>
    </div>
  </header>

  <h2>Development Team</h2>
  <Employees :data="employeeState.data"></Employees>
  <Pagination
    :page="employeeState.page"
    :per_page="employeeState.per_page"
    :total="employeeState.total"
    :total_pages="employeeState.total_pages"
    :data="employeeState.data"
    @changePage="handlePageChange"
  ></Pagination>
</template>

<style lang="scss" scoped>
#landingPage {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(229, 229, 229, 0.25),
      // Darker shade of black
      rgba(0, 0, 0, 0.4) // Lighter shade of black
    ),
    url("../assets/img/startup-594090.jpg");
  background-position: center;
  background-size: cover;

  nav {
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    align-items: center;
    gap: 5em;
    width: 100%;
    padding: 2em;
    @include glassEffect;

    img {
      width: 96px;
    }
  }

  #introSection {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3em;
    width: 70%;

    @include desktop {
      align-items: center;
    }

    .mainHeading {
      text-align: start;
      font-size: 3em;
      color: white;
      font-weight: 900;
      text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

      @include desktop {
        font-size: 4.5em;
      }
    }
    button {
      @include primaryButton;
      background-color: rgb(231, 231, 231);
    }

    button:hover {
      @include primaryButtonHover;
    }
  }
}

h2 {
  text-align: center;
  font-weight: 900;
}
</style>
