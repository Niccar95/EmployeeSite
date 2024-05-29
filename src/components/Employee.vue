<script setup lang="ts">
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
</script>
<template>
  <article id="employeeCard">
    <h3>{{ props.first_name + " " + props.last_name }}</h3>
    <h4></h4>

    <figure id="avatarContainer">
      <img class="employeeAvatar" :src="props.avatar" />
    </figure>

    <h3 id="contact">
      Contact me
      <a :href="'mailto:' + props.email">{{ props.email }}</a>
    </h3>
  </article>
</template>
<style scoped>
#employeeCard {
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: center;
  padding: 2em;
  border: solid black 1px;

  @media screen and (min-width: 1200px) {
    width: 400px;
    align-items: center;
  }

  #avatarContainer {
    border: solid black 5px;
    border-radius: 50%;
    width: 200px;
    height: 200px;

    .employeeAvatar {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
