<script setup lang="ts">
import { ref } from "vue";

interface oneEmployeeProp {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const props = defineProps<oneEmployeeProp>();

defineEmits<{
  (
    e: "showEmployee",
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
  ): void;
}>();

const modalOpen = ref<boolean>(false);
</script>
<template>
  <article id="employeeCard" @click="modalOpen = true">
    <figure id="avatarContainer">
      <img class="employeeAvatar" :src="props.avatar" alt="avatar" />
    </figure>

    <h3>{{ props.first_name + " " + props.last_name }}</h3>
    <img class="contactIcon" src="./icons/envelope-solid.svg" />
  </article>

  <div id="modalBackground" v-if="modalOpen">
    <div id="modal">
      <section id="infoSection">
        <figure id="modalAvatarContainer">
          <img class="modalAvatar" :src="props.avatar" />
        </figure>

        <section id="linkContainer">
          <h3 id="contact">Contact me at:</h3>
          <a class="contactLink" :href="'mailto:' + props.email">{{
            props.email
          }}</a>
        </section>
      </section>

      <div id="buttonContainer">
        <button class="closeButton" @click="modalOpen = false">Close</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
#employeeCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  text-align: center;
  padding: 2em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  cursor: pointer;
  transition: background-color 0.2s ease;

  @media screen and (min-width: 1200px) {
    width: 400px;
    align-items: center;
  }

  #avatarContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid transparent;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    transition: border-color 0.2s ease;

    .employeeAvatar {
      border-radius: 50%;
      width: 95%;
      height: 95%;
      object-fit: cover;
    }
  }

  &:hover #avatarContainer {
    border: solid;
    border-color: #5333ed;
  }

  h3 {
    color: #5333ed;
  }

  .contactIcon {
    width: 20px;
  }
}

#employeeCard:hover {
  background-color: whitesmoke;
}

#modalBackground {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  #modal {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    position: relative;
    background-color: white;
    padding: 2em 1em 1em 2em;
    border-radius: 1em;
    width: 90%;

    @media screen and (min-width: 1200px) {
      width: 40%;
    }

    #infoSection {
      @media screen and (min-width: 1200px) {
        display: flex;
        align-items: center;
        gap: 3em;
      }

      #modalAvatarContainer {
        width: 200px;
        height: 200px;

        .modalAvatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .contactLink {
        text-decoration: none;
        color: #5333ed;
      }
    }

    #buttonContainer {
      display: flex;
      justify-content: flex-end;
      width: 100%;

      .closeButton {
        cursor: pointer;
        border: solid transparent;
        padding: 1em;
        display: inline-block;
        padding: 0.75em 1.5em;
        font-size: 1em;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 0.5em;
        transition: background-color 0.3s transform 0.2s ease;
      }

      .closeButton:hover {
        border-color: #5333ed;
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
