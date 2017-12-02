<template>
  <footer>
    <b-container fluid>
      <b-row>
        <b-col>
          <div class="content">
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="bottom text-center">
            2017
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'AppFooter',
    data () {
      return {}
    }
  }
</script>


<style scoped lang="scss">
  footer {
    .content {
      min-height: 20vh;
      background-color: #383838;
    }
    .bottom {
      background-color: #000;
      color: #E8E8E8;
      padding: 1vh 0;
    }
  }
</style>
