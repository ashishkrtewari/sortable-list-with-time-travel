<template>
  <div class="animate-slide-in col-start-2 col-span-8 md:col-span-6 md:ml-10">
    <h2 class="pb-5 text-2xl text-white">Sortable Post List</h2>
    <PostItem v-if="posts && posts.length"></PostItem>
    <div v-else class="items-center grid grid-cols-12 mb-2 px-3 py-6 rounded shadow-md justify-center" :class="error ? 'bg-red-500 text-white' : 'bg-white'">
      <h4 class="col-span-6 text-center">{{statusMessage}}</h4>
      <div class="col-span-6 text-center" v-if="error">
        <button
          @click="getPosts()"
          class="rounded shadow-sm bg-spring-green text-dark-grey px-3 py-2"
          aria-label="Retry Fetching Posts"
        >
        Retry Fetching Posts
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import PostItem from './PostItem.vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'PostList',
  components: {
    PostItem
  },
  computed: {
    ...mapState([
      'posts',
      'statusMessage',
      'error'
    ])
  },
  methods: {
    ...mapActions([
      'getPosts'
    ])
  },
  created () {
    this.getPosts()
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
