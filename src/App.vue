<template>
  <div id="layout-app">
    <Header></Header>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  components: {
    Header,
  },
  beforeCreate() {
    /*if (!sessionStorage.getItem("token")) {
      window.history.pushState(null, null, "/login");
    }*/
  },
};
</script>
