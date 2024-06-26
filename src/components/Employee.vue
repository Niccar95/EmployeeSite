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

    <h3 class="avatarName">{{ props.first_name + " " + props.last_name }}</h3>
    <img class="contactIcon" src="./icons/envelope-solid.svg" />
  </article>

  <div id="modalBackground" v-if="modalOpen">
    <div id="modal">
      <section id="infoSection">
        <figure id="modalAvatarContainer">
          <img class="modalAvatar" :src="props.avatar" />
        </figure>

        <section id="linkContainer">
          <h3 class="contact">Contact me at:</h3>
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
<style lang="scss" scoped>
#employeeCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  text-align: center;
  width: 100%;
  padding: 2em;
  box-shadow: $shadow;
  border-radius: 1em;
  cursor: pointer;
  transition: background-color 0.2s ease;

  @include tablet {
    width: 400px;
  }

  @include desktop() {
    width: 400px;
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
    border-color: #2e92fb;
  }

  .avatarName {
    color: $tertiary-text-color;
  }

  .contactIcon {
    width: 20px;
  }
}

#employeeCard:hover {
  background-color: $primary-hover-color;
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
    gap: 2em;
    position: relative;
    background-color: $primary-color;
    padding: 2em 1em 1em 2em;
    border-radius: 1em;
    width: 90%;
    box-shadow: $shadow;

    @include tablet {
      width: 60%;
    }

    @include desktop {
      width: 40%;
    }

    #infoSection {
      @include tablet {
        display: flex;
        align-items: center;
        gap: 3em;
      }

      @include desktop {
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

      #linkContainer {
        padding: 0.5em;

        .contact {
          font-weight: bold;
        }
        .contactLink {
          text-decoration: none;
          padding-bottom: 0.5em;
          border-bottom: 2px solid transparent;
          color: $link-color;
          transition: border-bottom-color 0.2s ease-in;
        }

        .contactLink:hover {
          border-bottom-color: $link-color;
        }
      }
    }

    #buttonContainer {
      display: flex;
      justify-content: flex-end;
      width: 100%;

      .closeButton {
        @include primary-button;
      }

      .closeButton:hover {
        @include primary-button-hover;
      }
    }
  }
}
</style>
