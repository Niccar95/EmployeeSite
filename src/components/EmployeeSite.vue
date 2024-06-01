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
      <p class="introduction">
        we pride ourselves on our team of highly skilled and dedicated web
        developers. Our team is composed of professionals with diverse expertise
        in various web technologies and development practices.
      </p>
      <a href="#employeeSection"><button>Meet us</button></a>
    </div>
  </header>

  <h2 class="devHeading">Development Team</h2>
  <Employees id="employeeSection" :data="employeeState.data"></Employees>
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
      to top,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.6),
      rgba(229, 229, 229, 0.4)
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
    @include glass-effect;

    img {
      width: 96px;
    }
  }

  #introSection {
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
    width: 100%;

    @include tablet {
      width: 75%;
      align-items: center;
      gap: 2em;
    }

    @include desktop {
      width: 60%;
      align-items: center;
      gap: 2em;
    }

    .mainHeading {
      font-family: $heading-font-family;
      text-align: start;
      font-size: 2.5em;
      color: $secondary-text-color;
      font-weight: $heading-font-weight;

      @include tablet {
        font-size: 4.5em;
      }

      @include desktop {
        font-size: 4.5em;
      }
    }

    .introduction {
      color: $secondary-text-color;
      line-height: 1.8em;
      font-weight: 500;
      font-size: $base-font-size;
      margin-bottom: 2em;

      @include tablet {
        font-size: 1.4em;
      }

      @include desktop {
        font-size: 1.4em;
      }
    }

    button {
      @include primary-button;
    }

    button:hover {
      @include primary-button-hover;
    }
  }
}

.devHeading {
  font-family: $heading-font-family;
  text-align: center;
  font-weight: $heading-font-weight;
}
</style>
