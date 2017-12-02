<template>
</template>

<script>
  import { mapActions } from 'vuex'
  import { TOKEN_STORAGE_KEY } from '../config'
  import { LOGOUT } from '../events/events_type'
  import eventBus from '../events/event_bus'

  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'Logout',
    created: function () {
      this.setToken(null)
      this.$localStorage.remove(TOKEN_STORAGE_KEY)
      this.$router.push({path: '/'})
      eventBus.$emit(LOGOUT)
    },
    methods: {
      ...mapActions(['setToken'])
    }
  }
</script>
