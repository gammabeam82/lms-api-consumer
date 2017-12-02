<template>
  <b-container fluid class="fullscreen">
    <b-row>
      <b-col>

        <div class="alert-container">
          <b-alert
            v-bind:variant="alertVariant"
            v-bind:show="isAlertVisible"
            v-on:dismissed="isAlertVisible=false"
            dismissible
          >
            {{ alertMsg }}
          </b-alert>
        </div>

        <b-form v-on:submit.prevent="formSubmit">
          <b-form-group label="Username:">
            <b-form-input type="text" v-model="form.username" required>
            </b-form-input>
          </b-form-group>
          <b-form-group label="Password:">
            <b-form-input type="password" v-model="form.password" required>
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" v-bind:disabled="!isButtonActive">Submit</b-button>
        </b-form>

      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
  import jwtDecode from 'jwt-decode'
  import { mapActions } from 'vuex'
  import { TOKEN_STORAGE_KEY } from '../config'
  import { LOGIN, LOGOUT } from '../events/events_type'
  import eventBus from '../events/event_bus'
  import getAuthToken from '../http/get_token'

  const DANGER = 'danger'
  const SUCCESS = 'success'

  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'Login',
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        valid: false,
        alertMsg: '',
        alertVariant: null,
        isAlertVisible: false,
        isLoading: false
      }
    },
    created: function () {
      this.setToken(null)
      this.$localStorage.remove(TOKEN_STORAGE_KEY)
      eventBus.$emit(LOGOUT)
    },
    methods: {
      ...mapActions(['setToken', 'setUser']),
      formSubmit: function () {
        if (!this.isFormValid) {
          return
        }
        let self = this
        self.isLoading = true
        self.isAlertVisible = false
        getAuthToken(this.form)
          .then(response => {
            let decoded = jwtDecode(response.data.token)
            let token = `Bearer ${response.data.token}`
            self.setToken(token)
            self.setUser(decoded.username)
            self.$localStorage.set(TOKEN_STORAGE_KEY, token)
            self.showAlert('Redirecting', SUCCESS)
            eventBus.$emit(LOGIN)
            setTimeout(function () {
              self.$router.push('/')
            }, 1500)
          })
          .catch(function (error) {
            self.showAlert(error.response.data.message ? error.response.data.message : 'An error occurred', DANGER)
          })
      },
      showAlert: function (message, variant = DANGER) {
        this.alertVariant = variant
        this.alertMsg = message
        this.isAlertVisible = true
        this.isLoading = false
      }
    },
    computed: {
      isFormValid: function () {
        return this.form.username.length && this.form.password.length
      },
      isButtonActive: function () {
        return this.isFormValid && !this.isLoading
      }
    }
  }
</script>


<style scoped lang="scss">
  .alert-container {
    margin: 3vh 0;
  }
</style>
