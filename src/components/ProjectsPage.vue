<template>
  <div class="ProjectsPage w-100">
    <!-- <v-container fluid class="pa-0 w-100 d-flex justify-center align-center">
      <h2>MAHMOUD</h2>
      <img src="./../assets/moon2.webp" class="w-100" id="moon" alt="" />
    </v-container> -->
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
};
</script>

<style scoped lang="scss">
.ProjectsPage img,
h2 {
  // position: absolute;
}

#moon {
  mix-blend-mode: screen;
  transform: translateY(108px);
}
h2 {
  color: #fff;
  font-size: 20px;
  transform: translateY(-100px);
}
</style>
