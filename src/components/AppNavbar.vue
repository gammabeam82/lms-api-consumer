<template>
  <b-container fluid>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="login" v-if="!isTokenExists">Login</b-nav-item>
          <b-nav-item to="books" v-if="isTokenExists">Books</b-nav-item>
          <b-nav-item to="logout" v-if="isTokenExists">Logout</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </b-container>
</template>


<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppNavbar',
    data () {
      return {}
    },
    methods: {
      ...mapGetters(['getToken'])
    },
    computed: {
      isTokenExists: function () {
        return this.getToken() !== null
      }
    }
  }
</script>


<style scoped lang="scss">

</style>
