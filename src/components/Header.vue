<template>
  <div id="header" class="clearfix">
    <b-navbar type="dark" variant="primary" fixed="top">
      <b-navbar-brand >
          Single SPA
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/"> Home </router-link>
          <router-link to="/vue"> Vue-App </router-link>
          <router-link to="/login"> Login-Page </router-link>
        </b-nav-item>
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em> {{ username }}</em>
          </template>
          <b-dropdown-item v-on:click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  methods: {
    logout() {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
      window.history.pushState(null, null, '/login');
    },
  },
  computed: {
    username() {
      const user = sessionStorage.getItem('user');
      return user ? JSON.parse(user).username : '';
    },
  },
};
</script>