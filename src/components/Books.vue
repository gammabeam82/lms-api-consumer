<template>
  <b-container fluid class="fullscreen">
    <b-row>
      <b-col>

        <b-form v-on:submit.prevent>
          <b-form-group>
            <b-form-input type="text" v-model="condition"></b-form-input>
          </b-form-group>
          <b-form-radio-group v-model="selected" v-bind:options="options" plain>
          </b-form-radio-group>
        </b-form>

        <hr/>

        <b-list-group>
          <b-list-group-item v-for="(book, index) in filteredBooks" v-bind:key="book.id">
            {{ index+1 }}
            <i> {{ book.author.firstName }} {{ book.author.lastName }}</i>
            <b> {{ book.name }}</b>
            <span v-if="book.genre" class="text-muted"> ({{ book.genre.name }})</span>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import loadItems from '../http/load_items'
  import getFilteredBooks from '../filters/books_filter'

  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'Books',
    data () {
      return {
        condition: '',
        selected: 'Books',
        options: [
          'Books', 'Authors', 'Genres'
        ]
      }
    },
    created: function () {
      if (!this.books) {
        this.updateBooks()
      }
    },
    methods: {
      ...mapActions(['setBooks']),
      ...mapGetters(['getBooks']),
      updateBooks: function () {
        let self = this
        self.setBooks(null)
        loadItems('books')
          .then(function (response) {
            self.setBooks(response.data.items)
          })
          .catch(function (error) {
            if (error.response && error.response.status === 401) {
              self.$router.push('/login')
            }
          })
      }
    },
    computed: {
      filteredBooks: function () {
        if (!this.getBooks()) {
          return []
        }
        return getFilteredBooks(this.getBooks(), this.condition, this.selected)
      }
    }
  }
</script>


<style scoped lang="scss">

</style>
