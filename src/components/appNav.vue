<template>
  <div class="appNav">
    <v-app-bar>
      <v-container fluid class="pa-0">
        <v-row class="ma-0 justify-space-between">
          <v-col cols="12" md="3" class="d-flex pa-0 pl-10">
            <router-link to="#" class="logo">Mahmoud Mostafa</router-link>
          </v-col>
          <v-col cols="12" md="9" class="pa-0 pr-10">
            <ul class="d-flex justify-end align-center" v-gap="'40px'">
              <li class="active">
                <router-link to="#" class="active">Home</router-link>
              </li>
              <li>
                <router-link to="#">Projects</router-link>
              </li>
              <li>
                <router-link to="#">Skills</router-link>
              </li>
              <li>
                <router-link to="#">About</router-link>
              </li>
              <li>
                <router-link to="#">Contact</router-link>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "appNav",
};
</script>
<style scoped lang="scss">
::v-deep header {
  background: transparent !important;
}
.appNav {
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  ul {
    list-style-type: none;
    li {
      transition: all 0.2s ease-in-out;
    }
    li:hover,
    .active {
      transform: skew(10deg, 4deg);
    }
    li a {
      padding: 10px;
      border-radius: 10px;
      transition: all 0.2s ease-in-out;
    }
    li a:hover,
    .active {
      background: white;
      color: #020208;
      transform: skew(10deg, 4deg);
    }
  }
}
</style>
