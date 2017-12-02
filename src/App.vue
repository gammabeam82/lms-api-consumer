<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppNavbar from './components/AppNavbar'

  export default {
    name: 'app',
    components: {
      'app-navbar': AppNavbar
    }
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

  .fullscreen {
    min-height: 68vh;
    .row {
      margin-top: 2vh;
    }
  }

  * {
    outline: none;
  }
</style>
